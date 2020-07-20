import React from 'react'
import { useDispatch } from 'react-redux'
import { FaHeartbeat as Logo } from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

import { signInRequest } from '~/store/modules/auth/actions'

export default function SignIn() {
  const dispatch = useDispatch()
  const history = useHistory()

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password, history))
  }

  return (
    <>
      <Logo size={70} color="#fafafa" />
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email" required />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha"
          required
        />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  )
}
