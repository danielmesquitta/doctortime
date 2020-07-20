import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './configs/ReactotronConfig'
import Routes from './routes'
import GlobalStyles from './styles/global'

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
