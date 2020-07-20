import { takeLatest, call, put, all } from 'redux-saga/effects'

import api from '~/services/api'
import { signInSuccess } from './actions'

export function* signIn({ payload }) {
  const { email, password, history } = payload

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  })

  const { token, user } = response.data

  if (!user.provider) {
    return
  }

  yield put(signInSuccess(token, user))
  history.push('/dashboard')
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)])
