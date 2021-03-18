import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/homepage'

export default function Home(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Início | Dont Be Sedentary</title>
      </Head>

      <h1>This is going to be the app {"Don't be sedentary"}</h1>
    </Container>
  )
}
