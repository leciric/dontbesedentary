import React from 'react'
import { signIn } from 'next-auth/client'
import { FaGithub } from 'react-icons/fa'

import { Button, Content } from './styles'

export function SignInButton(): JSX.Element {
  return (
    <Button
      type="button"
      onClick={() =>
        signIn('github', {
          callbackUrl: 'dontbesedentary.vercel.app/dashboard'
        })
      }
    >
      <Content>
        <FaGithub size="45" />
        Entrar com Github
      </Content>
    </Button>
  )
}
