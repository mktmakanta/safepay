'use client'

import { RootState } from '@/app/Redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

const TransactionStatistics = () => {
  const balance = useSelector((state: RootState) => state.balance.balance)
  const formattedBalance = new Intl.NumberFormat().format(balance)

  const data = [
    { title: 'WALLET BALANCE', amount: `₦${formattedBalance}` },
    { title: 'TOTAL FUNDING', amount: '₦77,271.46' },
    { title: 'TOTAL SPENT', amount: '₦75828.00' },
  ]

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 lg:p-10 max-w-5xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-green-600 text-center">
        TRANSACTION STATISTICS
      </h2>
      <hr className="my-4 border-gray-300" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-50 shadow-sm rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-md"
          >
            <h3 className="text-sm md:text-base font-semibold text-gray-500 mb-2">{item.title}</h3>
            <p className="text-lg md:text-xl font-bold text-gray-800">{item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionStatistics
