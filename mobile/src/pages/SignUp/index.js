import React, { useRef } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

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

const SignUp = ({ navigation }) => {
  const emailRef = useRef()
  const passwordRef = useRef()

  function handleSubmit() {}

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
          />

          <FormInput
            icon="lock"
            secureTextEntry
            placeholder="Sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>

        <SignUpLink onPress={() => navigation.navigate('SignIn')}>
          <SignUpLinkText>Já possuo uma conta</SignUpLinkText>
        </SignUpLink>
      </Container>
    </Background>
  )
}

export default SignUp
