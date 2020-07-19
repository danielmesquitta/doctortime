import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  )
}
