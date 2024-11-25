import { ToastProvider } from '@radix-ui/react-toast'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastProvider>{children}</ToastProvider>
    </>
  )
}
