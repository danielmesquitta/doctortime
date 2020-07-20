import React from 'react'
import { FaHeartbeat as Logo } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

export default function SignIn() {
  function handleSubmit({ email, password }) {}

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
