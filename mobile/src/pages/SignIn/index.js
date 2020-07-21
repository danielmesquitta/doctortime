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
import { signInRequest } from '~/store/modules/auth/actions'

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch()
  const passwordRef = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit() {
    dispatch(signInRequest(email, password))
  }

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
            Acessar
          </SubmitButton>
        </Form>

        <SignUpLink onPress={() => navigation.navigate('SignUp')}>
          <SignUpLinkText>Criar conta gratuita</SignUpLinkText>
        </SignUpLink>
      </Container>
    </Background>
  )
}

export default SignIn
