import React, { useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux'

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignUpLink,
  SignUpLinkText,
} from './styles'
import Background from '~/styles/Background'
import Input from '~/components/Input'
import Button from '~/components/Button'
import { signUpRequest } from '~/store/modules/auth/actions'

const SignUp = ({ navigation }) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password))
  }

  return (
    <Background>
      <Container>
        <Icon name="heartbeat" color="#fafafa" size={100} />

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
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Criar conta
          </SubmitButton>
        </Form>

        <SignUpLink onPress={() => navigation.navigate('SignIn')}>
          <SignUpLinkText>Já possuo uma conta</SignUpLinkText>
        </SignUpLink>
      </Container>
    </Background>
  )
}

export default SignUp
