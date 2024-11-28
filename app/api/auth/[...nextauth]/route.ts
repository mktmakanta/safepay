import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { isPasswordValid } from '@/app/lib/hash'
import db from '@/app/lib/mongodb'
import User from '@/app/models/Users'

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      //@ts-ignore
      async authorize(credentials: { name: string; email: string; password: string }) {
        await db.connect()

        const user = await User.findOne({ email: credentials.email })

        // Check if user exists
        if (!user) {
          return null
        }

        // Validate password
        const isPasswordMatch = await isPasswordValid(credentials.password, user.password)

        if (!isPasswordMatch) {
          return null
        }

        return {
          name: user.name,
          email: user.email,
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/error', // Use the correct relative path for the error page
  },

  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },
})
