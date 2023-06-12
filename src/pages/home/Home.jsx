import React from 'react'
import { Bids, Footer, Header, PopularCollections } from '../../components'
import Profile2 from '../profile/Profile2'
import './home.css'
import Collection from '../collection/Collection'
import IPFSImage from '../../components/imageComponent/image'
import Staking from '../../components/staking/Staking'
import ComingSoon from '../../components/comingSoon/comingSoon'
const Home = () => {
  return (
    <div>
      <Header/>
      {/* <Collection/> */}
      <Staking/>
      <ComingSoon/>
      <Bids title='Hot Bids' />
      {/* <Profile2 /> */}
      <PopularCollections/>
      <Footer />
      {/* <IPFSImage ipfsUrl='ipfs://QmPjbncwNmYieMBP6yo76ggxDyEL85v8NmNmYrRzSnvMqS/la8Ne7MoZ7rIQbjG/2709.png'/> */}
    </div>
  )
}

export default Home
