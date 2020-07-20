import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './configs/ReactotronConfig'
import Routes from './routes'
import GlobalStyles from './styles/global'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  )
}

export default App
