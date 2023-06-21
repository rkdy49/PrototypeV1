import React from 'react'
import {Footer, Header, PopularCollections, TopCollection } from '../../components'
import './home.css'

import Staking from '../../components/staking/Staking'
import ComingSoon from '../../components/comingSoon/comingSoon'
const Home = () => {
  return (
    <div>
      <Header/>
      <PopularCollections/>
      <TopCollection/>
      <Staking/>

      <ComingSoon/>
      <Footer />

    </div>
  )
}

export default Home
