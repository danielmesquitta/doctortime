import React from 'react'
import { FaHeartbeat as Logo } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <>
      <Logo size={50} color="#fafafa" />
      <form>
        <input type="email" placeholder="Seu email" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  )
}
