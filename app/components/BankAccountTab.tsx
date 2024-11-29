import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { banks } from '@/constants/BankDetails'

const BankAccountsTab = () => {
  return (
    <>
      <Tabs defaultValue="opay" className="  overflow-hidden">
        <TabsList className=" ">
          <TabsTrigger value="opay">Opay Account</TabsTrigger>
          <TabsTrigger value="zenith">Zenith Bank</TabsTrigger>
          <TabsTrigger value="palmpay">Palmpay </TabsTrigger>
        </TabsList>

        {banks.map((bank, index) => (
          <TabsContent key={index} value={bank.icon} className="break-words space-y-4">
            <div className=" pt-4 w-24 lg:w-28 h-12 lg:h-16  object-contain ">
              <img
                src={`../icons/banks/${bank.icon}.png`}
                alt=""
                className="w-full h-full bg-cover bg-center"
              />
            </div>
            <h1 className="lg:text-lg">Account Number: {bank.AccountNumber}</h1>
            <div className=" flex justify-between text-sm lg:text-lg items-center">
              <div className="space-y-1">
                <h1 className="text-yellow-500 font-medium">Account Name: Safepay.com-Makanta</h1>
                <h1>Bank Name: {bank.name} Bank</h1>
              </div>
              <div className="text-right font-bold text-slate-800">
                <h1>₦50</h1>
                <h1>Charge</h1>
              </div>
            </div>
            <div className="text-sm lg:text-base">
              <h1 className="md:text-sm">AUTOMATED BANK TRANSFER</h1>
              <p>Make transfer to fund your wallet from any local bank.</p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}

export default BankAccountsTab
