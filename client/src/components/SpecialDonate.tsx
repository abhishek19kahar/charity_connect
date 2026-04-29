import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar.tsx'
import Footer from './Footer.tsx'
import CashDonation from './CashDonation.tsx'

const SpecialDonation: React.FC = () => {
  const { cause: cause } = useParams<{ cause: string }>()
  const [donationType, setDonationType] = useState('cash')

  const formattedCause = cause?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return (

    <div className="min-h-screen flex flex-col bg-gray-100 mt-16">
      <NavBar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Donate to {formattedCause}</h1>
        <div className="flex justify-center space-x-4 mb-8">
          <form action="">

          <button
            className={`px-4 py-2 rounded bg-blue-500 text-white`}
            onClick={() => {
              setDonationType('cash')
            }}
          >
            Cash Donation
          </button>
          </form>
        </div>
       <CashDonation />
      </main>
      <Footer />
    </div>
  )
}

export default SpecialDonation

