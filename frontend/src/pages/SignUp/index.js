import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaHeartbeat as Logo } from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import { signUpRequest } from '~/store/modules/auth/actions'

export default function SignUp() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  const history = useHistory()

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password, history))
  }

  return (
    <>
      <Logo size={70} color="#fafafa" />
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" required />
        <Input name="email" type="email" placeholder="Seu email" required />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha"
          minLength={6}
          required
        />

        <button type="submit">
          {loading ? 'Carregando...' : 'Criar conta'}
        </button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  )
}
