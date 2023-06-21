import React from 'react'
import './header.css'

import Banner from '../banner/banner2'

const Header = () => {
  return (
    <div className='flex flex-col justify-center text-white items-center '>
      <Banner/>
      
      <h2 className='text-4xl mt-20'>Buy Now Pay Later is here for NFTs!</h2>
      <p className='text-2xl mb-20'>Experience it seamlessly using GearFi</p>
     
    </div>
  )
}

export default Header
