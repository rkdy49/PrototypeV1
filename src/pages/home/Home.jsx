import React from 'react'
import { Bids, Footer, Header } from '../../components'
import Chart from '../../components/chart/Chart.jsx'
import { Navbar } from '../../components'

const Home = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0">
        <Navbar />
      </div>
      <Header />
      <Bids title='Hot Bids' />
      <Footer />
    </div>
  )
}

export default Home
