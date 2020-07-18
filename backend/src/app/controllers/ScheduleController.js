const { startOfDay, endOfDay, parseISO } = require('date-fns')
const { Op } = require('sequelize')

const User = require('../models/User')
const Appointment = require('../models/Appointment')

class ScheduleController {
  async index(req, res) {
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    })
    if (!isProvider) {
      return res.status(401).json({ error: 'User is not a provider' })
    }

    const { date } = req.query
    if (!date) {
      return res.status(400).json({ error: 'Date not provided' })
    }

    const parsedDate = parseISO(date)
    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      order: ['date'],
    })

    return res.json(appointments)
  }
}

module.exports = new ScheduleController()
