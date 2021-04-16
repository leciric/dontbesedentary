import React from 'react'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { SignInButton } from '../components/SignInButton'
import { Container, Content } from '../styles/pages/index'

export default function SignIn(): JSX.Element {
  return (
    <Container>
      <img src="/logo.svg" alt="Don't be sedentary" />
      <Content>
        <strong>Bem-vindo!</strong>
        <p>Faça login com Github para continuar</p>
        <span>Obs.: Você precisa ter um e-mail público no github.</span>
        <SignInButton />
      </Content>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx)
  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}
