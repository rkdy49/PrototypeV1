import React from 'react'
import { Bids, Footer, Header, Navbar } from '../../components'
import LinedChart from '../../components/lineChart/LinedChart'
const Home = () => {
  return (
    <div>
      <div className='fixed top-0 left-0 right-0'>
        <Navbar />
      </div>
      <Header />
      {/* <LinedChart /> */}
      <Bids title='Hot Bids' />
      <Footer />
    </div>
  )
}

export default Home
