import React from 'react'
import { Bids, Footer, Header } from '../../components'
import Chart from '../../components/chart/Chart.jsx'

const Home = () => {
  return (
    <div>
      <Header />
      <Bids title='Hot Bids' />
      <Footer />
    </div>
  )
}

export default Home
