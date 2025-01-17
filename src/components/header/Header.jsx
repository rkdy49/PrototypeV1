import React from 'react'
import './header.css'

import Banner from '../banner/banner2'

const Header = () => {
  return (
    <div className='flex flex-col justify-center text-white items-center '>
      <Banner/>
      
      <h2 className='text-4xl mt-20 mb-5'>Official Testnet V1 of GearFi App</h2>
      <p className='text-sm mb-20 text-red-400'> Disclaimer: NFTs displayed are for testing purposes only and do not represent ownership of original collections.</p>
     
    </div>
  )
}

export default Header
