import React from 'react'
import { Bids, Footer, Header, PopularCollections, Chart } from '../../components'
import Profile2 from '../profile/Profile2'
import './home.css'
import Collection from '../collection/Collection'

const Home = () => {
  return (
    <div>
      <Header />
      
      <Chart />

      <PopularCollections/>
      {/* <Collection/> */}
      <Bids title='Hot Bids' />

 
      <Footer />
    </div>
  )
}

export default Home
