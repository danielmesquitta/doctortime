import React, { useState, useEffect } from 'react'

import { Container, HourList, Hour, Title } from './styles'
import Background from '~/styles/Background'
import DateInput from './DateInput'
import api from '~/services/api'

const SelectDateTime = ({ navigation, route }) => {
  const { provider } = route.params

  const [date, setDate] = useState(new Date())
  const [hours, setHours] = useState([])

  useEffect(() => {
    ;(async () => {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      })
      setHours(response.data)
    })()
  }, [date, provider.id])

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    })
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
        <HourList
          data={hours}
          keyExtractor={item => item.time}
          renderItem={({ item }) => (
            <Hour
              enabled={item.available}
              onPress={() => handleSelectHour(item.value)}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  )
}

export default SelectDateTime
