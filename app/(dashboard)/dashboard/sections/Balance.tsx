import React from 'react'

const Balance = () => {
  return (
    <main className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 lg:mx-10">
      <div className="space-y-4  bg-black opacity-85 rounded-lg p-4 px-6">
        <h3 className="text-sm  text-slate-400">Wallet Balance</h3>
        <h1 className="text-3xl font-bold  text-white">₦ 17,000</h1>
      </div>
      <div className="space-y-4  bg-black opacity-85 rounded-lg p-4 px-6">
        <h3 className="text-sm  text-slate-400">Referral Earning</h3>
        <h1 className="text-3xl font-bold  text-white">₦ 8,000</h1>
      </div>
      <div className="space-y-4  bg-black opacity-85 rounded-lg p-4 px-6">
        <h3 className="text-sm  text-slate-400">Total Referral</h3>
        <h1 className="text-3xl font-bold  text-white">11</h1>
      </div>
    </main>
  )
}

export default Balance
