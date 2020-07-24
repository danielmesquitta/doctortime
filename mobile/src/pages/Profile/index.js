import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Container,
  Title,
  Separator,
  Form,
  FormInput,
  SubmitButton,
  LogoutButton,
  LogoutButtonText,
} from './styles'
import Background from '~/styles/Background'

import { updateProfileRequest } from '~/store/modules/user/actions'
import { signOut } from '~/store/modules/auth/actions'

const Profile = () => {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.user.profile)

  const emailRef = useRef()
  const oldPasswordRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const [name, setName] = useState(profile.name)
  const [email, setEmail] = useState(profile.email)

  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    setOldPassword('')
    setPassword('')
    setConfirmPassword('')
  }, [profile])

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    )
  }

  function handleLogout() {
    dispatch(signOut())
  }

  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>
        <Form>
          <FormInput
            icon="user"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="envelope"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Sua senha atual"
            ref={oldPasswordRef}
            returnKeyType="send"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Sua nova senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Confirmação de senha"
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton>
          <LogoutButton onPress={handleLogout}>
            <LogoutButtonText>Sair do DoctorTime</LogoutButtonText>
          </LogoutButton>
        </Form>
      </Container>
    </Background>
  )
}

export default Profile
