import React from 'react'
import './header.css'
import banner from '../../assets/GEARFI BANNER.png'
import Chart from '../Chart/Chart'

const Header = () => {
  return (
    <div className=' flex flex-col justify-center text-white p-5 items-center border-2 border-white'>
      <div className='mt-20'>
        <img src={banner} class='banner' />
      </div>
      <h2 className='text-4xl my-5'>Buy Now Pay Later is here for NFTs!</h2>
      <p className='text-2xl mb-8'>Experience it seamlessly using GearFi</p>

      <div className='mb-8'>
        <a href='https://discord.com/invite/PJp2DbX64U'>
          <button className='bg-white text-[#333333] rounded-md font-md px-5 py-2.5 m-2.5 cursor-pointer hover:bg-[#ffcc00] hover:text-[#333333]'>
            Join Discord
          </button>
        </a>
        <a href='https://armilaadarshs-organization.gitbook.io/gearfi_litepaper/welcome-to-gear_fi/abstract'>
          <button className='bg-white text-[#333333] rounded-md font-md px-5 py-2.5 m-2.5  cursor-pointer '>
            Docs
          </button>
        </a>
      </div>
      <Chart />
    </div>
  )
}

export default Header
