import SideBar from '@/components/Sidebar'
import Navbar from '../components/NavBar'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="max-w-screen-7xl h-screen flex overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      {/* Content Area */}
      <main className="flex-1 flex flex-col h-full  overflow-auto bg-slate-50">
        <Navbar />
        <div className="flex-1  overflow-y-scroll">{children}</div>
      </main>
    </section>
  )
}
