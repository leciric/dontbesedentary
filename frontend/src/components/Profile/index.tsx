import React, { useContext } from 'react'
import { ChallengesContext } from '../../hooks/ChallengesContext'
import { Container } from './styles'

export function Profile(): JSX.Element {
  const { level } = useContext(ChallengesContext)
  return (
    <Container>
      <img src="https://github.com/leciric.png" alt="Leandro CIric" />
      <div>
        <strong>Leandro Ciric</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </Container>
  )
}
