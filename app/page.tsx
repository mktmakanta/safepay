'use client'

import { useSession, signIn } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (!session) {
    return (
      <div>
        <p>You are not signed in.</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    )
  }
  return (
    <>
      <h1>Home Page</h1>
      {session ? <div>Online</div> : <div>offline</div>}
    </>
  )
}
