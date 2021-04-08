import React from 'react'
import { Container } from '../styles/pages/signin'

export default function SignIn(): JSX.Element {
  return (
    <Container>
      <img src="/logo.png" alt="Don't be sedentary logo" />
      <h3>Bem vindo!</h3>
      <p>Faça seu login</p>
      <span>Digite seu login.</span>
      <span>Digite sua senha.</span>
    </Container>
  )
}
