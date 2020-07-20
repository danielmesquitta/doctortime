import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '~/services/api'
import { signInSuccess, signFailure } from './actions'

export function* signIn({ payload }) {
  try {
    const { email, password, history } = payload
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    })
    const { token, user } = response.data
    if (!user.provider) {
      toast.error('Usuário não é prestador de serviços')
      return
    }

    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(signInSuccess(token, user))
    history.push('/dashboard')
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados e tente novamente')
    yield put(signFailure())
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, history } = payload
    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    })
    history.push('/')
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados e tente novamente')
    yield put(signFailure())
  }
}

export function setToken({ payload }) {
  if (!payload) return
  const { token } = payload.auth
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export function signOut({ payload }) {
  const { history } = payload
  history.push('/')
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
])
