import React, { useState, useEffect } from 'react'
import './item.css'
import axios from 'axios'
import LinedChart from '../../components/lineChart/LinedChart'

import { NftMarketplace_address, abi_marketplace } from './../../constants'
import { useLocation } from 'react-router'
import { useParams } from 'react-router'


import { ethers } from 'ethers'
import { Link } from 'react-router-dom'

const Item = () => {
  const [nftData, setNftData] = useState([])
  const { tokenAddress, tokenId } = useParams()
  const location = useLocation()
  const nft = location.state?.data
  const [sale, setSale] = useState()

  useEffect(() => {
    console.log('useEffect1')
    axios(`http://localhost:8000/assets/${tokenAddress}/${tokenId}`).then(
      ({ data }) => {
        console.log('datacollection type', data)
        setNftData(data)
      }
    )
  }, [])



  return (
    <div className='item flex px-6 text-white mt-20'>
      <div className='item-image flex flex-col justify-center items-center border-r border-gray-200'>
        {  console.log('nftDataaa', nftData.metadata?.imageURI)}
        <img
          src={`https://ipfs.io/ipfs/${nftData.metadata?.imageURI.split('//')[1]}`}
          alt=''
          className='rounded-15'
        />
        {/* <p className='mt-4 '>Description: {nft?.metadata.description}</p> */}
        <div className=' flex-col mt-4 w-full px-8'>
          <div className='p-4 border border-white border-b-0'>Description:</div>
          <div className='p-4 border border-white text-white'>
            {nftData.metadata?.description}
          </div>
        </div>
      </div>
      <div className='item-content flex-1 flex justify-start items-start flex-col m-5 relative'>
        <div className='item-content-title'>
          <h1 className='font-bold text-28 '>
            {nftData.metadata?.name} #{nftData?.tokenId}
          </h1>
        </div>

        <div className='item-content-detail mt-5'>
          <p className=''>Owner: 0xB9e53abF5b0bAE6353076467F0505DebA8A98efa</p>
          <p className=''>Price: 0.01 ETH</p>
          <p className=''>Downpayment: 30%</p>
          <p className=''>Repayment Duration: 4 days</p>
        </div>
        <div className='item-content-buy mb-4'>
          {sale ? (
            <Link
            // to={`/profile/${user.id}`}
            >
              <button className='primary-btn'>Checkout Sale</button>
            </Link>
          ) : (
            <div>
              <div className='relative inline-block'>
                <button
                  className='primary-btn mb-0'
                >
                  Buy Now For 0.003 ETH
                </button>
                
              </div>
              <button className='primary-btn'>
                Make Offer
              </button>
            </div>
          )}
        </div>
        {/* <LinedChart /> */}
        {/* <div className='m-4 mt-8 border border-white'>
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
        </div> */}
      </div>
    </div>
  )
}

export default Item
