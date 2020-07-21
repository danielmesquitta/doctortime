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

const SignIn = ({ navigation }) => {
  const passwordRef = useRef()

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Icon name="heartbeat" color="#fafafa" size={100} />

        <Form>
          <FormInput
            icon="envelope"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
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

        <SignUpLink onPress={() => navigation.navigate('SignUp')}>
          <SignUpLinkText>Criar conta gratuita</SignUpLinkText>
        </SignUpLink>
      </Container>
    </Background>
  )
}

export default SignIn
