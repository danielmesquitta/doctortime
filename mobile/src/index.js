import 'react-native-gesture-handler'

import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import './config/reactotron'

import Routes from './routes'
import { store, persistor } from '~/store'
import { colors } from './styles/variables'

function Index() {
  useEffect(() => {
    changeNavigationBarColor(colors.mainDark)
  }, [])

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor={colors.mainDark} barStyle="light-content" />
        <Routes />
      </PersistGate>
    </Provider>
  )
}

export default Index
