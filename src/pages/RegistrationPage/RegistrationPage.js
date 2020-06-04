import React, { useCallback } from 'react'
import { useHistory } from 'react-router'
import { app } from 'services/firebase/base'
import {
  Container,
  RegistrationForm,
  Input,
  SubmitButton
} from './RegistrationPage.styled'

export const RegistrationPage = () => {
  const history = useHistory()

  const handleRegistration = useCallback(
    async e => {
      e.preventDefault()
      const { email, password } = e.target.elements
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
        history.push('/notes')
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert(error)
      }
    },
    [history]
  )

  return (
    <Container>
      <RegistrationForm onSubmit={handleRegistration}>
        <h2>Регистрация</h2>
        <Input name='email' type='email' placeholder='E-mail' />
        <Input name='password' type='password' placeholder='Пароль' />
        <SubmitButton type='submit'>Зарегистрироваться</SubmitButton>
      </RegistrationForm>
    </Container>
  )
}

export default RegistrationPage
