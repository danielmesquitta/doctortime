import React, { forwardRef } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Container, StyledInput } from './styles'

const Input = ({ style, icon, ...otherProps }, ref) => {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" />}
      <StyledInput {...otherProps} ref={ref} />
    </Container>
  )
}

export default forwardRef(Input)
