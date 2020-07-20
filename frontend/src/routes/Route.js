import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import AuthLayout from '~/styles/layouts/auth'
import DefaultLayout from '~/styles/layouts/default'

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...otherProps
}) {
  const signed = false

  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  const Layout = signed ? DefaultLayout : AuthLayout

  return (
    <Route
      {...otherProps}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}
