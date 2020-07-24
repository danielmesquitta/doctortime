import React, { useState, useMemo } from 'react'
import { DatePickerIOS } from 'react-native'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Container, DateButton, DateText, Picker } from './styles'

const DateInput = ({ date, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const dateFormatted = useMemo(() => {
    format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt })
  }, [date])

  return (
    <Container>
      <DateButton onPress={() => setIsOpen(!isOpen)}>
        <Icon name="calendar" size={20} color="#fafafa" />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {isOpen && (
        <Picker>
          <DatePickerIOS
            date={date}
            onDateChange={onChange}
            minimumDate={new Date()}
            minuteInterval={60}
            locale="pt"
            mode="date"
          />
        </Picker>
      )}
    </Container>
  )
}

export default DateInput
