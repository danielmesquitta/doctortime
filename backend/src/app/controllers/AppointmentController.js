const Yup = require('yup')
const { startOfHour, parseISO, isBefore } = require('date-fns')

const User = require('../models/User')
const Appointment = require('../models/Appointment')

class AppointmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    })
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' })
    }

    const { provider_id, date } = req.body

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

    return res.json(appointment)
  }
}

module.exports = new AppointmentController()