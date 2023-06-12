import React from 'react'
import nft_1 from '../../assets/nft_1.png'

export default function Staking() {
  return (
    <div className='text-white w-full font-semibold bg-slate-600 m-4 rounded-md'>
      <div className='flex flex-col md:flex-row m-4 justify-around items-center h-full'>
        <div className='flex-col items-center'>
          <div className='grid grid-cols-2 my-4 justify-items-center'>
            <div>No Liquidation Risk</div>
            <div>0-Gas Auto Compounding</div>
            <div>No Bank Run Risk</div>
            <div>Multi-Reward APY</div>
          </div>
          <div className='flex my-4 justify-center'>
            Experience Pool-based Ape Staking!
          </div>
        </div>

        <div>
          <img src={nft_1} alt='' className='h-36' />
        </div>
        <div className='flex-col items-center'>
          <div className='flex my-4 justify-center'>Total value locked: $130000000</div>
          <div className='flex my-4 justify-items-center'>
            <div className='m-4'>
              <div>BAYC APY</div>
              <div>132.60%</div>
            </div>
            <div className='m-4'>
              <div>BAYC APY</div>
              <div>132.60%</div>
            </div>
            <div className='m-4'>
              <div>BAYC APY</div>
              <div>132.60%</div>
            </div>
            <div className='m-4'>
              <div>BAYC APY</div>
              <div>132.60%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
