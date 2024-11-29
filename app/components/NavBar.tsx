'use client'

import { Power } from 'lucide-react'
import { useState } from 'react'
import { MobileMenu } from './MobileSidebar'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-green-800 lg:bg-slate-50 text-black p-4 w-full lg:h-16 shadow-sm border-b-2 border-slate-200 sticky top-0 z-20">
      <div className="mx-auto flex justify-between lg:justify-end items-center">
        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden text-white text-lg font-bold">
          <MobileMenu />
        </div>

        {/* Mobile Logo */}
        <div className="flex lg:hidden text-white text-lg font-semibold">
          <a href="/">Safepay</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-2">
          <Power />
          <a href="/" className="">
            Logout
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden text-white bg-green-900 p-4 flex items-center justify-center gap-2">
          <Power />
          <a href="/" className="block py-2">
            Logout
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
