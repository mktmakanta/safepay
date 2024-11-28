import BankAccountsTab from '@/components/BankAccountTab'
import WalletHistory from '@/components/WalletHistory'
import React from 'react'

const WalletInformation = () => {
  return (
    <main className="p-4 pb-7 ring-1 ring-slate-200 rounded-md divide-y-2 divide-slate-100 bg-white lg:mx-10 lg:px-10">
      <div className="head py-2">
        Good morning, <span className="font-semibold">Makanta</span>
      </div>
      <div className="body ">
        <div className="bank-details py-3">
          <BankAccountsTab />
        </div>
        <div className="Transactions">
          <WalletHistory />
        </div>
      </div>
    </main>
  )
}

export default WalletInformation
