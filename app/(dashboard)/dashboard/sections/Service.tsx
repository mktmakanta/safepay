import {
  CircleHelp,
  PhoneOutgoing,
  Plug,
  Rss,
  Speech,
  Tv,
  Users,
  Wallet,
  WalletCards,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Service = () => {
  return (
    <main className="py-4 lg:mx-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
      <div className="bg-white ring-1 ring-slate-200 p-4  rounded-lg ">
        <Link href="/" className="group flex flex-col justify-center items-center gap-2">
          <div className="image h-16 w-16">
            <Rss className="w-full h-full" />
          </div>
          <p className=" group-hover:underline">Buy Data</p>
        </Link>
      </div>
      <div className="bg-white ring-1 ring-slate-200 p-4  rounded-lg ">
        <Link href="/" className="group flex flex-col justify-center items-center gap-2">
          <div className="image h-16 w-16">
            <PhoneOutgoing className="w-full h-full" />
          </div>
          <p className=" group-hover:underline">Airtime TopUp</p>
        </Link>
      </div>
      <div className="bg-white ring-1 ring-slate-200 p-4  rounded-lg ">
        <Link href="/" className="group flex flex-col justify-center items-center gap-2">
          <div className="image h-16 w-16">
            <Plug className="w-full h-full" />
          </div>
          <p className=" group-hover:underline">Electricity Bills</p>
        </Link>
      </div>

      <div className="bg-white ring-1 ring-slate-200 p-4  rounded-lg ">
        <Link href="/" className="group flex flex-col justify-center items-center gap-2">
          <div className="image h-16 w-16">
            <Tv className="w-full h-full" />
          </div>
          <p className=" group-hover:underline">Cable Subscription</p>
        </Link>
      </div>
      <div className="bg-white ring-1 ring-slate-200 p-4  rounded-lg ">
        <Link href="/" className="group flex flex-col justify-center items-center gap-2">
          <div className="image h-16 w-16">
            <Wallet className="w-full h-full" />
          </div>
          <p className=" group-hover:underline">Bonus Wallet</p>
        </Link>
      </div>
      <div className="bg-white ring-1 ring-slate-200 p-4  rounded-lg ">
        <Link href="/" className="group flex flex-col justify-center items-center gap-2">
          <div className="image h-16 w-16">
            <WalletCards className="w-full h-full" />
          </div>
          <p className=" group-hover:underline">Bulk SMS</p>
        </Link>
      </div>
      <div className="bg-white ring-1 ring-slate-200 p-4  rounded-lg ">
        <Link href="/" className="group flex flex-col justify-center items-center gap-2">
          <div className="image h-16 w-16">
            <Users className="w-full h-full" />
          </div>
          <p className=" group-hover:underline">My Referrals</p>
        </Link>
      </div>
      <div className="bg-white ring-1 ring-slate-200 p-4  rounded-lg ">
        <Link href="/" className="group flex flex-col justify-center items-center gap-2">
          <div className="image h-16 w-16">
            <Speech className="w-full h-full" />
          </div>
          <p className=" group-hover:underline">Customer Support</p>
        </Link>
      </div>
      <div className="bg-white ring-1 ring-slate-200 p-4  rounded-lg ">
        <Link href="/" className="group flex flex-col justify-center items-center gap-2">
          <div className="image h-16 w-16">
            <CircleHelp className="w-full h-full" />
          </div>
          <p className=" group-hover:underline">FAQ</p>
        </Link>
      </div>
    </main>
  )
}

export default Service
