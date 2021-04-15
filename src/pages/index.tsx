import React from 'react'
import { Button } from '../components/Button'
import { Container, Content } from '../styles/pages/index'

export default function SignIn(): JSX.Element {
  return (
    <Container>
      <img src="/logo.svg" alt="Don't be sedentary" />
      <Content>
        <strong>Bem-vindo!</strong>
        <p>Faça login com Github para continuar</p>
        <span>Obs.: Você precisa ter um e-mail público no github.</span>
        <Button>Entrar com Github</Button>
      </Content>
    </Container>
  )
}
