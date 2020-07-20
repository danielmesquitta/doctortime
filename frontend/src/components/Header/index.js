import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaHeartbeat as Logo } from 'react-icons/fa'

import Notifications from '~/components/Notifications'
import { colors } from '~/styles/variables'
import { Container, Content, Profile } from './styles'

export default function Header() {
  const profile = useSelector(state => state.user.profile)

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
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSN7BAE9x9Eehg7-JnS_Kdn_QTT5Dl0Hac81w&usqp=CAU'
              }
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
