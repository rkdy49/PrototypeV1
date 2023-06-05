import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import MetaMaskAuthButton from '../metaskauth/metamask'

const Navbar = () => {

  return (
    <div className='z-2 flex justify-between items-center px-6 py-2 h-20 bg-[#000000]'>
      <div className='flex items-center'>
        <div className='mr-2 mx-4 flex items-center text-white'>
          <Link to='/'>
            <h1 className='font-bold text-3xl leading-tight'>
              GearFi
              <sup className='text-blue-500'>Testnet</sup>
            </h1>
          </Link>
        </div>
        <div className='flex items-center ml-4'>
          <a href='https://armilaadarshs-organization.gitbook.io/gearfi_litepaper/welcome-to-gear_fi/abstract'>
            <li className='text-white mx-4 font-medium text-2xl list-none capitalize mr-1 cursor-pointer'>
              Docs
            </li>
          </a>
          <a href='https://discord.com/invite/PJp2DbX64U'>
            <li className='text-white mx-4 list-none font-medium  text-2xl capitalize mr-1 cursor-pointer'>
              Discord
            </li>
          </a>
        </div>
      </div>
      <MetaMaskAuthButton />
    </div>
  );
};

export default Navbar;
