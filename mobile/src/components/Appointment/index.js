import React, { useMemo } from 'react'
import { parseISO, formatRelative } from 'date-fns'
import { pt } from 'date-fns/locale'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import { colors } from '~/styles/variables'
import { Container, Left, Avatar, Info, Name, Time } from './styles'

const Appointment = ({ appointment, onCancellation }) => {
  const dateParsed = useMemo(
    () =>
      formatRelative(parseISO(appointment.date), new Date(), {
        locale: pt,
        addSuffix: true,
      }),
    [appointment.date]
  )

  return (
    <Container past={appointment.past}>
      <Left>
        <Avatar
          source={{
            uri: appointment.provider.avatar
              ? appointment.provider.avatar.url
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSN7BAE9x9Eehg7-JnS_Kdn_QTT5Dl0Hac81w&usqp=CAU',
          }}
        />

        <Info>
          <Name>{appointment.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {appointment.cancelable && !appointment.canceled_at && (
        <TouchableOpacity onPress={onCancellation}>
          <Icon name="calendar-times-o" size={20} color={colors.error} />
        </TouchableOpacity>
      )}
    </Container>
  )
}

export default Appointment
