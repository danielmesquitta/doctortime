import React, { useState, useMemo, useEffect } from 'react'
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns'
import { pt } from 'date-fns/locale'
import { utcToZonedTime } from 'date-fns-tz'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import api from '~/services/api'

import { Container, Time } from './styles'

const range = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export default function Dashboard() {
  const [date, setDate] = useState(new Date())
  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      })
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0)
        const compareDate = utcToZonedTime(date, timezone)
        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(appointment =>
            isEqual(parseISO(appointment.date), compareDate)
          ),
        }
      })
      setSchedule(data)
    }
    loadSchedule()
  }, [date])

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  )

  function handlePrevDay() {
    setDate(subDays(date, 1))
  }

  function handleNextDay() {
    setDate(addDays(date, 1))
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <FaChevronLeft size={24} color="#fafafa" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <FaChevronRight size={24} color="#fafafa" />
        </button>
      </header>

      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  )
}
