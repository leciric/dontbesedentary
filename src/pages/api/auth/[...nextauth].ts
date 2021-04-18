import { query as q } from 'faunadb'

import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { fauna } from '../../../services/fauna'

interface FinalUser {
  email: string
  image: string
  name: string
  currentExperience: number
  level: number
  challengesCompleted: number
  activeChallenge: number
}

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    })
  ],
  callbacks: {
    async session(session) {
      try {
        const userData = await fauna.query<FinalUser>(
          q.Select(
            'data',
            q.Get(
              q.Match(q.Index('user_by_email'), q.Casefold(session.user.email))
            )
          )
        )
        return {
          ...session,
          challenge: {
            currentExperience: userData.currentExperience,
            level: userData.level,
            challengesCompleted: userData.challengesCompleted,
            activeChallenge: userData.activeChallenge
          }
        }
      } catch {
        return {
          ...session,
          challenge: {
            currentExperience: 0,
            level: 1,
            challengesCompleted: 0,
            activeChallenge: 1
          }
        }
      }
    },
    async signIn(user) {
      const { email, name, image } = user

      const data = {
        email,
        image,
        name,
        currentExperience: 0,
        level: 1,
        challengesCompleted: 0,
        activeChallenge: 1
      }
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index('user_by_email'), q.Casefold(user.email))
              )
            ),
            q.Create(q.Collection('users'), { data }),
            q.Get(q.Match(q.Index('user_by_email'), q.Casefold(user.email)))
          )
        )
        return true
      } catch {
        return false
      }
    }
  }
})
