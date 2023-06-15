import React, { useState } from 'react'
import './item.css'
import LinedChart from '../../components/lineChart/LinedChart'

import { NftMarketplace_address, abi_marketplace } from './../../constants'
import { useLocation } from 'react-router'
import { ethers } from 'ethers'
import { Link } from 'react-router-dom'

const Item = () => {

  const location = useLocation()
  const nft = location.state?.data
  //console.log(nft.token_address._value);

  const [showBuyOpt, setShowBuyOpt] = useState(false)

  return (
    <div className='item flex px-6 text-white'>
      <div className='item-image flex flex-col justify-center items-center border-r border-gray-200'>
        <img
          src={nft.metadata?.image.replace(
            'ipfs://',
            'https://ipfs.moralis.io:2053/ipfs/'
          )}
          alt=''
          className='w-90p rounded-15'
        />
        {/* <p className='mt-4 '>Description: {nft?.metadata.description}</p> */}
        <div className=' flex-col mt-4 w-full px-8'>
          <div className='p-4 border border-white border-b-0'>Description:</div>
          <div className='p-4 border border-white'>
            {nft?.metadata.description}
          </div>
        </div>
      </div>
      <div className='item-content flex-1 flex justify-start items-start flex-col m-5 relative'>
        <div className='item-content-title'>
          <h1 className='font-bold text-28 '>
            {nft?.metadata.name} #{nft.token_id}
          </h1>
        </div>

        <div className='item-content-detail mt-5'>
          <p className=''>Owner: 0xB9e53abF5b0bAE6353076467F0505DebA8A98efa</p>
          <p className=''>Price: 0.01 ETH</p>
          <p className=''>Downpayment: 30%</p>
          <p className=''>Repayment Duration: 4 days</p>
        </div>
        <div className='item-content-buy mb-4'>
         
           
       
            <div>
              <div className='relative inline-block'>
                <button
                  className='primary-btn mb-0'
                >
                  Buy Now For 0.003 ETH
                </button>
                {showBuyOpt && (
                  <div
                    className='absolute end-0 left-0 mt-0 m-4 bg-black p-2 z-20 block border border-white'
                    onMouseEnter={() => setShowBuyOpt(true)}
                    onMouseLeave={() => setShowBuyOpt(false)}
                  >
                    <div className=' p-4 cursor-pointer hover:bg-slate-700'>
                      buy now
                    </div>
                    <div className=' p-4 cursor-pointer hover:bg-slate-700'>
                      buy later
                    </div>
                  </div>
                )}
              </div>
              <button className='primary-btn' >
                Make Offer
              </button>
            </div>
       
        </div>
        <LinedChart />
        <div className='m-4 mt-8 border border-white'>
          Offers:
          <table className='w-full border border-white'>
            <thead>
              <tr>
                <th className='p-4'>SUPPLY</th>
                <th className='p-4'>SUPPLY</th>
                <th className='p-4'>SUPPLY</th>
                <th className='p-4'>SUPPLY</th>
                <th className='p-4'>SUPPLY</th>
              </tr>
            </thead>
            <tbody>
                <th className='font-semibold'>0.05ETH</th>
                <th className='font-semibold'>0.05ETH</th>
                <th className='font-semibold'>0.05ETH</th>
                <th className='font-semibold'>0.05ETH</th>
                <th className='font-semibold'>0.05ETH</th>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Item