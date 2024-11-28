'use client'

import * as React from 'react'
import { CircleX, EllipsisVertical } from 'lucide-react'
import { items } from '@/constants/SideBarItems'
import ProfileAvatar from './ProfileAvatar'
import { usePathname } from 'next/navigation'

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname() // Get the current path

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="">
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        {isOpen ? (
          <CircleX size={28} strokeWidth={2.75} absoluteStrokeWidth />
        ) : (
          <EllipsisVertical size={28} strokeWidth={2.75} absoluteStrokeWidth />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-20 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <nav className="p-4 space-y-4 h-full">
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <CircleX size={28} strokeWidth={2.75} absoluteStrokeWidth />
          </button>

          <div className="space-y-4 divide-y divide-slate-300">
            <div className="flex items-center gap-3 p-2 transition-colors duration-200">
              <ProfileAvatar />
              <div className="text-black font-normal text-sm">
                <h2>Makanta</h2>
                <h3 className="whitespace-nowrap">Balance: #17000000</h3>
              </div>
            </div>
            {/* Scrollable List with Active Link Highlight */}
            <ul className="space-y-2 text-sm font-normal pt-3 overflow-y-auto h-[calc(100vh-12rem)] scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-100">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-4 p-2 rounded-md transition-colors duration-200 ${
                    pathname === item.link ? 'bg-green-500 text-white' : 'hover:bg-green-100'
                  }`}
                >
                  <item.icon
                    className={`${
                      pathname === item.link ? 'text-white' : 'text-green-800'
                    } bg-green-100 p-2 rounded-md`}
                    size={40}
                  />
                  <span className={`${pathname === item.link ? 'text-white' : 'text-gray-800'}`}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </nav>
  )
}
