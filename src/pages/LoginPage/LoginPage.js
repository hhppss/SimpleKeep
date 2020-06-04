import React, { useCallback, useContext } from 'react'
import { useHistory } from 'react-router'
import { Link, Redirect } from 'react-router-dom'
import { app } from 'services/firebase/base'
import { AuthContext } from 'services/firebase/auth'
import { Container, LoginForm, Input, SubmitButton } from './LoginPage.styled'

export const LoginPage = () => {
  const history = useHistory()
  const { currentUser } = useContext(AuthContext)

  const handleLogin = useCallback(
    async e => {
      e.preventDefault()
      const { email, password } = e.target.elements
      try {
        await app.auth().signInWithEmailAndPassword(email.value, password.value)
        history.push('/notes')
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert(error)
      }
    },
    [history]
  )

  if (currentUser) {
    return <Redirect to='/notes' />
  }

  return (
    <Container>
      <LoginForm onSubmit={handleLogin}>
        <h2>Войти</h2>
        <Input name='email' type='email' placeholder='E-mail' />
        <Input name='password' type='password' placeholder='Пароль' />
        <SubmitButton type='submit'>Войти</SubmitButton>
        <p>
          Нет аккаунта?
          <Link to='registration'> Зарегистрироваться</Link>
        </p>
      </LoginForm>
    </Container>
  )
}

export default LoginPage
