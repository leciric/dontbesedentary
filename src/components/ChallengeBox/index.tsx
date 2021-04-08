import React, { useContext } from 'react'
import { ChallengesContext } from '../../hooks/ChallengesContext'
import { CountdownContext } from '../../hooks/CountdownContext'
import {
  Container,
  ChallengeNotActive,
  Button,
  ChallengeActive
} from './styles'

export function ChallengeBox(): JSX.Element {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  )
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <Button
              type="button"
              className="challengeFailedButton"
              onClick={handleChallengeFailed}
            >
              Falhei
            </Button>
            <Button
              type="button"
              className="challengeSucceededButton"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </Button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  )
}
