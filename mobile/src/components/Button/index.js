import React from 'react'
import { ActivityIndicator } from 'react-native'

import { Container, Text } from './styles'

const Button = ({ children, loading, ...otherProps }) => {
  return (
    <Container {...otherProps}>
      {loading ? (
        <ActivityIndicator size="small" color="#fafafa" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  )
}

export default Button
