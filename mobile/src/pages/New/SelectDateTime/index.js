import React, { useState } from 'react'

import { Container } from './styles'
import Background from '~/styles/Background'
import DateInput from './DateInput'

const SelectDateTime = () => {
  const [date, setDate] = useState(new Date())

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  )
}

export default SelectDateTime
