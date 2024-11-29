'use client'

import React from 'react'
import { HandCoins } from 'lucide-react'
import ProfileAvatar from './ProfileAvatar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import { items } from '../constants/SideBarItems'
import { RootState } from '@/Redux/store'

type SidebarItem = {
  title: string
  icon: React.ComponentType
  link: string
}

const SideBar = ({}: SidebarItem) => {
  const pathname = usePathname()
  const balance = useSelector((state: RootState) => state.balance.balance)
  const formattedBalance = new Intl.NumberFormat().format(balance)
  return (
    <aside className="sidebar group hidden lg:block bg-green-50/50 w-20 hover:w-80 transition-all duration-300 p-2 sticky top-0 h-screen shadow-md z-10">
      {/* Sidebar Header */}
      <div className="h-14 w-full flex items-center justify-center gap-2 bg-green-50/50 ring-1 ring-slate-200 rounded-t-md">
        <div className="flex items-center gap-3 p-2 rounded-md bg-green-800 text-white transition-colors duration-200">
          <HandCoins size={36} strokeWidth={2.5} absoluteStrokeWidth />
        </div>
        <h1 className="text-green-800 font-semibold text-3xl hidden group-hover:block">Safepay</h1>
      </div>

      {/* Sidebar Items */}
      <div className="mt-4 divide-y divide-slate-300 space-y-4 h-[calc(100%-56px)] flex flex-col">
        {/* Profile Section */}
        <div className="flex items-center gap-3 p-2 transition-colors duration-200">
          <ProfileAvatar />
          <div className="hidden group-hover:block text-sm">
            <h2>Makanta</h2>
            <h3 className="text-nowrap">Balance: ₦ {formattedBalance}</h3>
          </div>
        </div>

        {/* Scrollable Navigation Links */}
        <ul className="space-y-4 flex-1 overflow-y-auto pt-5 pb-10 scrollbar-hide hover:scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-100">
          {items.map((item, index) => (
            <Link key={index} href={item.link || '#'}>
              <li
                className={`flex items-center gap-4 p-2 rounded-md transition-colors duration-200 hover:bg-green-100 ${
                  pathname === item.link ? 'text-black' : ''
                }`}
              >
                <item.icon
                  className={`${
                    pathname === item.link ? 'bg-green-400 text-white' : 'text-green-800'
                  } bg-green-100 p-2 rounded-md`}
                  size={40}
                />
                <span
                  className={`${
                    pathname === item.link ? 'text-gray-800' : 'text-gray-800'
                  } hidden group-hover:block font-medium`}
                >
                  {item.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default SideBar
