import React from 'react'
import { FaHeartbeat as Logo } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'

export default function SignUp() {
  function handleSubmit({ name, email, password, confirmPassword }) {}

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
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmar senha"
          minLength={6}
          required
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  )
}
