import React from 'react'
import WelcomeSection from './sections/WelcomeSection'
import WalletInformation from './sections/WalletInformation'
import { Modal } from './sections/modal'
import Balance from './sections/Balance'
import Service from './sections/Service'
import TransactionStatistics from './sections/TransactionStatistics'

const Dashboard = () => {
  return (
    <section className="p-5 space-y-6 pt-12">
      <Modal />
      <WelcomeSection />
      <WalletInformation />
      <Balance />
      <Service />
      <TransactionStatistics />
    </section>
  )
}

export default Dashboard
