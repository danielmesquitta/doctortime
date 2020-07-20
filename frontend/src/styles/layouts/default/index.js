import React from 'react'

import { Wrapper } from './styles'
import Header from '~/components/Header'

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}
