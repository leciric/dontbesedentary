import React, { useContext } from 'react'
import { CountdownContext } from '../../hooks/CountdownContext'
import { Container, Button } from './styles'

export function Countdown(): JSX.Element {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, sencondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{sencondRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <Button disabled>Ciclo encerrado</Button>
      ) : (
        <>
          {isActive ? (
            <Button
              type="button"
              className="countdownButtonActive"
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </Button>
          ) : (
            <Button
              type="button"
              className="countdownButton"
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </Button>
          )}
        </>
      )}
    </div>
  )
}
