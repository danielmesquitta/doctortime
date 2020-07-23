import React from 'react'
import { Text } from 'react-native'

import Background from '~/styles/Background'
import { Container, Title, List } from './styles'
import Appointment from '~/components/Appointment'

const data = [1, 2, 3, 4, 5]

const Dashboard = () => {
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={data}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Appointment />}
        />
      </Container>
    </Background>
  )
}

export default Dashboard
