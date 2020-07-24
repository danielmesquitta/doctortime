import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { lighten } from 'polished'

import Input from '~/components/Input'
import Button from '~/components/Button'
import { colors } from '~/styles/variables'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Title = styled.Text`
  font-size: 20px;
  color: #fafafa;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
`

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`

export const LogoutButton = styled(TouchableOpacity)`
  margin-top: 10px;
  background: ${lighten(0.05, colors.error)};
  height: 48px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`

export const LogoutButtonText = styled.Text`
  color: #fafafa;
  font-size: 16px;
`
