import 'react-native-gesture-handler'

import React from 'react'
import { StatusBar } from 'react-native'

import Routes from './routes'
import { colors } from './styles/variables'

function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.mainDark} barStyle="light-content" />
      <Routes />
    </>
  )
}

export default App
