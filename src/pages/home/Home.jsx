import React from 'react'
import {Footer, Header, PopularCollections, TopCollection } from '../../components'
import './home.css'

import Staking from '../../components/staking/Staking'
import ComingSoon from '../../components/comingSoon/comingSoon'
import EarlyAccess from '../../components/earlyAccess/EarlyAccess'
const Home = () => {
  return (
    <div>
      <Header/>
      <TopCollection/>
      <Staking/>
      <PopularCollections/>
      <EarlyAccess/>
      <ComingSoon/>
      <Footer />

    </div>
  )
}

export default Home
