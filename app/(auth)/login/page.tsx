'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface SignInProps {
  isSignInMode: boolean
  setSignInMode: Dispatch<SetStateAction<boolean>>
}

export default function SignIn(props: SignInProps) {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const router = useRouter()

  const handleSignIn = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    console.log('Email: ', email)
    await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
      .then(response => {
        console.log(response)
        router.replace('/profile')
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      {props.isSignInMode ? (
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold font-mono text-center mb-6">Sign In</h2>
          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="text-right">
              <Link href="/reset-password" className="text-sm text-gray-500 hover:text-red-500">
                Forgot Password?
              </Link>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-2/3 px-4 py-2 text-white bg-red-500 rounded-full hover:bg-transparent hover:text-red-500 hover:border hover:border-red-500 transition"
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Welcome Back!</h2>
          <p className="text-gray-600 mb-6">To continue your journey with us, please login</p>
          <button
            onClick={() => props.setSignInMode(true)}
            className="px-6 py-2 text-white bg-gray-800 rounded-full hover:bg-transparent hover:text-gray-800 hover:border hover:border-gray-800 transition"
          >
            SIGN IN
          </button>
        </div>
      )}
    </div>
  )
}
