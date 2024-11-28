import { Dispatch, SetStateAction, useState } from 'react'

interface SignUpProps {
  isSignInMode: boolean
  setSignInMode: Dispatch<SetStateAction<boolean>>
}

export default function SignUp(props: SignUpProps) {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isEmailInvalid, setEmailInvalid] = useState<boolean>(false)

  // Validate inputs
  const validateInputs = () => setEmailInvalid(true)

  const handleSignup = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const newUser = {
      name,
      email,
      password,
    }

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    if (data.userExists) {
      validateInputs()
    } else {
      setEmailInvalid(false)
      setName('')
      setEmail('')
      setPassword('')
      props.setSignInMode(true)
    }
  }

  return (
    <div className="flex h-full flex-col justify-center items-center px-5">
      {props.isSignInMode ? (
        <div className="text-center space-y-5 text-white font-mono">
          <h2 className="text-3xl font-bold">New Here?</h2>
          <p className="text-lg">Create an account and start your journey with us</p>
          <button
            onClick={() => props.setSignInMode(false)}
            className="w-1/2 px-4 py-2 border-2 border-white text-white rounded-full bg-transparent hover:bg-white hover:text-red-500 transition"
          >
            SIGN UP
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-center">Create Account</h2>
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                minLength={1}
                maxLength={50}
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  isEmailInvalid
                    ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-2 focus:ring-red-500'
                }`}
              />
              {isEmailInvalid && (
                <p className="text-sm text-red-500 mt-1">
                  A user already exists with the entered email
                </p>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                minLength={8}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-2/3 px-4 py-2 text-white bg-red-500 rounded-full hover:bg-transparent hover:text-red-500 hover:border hover:border-red-500 transition"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
