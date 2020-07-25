import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Container } from './styles'

const GoBackButton = ({ handlePress }) => {
  return (
    <Container onPress={handlePress}>
      <Icon name="angle-left" color="#fafafa" size={30} />
    </Container>
  )
}

export default GoBackButton
