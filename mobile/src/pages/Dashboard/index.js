import React, { useEffect, useState } from 'react'

import Background from '~/styles/Background'
import { Container, Title, List } from './styles'
import Appointment from '~/components/Appointment'
import api from '~/services/api'

const Dashboard = ({ navigation }) => {
  const [appointments, setAppointments] = useState([])

  async function handleCancellation(id) {
    console.log('test')
    const response = await api.delete(`appointments/${id}`)
    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? { ...appointment, canceled_at: response.data.canceled_at }
          : appointment
      )
    )
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      ;(async () => {
        const response = await api.get('appointments')
        setAppointments(response.data)
      })()
    })
  }, [])

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment
              onCancellation={() => handleCancellation(item.id)}
              appointment={item}
            />
          )}
        />
      </Container>
    </Background>
  )
}

export default Dashboard
