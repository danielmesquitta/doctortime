const Yup = require('yup')
const {
  startOfHour,
  parseISO,
  isBefore,
  format,
  subHours,
} = require('date-fns')
const { pt } = require('date-fns/locale')

const Queue = require('../../lib/Queue')
const CancellationMail = require('../jobs/CancellationMail')

const Notification = require('../schemas/Notification')

const User = require('../models/User')
const File = require('../models/File')
const Appointment = require('../models/Appointment')

class AppointmentController {
  async index(req, res) {
    const { page = 1 } = req.query

    const appointments = await Appointment.findAll({
      where: { user_id: req.userId, canceled_at: null },
      order: ['date'],
      limit: 20,
      offset: (page - 1) * 20,
      attributes: ['id', 'date'],
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [
            { model: File, as: 'avatar', attributes: ['id', 'path', 'url'] },
          ],
        },
      ],
    })

    return res.json(appointments)
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    })
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' })
    }

    const { provider_id, date } = req.body

    if (req.userId === provider_id) {
      return res
        .status(400)
        .json({ error: 'You cannot create appointments with yourself' })
    }

    const isProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    })
    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'You can only create appointments with providers' })
    }

    const hourStart = startOfHour(parseISO(date))
    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permited' })
    }

    const isNotAvailable = await Appointment.findOne({
      where: { provider_id, canceled_at: null, date: hourStart },
    })
    if (isNotAvailable) {
      return res.status(400).json({ error: 'Date is not available' })
    }

    const appointment = await Appointment.create({
      user_id: req.userId,
      provider_id,
      date: hourStart,
    })

    const user = await User.findByPk(req.userId)
    const formattedDate = format(
      hourStart,
      "'dia' dd 'de' MMMM', às' H:mm'h'",
      { locale: pt }
    )

    await Notification.create({
      content: `Novo agendamento de ${user.name} para ${formattedDate}`,
      user: provider_id,
    })

    return res.json(appointment)
  }

  async delete(req, res) {
    const appointment = await Appointment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['name', 'email'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
    })

    if (appointment.user_id !== req.userId) {
      res
        .status(401)
        .json({ error: "You don't have permission to cancel this appointment" })
    }

    const latestDateToCancel = subHours(appointment.date, 2)
    if (isBefore(latestDateToCancel, new Date())) {
      return res
        .status(400)
        .json({ error: 'You can only cancel appointments 2 hours in advance' })
    }
    appointment.canceled_at = new Date()
    await appointment.save()

    await Queue.add(CancellationMail.key, {
      appointment,
    })

    res.json(appointment)
  }
}

module.exports = new AppointmentController()
