import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const ProvidersList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  margin-top: 60px;
  padding: 0 20px;
`

export const Provider = styled(TouchableOpacity)`
  background: #fafafa;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
`

export const Avatar = styled.Image`
  background: #eee;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #222;
  text-align: center;
`
