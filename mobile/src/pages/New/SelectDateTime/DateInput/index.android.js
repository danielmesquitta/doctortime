import React, { useMemo } from 'react'
import { DatePickerAndroid } from 'react-native'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Container, DateButton, DateText } from './styles'

const DateInput = ({ date, onChange }) => {
  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [date]
  )

  async function handleOpenPicker() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    })
    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day)
      onChange(selectedDate)
    }
  }

  return (
    <Container>
      <DateButton onPress={handleOpenPicker}>
        <Icon name="calendar" color="#fafafa" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>
    </Container>
  )
}

export default DateInput
