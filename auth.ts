import { supabase } from '@/lib/supabaseClient'

// Sign up a new user
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) throw new Error(error.message)
  return data
}

// Log in an existing user
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw new Error(error.message)
  return data
}

// Log out the current user
export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw new Error(error.message)
}
