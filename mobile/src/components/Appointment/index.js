import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

import { colors } from '~/styles/variables'
import { Container, Left, Avatar, Info, Name, Time } from './styles'

const Appointment = () => {
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri:
              'https://avatars2.githubusercontent.com/u/60039311?s=460&u=f8ba29994516053125b48e2ba258523a79f651e6&v=4',
          }}
        />

        <Info>
          <Name>Daniel Mesquita</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>

      <TouchableOpacity>
        <Icon name="calendar-times-o" size={20} color={colors.error} />
      </TouchableOpacity>
    </Container>
  )
}

export default Appointment
