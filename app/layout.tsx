import type { Metadata } from 'next'
import './styles/globals.css'
import { Jost } from 'next/font/google'
import { ToastProvider } from '@radix-ui/react-toast'

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
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
      <body className={jost.variable}>
        <ToastProvider>
          <main className="main">{children}</main>
        </ToastProvider>
      </body>
    </html>
  )
}
