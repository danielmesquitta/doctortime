import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

import Input from '~/components/Input'
import Button from '~/components/Button'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`

export const SignUpLink = styled(TouchableOpacity)`
  padding: 20px;
`

export const SignUpLinkText = styled.Text`
  color: #fafafa;
  font-weight: bold;
  font-size: 16px;
`
