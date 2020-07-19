const {
  startOfDay,
  endOfDay,
  setHours,
  setMinutes,
  setSeconds,
  format,
  isAfter,
} = require('date-fns')
const { Op } = require('sequelize')

const Appointment = require('../models/Appointment')

class AvailableController {
  async index(req, res) {
    const { date } = req.query
    if (!date) {
      return res.status(400).json({ error: 'Invalid date' })
    }

    const searchDate = Number(date)

    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.params.providerId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
        },
      },
    })

    const schedule = [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
      '23:00',
    ]

    const available = schedule.map(time => {
      const [hour, minute] = time.split(':')
      const value = setSeconds(
        setMinutes(setHours(searchDate, hour), minute),
        0
      )

      return {
        time,
        value: format(value, "yyyy-MM-dd'T'HH:mm:ssxxx"),
        available:
          isAfter(value, new Date()) &&
          !appointments.find(
            appointment => format(appointment.date, 'HH:mm') === time
          ),
      }
    })

    res.json(available)
  }
}

module.exports = new AvailableController()
