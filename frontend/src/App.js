import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'

import './configs/ReactotronConfig'
import Routes from './routes'
import GlobalStyles from './styles/global'
import { store, persistor } from './store'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes />
          <GlobalStyles />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
