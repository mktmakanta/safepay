'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Toast,
  ToastProvider,
  ToastAction,
  ToastDescription,
  ToastTitle,
} from '@radix-ui/react-toast'

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isToastOpen, setIsToastOpen] = useState(false)
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      setError("Passwords don't match")
      setIsToastOpen(true) // Show toast on password mismatch
      return
    }

    // Proceed with sign-up if passwords match
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      setError(error.message)
      setIsToastOpen(true) // Show toast on error
    } else {
      router.push('/auth/login') // Redirect to login page after successful signup
    }
  }

  return (
    <ToastProvider>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h1>
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-300"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-300"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
                className="w-full p-3 rounded-lg border border-gray-300"
              />
            </div>
            <Button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Register
            </Button>
          </form>
          {error && isToastOpen && (
            <Toast open={isToastOpen} onOpenChange={setIsToastOpen}>
              <div className="p-4 bg-red-500 text-white rounded-lg">
                <ToastTitle>Error</ToastTitle>
                <ToastDescription>{error}</ToastDescription>
                <ToastAction asChild altText="Close">
                  <Button className="bg-red-700 mt-2">Close</Button>
                </ToastAction>
              </div>
            </Toast>
          )}
        </div>
      </div>
    </ToastProvider>
  )
}

export default RegisterPage
