import React from 'react'
import {Footer, Header, PopularCollections, TopCollection } from '../../components'
import './home.css'

import Staking from '../../components/staking/Staking'
import ComingSoon from '../../components/comingSoon/comingSoon'
const Home = () => {
  return (
    <div>
      <Header/>
      <TopCollection/>
      <Staking/>
      <PopularCollections/>
      <ComingSoon/>
      <Footer />

    </div>
  )
}

export default Home
