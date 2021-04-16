import React, { useContext } from 'react'
import { ChallengesContext } from '../../hooks/ChallengesContext'
import { Container } from './styles'

export function CompletedChallenges(): JSX.Element {
  const { level } = useContext(ChallengesContext)
  return (
    <Container>
      <span>Desafios completos</span>
      <span>{level}</span>
    </Container>
  )
}
