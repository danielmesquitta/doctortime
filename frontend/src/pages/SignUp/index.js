import React from 'react'
import { FaHeartbeat as Logo } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <>
      <Logo size={70} color="#fafafa" />
      <form>
        <input placeholder="Nome completo" />
        <input type="email" placeholder="Seu email" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/register">Já tenho uma conta</Link>
      </form>
    </>
  )
}
