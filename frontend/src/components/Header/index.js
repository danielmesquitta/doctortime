import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeartbeat as Logo } from 'react-icons/fa'

import Notifications from '~/components/Notifications'
import { colors } from '~/styles/variables'
import { Container, Content, Profile } from './styles'

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Logo size={30} color={colors.main} />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Diego Fernandes</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://avatars2.githubusercontent.com/u/60039311?s=460&u=f8ba29994516053125b48e2ba258523a79f651e6&v=4"
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
