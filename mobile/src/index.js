import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import './config/reactotron'

import Routes from './routes'
import { store, persistor } from '~/store'
import { colors } from './styles/variables'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor={colors.mainDark} barStyle="light-content" />
        <Routes />
      </PersistGate>
    </Provider>
  )
}

export default App
