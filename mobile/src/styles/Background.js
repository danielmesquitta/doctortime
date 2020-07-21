import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

import { colors } from '~/styles/variables'

export default styled(LinearGradient).attrs({
  colors: [colors.mainDark, colors.mainLight],
})`
  flex: 1;
`
