import React from 'react'
import { Bids, Footer, Header, Navbar, PopularCollections } from '../../components'
import Profile2 from '../profile/Profile2'
const Home = () => {
  return (
    <div>
      <div className='fixed top-0 left-0 right-0'>
        <Navbar />
      </div>
      <Header />
      <Bids title='Hot Bids' />
      <Profile2 />
      <PopularCollections/>
                <Footer />
    </div>
  )
}

export default Home
