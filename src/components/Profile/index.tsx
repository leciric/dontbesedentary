import React, { useContext } from 'react'
import { signOut } from 'next-auth/client'
import { ChallengesContext } from '../../hooks/ChallengesContext'
import { FiLogOut } from 'react-icons/fi'
import { Container } from './styles'

interface ProfileProps {
  user: {
    name: string
    image: string
  }
}

export function Profile({ user }: ProfileProps): JSX.Element {
  const { level } = useContext(ChallengesContext)
  return (
    <Container>
      <img src={user.image} alt={user.name} />
      <div>
        <strong>{user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
      <FiLogOut size={30} onClick={() => signOut()} />
    </Container>
  )
}
