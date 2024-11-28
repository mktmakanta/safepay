import CopyToClipboardButton from '@/components/CopyToClipBoard'
import { Button } from '@/components/ui/button'
import React from 'react'

const WelcomeSection = () => {
  const referral = ' https://www.Safepay.com?referal=Makanta'

  return (
    <div className="text-slate-800 lg:flex justify-between items-end lg:px-10 ">
      <div className="left-con space-y-3 py-3 lg:pt-8">
        <h1 className="text-4xl lg:text-5xl text-black">
          <span className="font-semibold">Welcome</span> to safepay
        </h1>

        <div className="space-y-2 text-sm lg:text-base">
          {' '}
          <p>Refer people to safepay and get 5% of their first funding.</p>
          <p>
            Join our WhatsApp channel:
            <span className=" break-words">
              https://whatsapp.com/channel/64hdh46e77y7ew7we8
            </span>{' '}
            for latest update on our services
          </p>
          <div className="flex items-center gap-2 ">
            <div>
              <span className="font-bold ">Referral Link: </span>
              https://www.Safepay.com?referal=Makanta
            </div>
            <CopyToClipboardButton text={referral} />
          </div>
        </div>
      </div>
      <div className="right-con lg:mr-16 lg:mb-6">
        <Button className="bg-green-700 text-white hover:bg-green-500 rounded-full p-5 lg:p-6 text-lg">
          Fund Wallet
        </Button>
      </div>
    </div>
  )
}

export default WelcomeSection
