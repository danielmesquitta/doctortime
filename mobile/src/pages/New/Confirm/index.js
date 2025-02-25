import React, { useMemo } from 'react'
import { formatRelative, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'
import Icon from 'react-native-vector-icons'

import { Container, Avatar, Name, Time, SubmitButton } from './styles'
import Background from '~/styles/Background'
import api from '~/services/api'

const Confirm = ({ navigation, route }) => {
  const { provider, time } = route.params

  const timeFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time]
  )

  async function handleAddAppointment() {
    await api.post('appointments', {
      provider_id: provider.id,
      date: time,
    })
    navigation.navigate('Dashboard')
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSN7BAE9x9Eehg7-JnS_Kdn_QTT5Dl0Hac81w&usqp=CAU',
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{timeFormatted}</Time>
        <SubmitButton onPress={handleAddAppointment}>
          Confirmar Agendamento
        </SubmitButton>
      </Container>
    </Background>
  )
}

export default Confirm
