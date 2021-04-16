import React from 'react'
import { CompletedChallenges } from '../components/CompleteChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengeBox } from '../components/ChallengeBox'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'

import Head from 'next/head'

import { Container } from '../styles/pages/dashboard'

import { CountdownProvider } from '../hooks/CountdownContext'
import { ChallengesProvider } from '../hooks/ChallengesContext'

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
  session: {
    user: {
      email: string
      name: string
      image: string
    }
  }
}

export default function Home(props: HomeProps): JSX.Element {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Container>
        <Head>
          <title>Dashboard | DBS</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile user={props.session.user} />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx)
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {
      session,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
