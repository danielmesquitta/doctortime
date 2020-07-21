import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Container = styled(TouchableOpacity)`
  height: 48px;
  background: #fafafa;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  color: #222;
  font-weight: bold;
  font-size: 16px;
`
