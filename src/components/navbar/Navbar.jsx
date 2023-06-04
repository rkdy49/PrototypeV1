import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useMoralis } from 'react-moralis'
import Moralis from 'moralis-v1'
import MetaMaskAuthButton from '../metaskauth/metamask'

const Navbar = () => {
  return (
    <div className='h-20 flex justify-between items-center px-6 py-2  bg-[#000000]'>
      <div className='flex w-full items-center justify-between'>
        <div className='mr-2 mx-4 flex items-center text-white'>
          <Link to='/'>
            <div className='flex'>
              <span
                className='py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 font-extrabold lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                style={{
                  color: '#33e355',
                  fontFamily: 'Monoton,cursive',
                  fontSize: '20px',
                  fontWeight: '300',
                  letterSpacing: '4px',
                }}
              >
                GEAR
              </span>
              <div className='text-blue-500 top-0 text-xs'>Testnet</div>
            </div>
          </Link>
        </div>
        <div className='flex items-center'>
          <a href='https://armilaadarshs-organization.gitbook.io/gearfi_litepaper/welcome-to-gear_fi/abstract'>
            <li className='text-white mx-4 text-xl list-none capitalize mr-1 cursor-pointer'>
              Docs
            </li>
          </a>
          <a href='https://discord.com/invite/PJp2DbX64U'>
            <li className='text-white mx-4 list-none text-xl capitalize mr-1 cursor-pointer'>
              Discord
            </li>
          </a>
        </div>
        <div>
          <MetaMaskAuthButton />
        </div>
      </div>
    </div>
  )
}

export default Navbar
