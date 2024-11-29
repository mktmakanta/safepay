'use client'
// import Provider from './Redux/AuthProvider/sessionProvider'
import { Provider } from 'react-redux'
import './globals.css'
import { ToastProvider } from '@radix-ui/react-toast'
import store from './Redux/store'

interface Metadata {
  title: string
  description: string
}
export const Metadata = {
  title: 'safepay',
  description: 'A subscription and bills payment online platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="../assets/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        {/* <Provider> */}
        <Provider store={store}>
          <ToastProvider>
            <main className="main">{children}</main>
          </ToastProvider>
        </Provider>
        {/* </Provider> */}
      </body>
    </html>
  )
}
