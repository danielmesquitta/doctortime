import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fafafa;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  opacity: ${props => (props.past ? 0.6 : 1)};
`

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #eee;
`

export const Info = styled.View`
  margin-left: 15px;
`

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #222;
`

export const Time = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`
