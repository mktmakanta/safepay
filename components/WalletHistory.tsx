import { ArrowRightLeft, ArrowUpDown, History } from 'lucide-react'
import React from 'react'

const WalletHistory = () => {
  return (
    <main className=" grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
      <div className="flex items-center gap-3 rounded-md shadow-sm ring-1 ring-slate-200 p-3 lg:p-4">
        <div className="h-10 w-10 bg-blue-500 rounded-md flex justify-center items-center ">
          <ArrowRightLeft className="text-white" />
        </div>
        <h1>Transactions</h1>
      </div>
      <div className="flex items-center gap-3 rounded-md shadow-md ring-1 ring-slate-200 p-3">
        <div className="h-10 w-10 bg-orange-500 rounded-md flex justify-center items-center ">
          <ArrowUpDown className="text-white" />
        </div>
        <h1>Transactions</h1>
      </div>
      <div className="flex items-center gap-3 rounded-md shadow-md ring-1 ring-slate-200 p-3">
        <div className="h-10 w-10 bg-purple-500 rounded-md flex justify-center items-center ">
          <History className="text-white" />
        </div>
        <h1>Transactions</h1>
      </div>
    </main>
  )
}

export default WalletHistory
