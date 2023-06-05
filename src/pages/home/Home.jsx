import React from 'react'
import { Bids, Footer, Header, PopularCollections } from '../../components'
import Profile2 from '../profile/Profile2'
import './home.css'
import Collection from '../collection/Collection'
const Home = () => {
  return (
    <div>
      <Header />
      {/* <Collection/> */}
      <Bids title='Hot Bids' />
      <Profile2 />
      <PopularCollections/>
      <Footer />
    </div>
  )
}

export default Home
