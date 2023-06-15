import React from 'react'
import {Footer, Header, PopularCollections, Chart } from '../../components'
import './home.css'
import Staking from '../../components/staking/Staking'
import ComingSoon from '../../components/comingSoon/comingSoon'
const Home = () => {
  return (
    <div>
      <Header/>
      <Staking/>
      <Chart/>
      <PopularCollections/>
      <ComingSoon/>
      <Footer />

    </div>
  )
}

export default Home
