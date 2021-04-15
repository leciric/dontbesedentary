import React, { ReactNode } from 'react'

import { FaGithub } from 'react-icons/fa'

import { StyledButton, Content } from './styles'

interface ButtonProps {
  children: ReactNode
}

export function Button({ children }: ButtonProps): JSX.Element {
  return (
    <StyledButton type="button">
      <Content>
        <FaGithub size="45" />
        {children}
      </Content>
    </StyledButton>
  )
}
