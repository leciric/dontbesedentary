import { query as q } from 'faunadb'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'
import { fauna } from '../../services/fauna'

interface User {
  ref: {
    id: string
  }
}

interface Challenge {
  currentExperience: number
  level: number
  challengesCompleted: number
  activeChallenge: number
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'PATCH') {
    const {
      currentExperience,
      level,
      challengesCompleted,
      activeChallenge
    }: Challenge = req.body

    const session = await getSession({ req })

    const userRef = await fauna.query<User>(
      q.Get(q.Match(q.Index('user_by_email'), q.Casefold(session.user.email)))
    )

    await fauna.query(
      q.Update(q.Ref(q.Collection('users'), userRef.ref.id), {
        data: {
          email: session.user.email,
          image: session.user.image,
          name: session.user.name,
          currentExperience,
          level,
          challengesCompleted,
          activeChallenge
        }
      })
    )

    res.status(200).json({ ok: true })
  }
}
