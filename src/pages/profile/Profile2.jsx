import React from 'react'
import userProfile from '../../assets/userProfile.jpg'
import { AiOutlineArrowRight } from "react-icons/ai";
import './profile2.css'

const coll = [
  {
    url: 'https://images.blur.io/_blur-prod/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/3827-5b8259cffe123512?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
  {
    url: 'https://images.blur.io/_blur-prod/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/3827-5b8259cffe123512?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
  {
    url: 'https://images.blur.io/_blur-prod/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/3827-5b8259cffe123512?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
  {
    url: 'https://images.blur.io/_blur-prod/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/3827-5b8259cffe123512?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
  {
    url: 'https://images.blur.io/_blur-prod/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/3827-5b8259cffe123512?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
  {
    url: 'https://images.blur.io/_blur-prod/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/3827-5b8259cffe123512?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
  {
    url: 'https://images.blur.io/_blur-prod/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/3827-5b8259cffe123512?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
  {
    url: 'https://images.blur.io/_blur-prod/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b/3827-5b8259cffe123512?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
]
const nfts = [
  {
    url: 'https://images.blur.io/_blur-prod/0xacf63e56fd08970b43401492a02f6f38b6635c91/5147-edbab12fa8ac49f5?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
  {
    url: 'https://images.blur.io/_blur-prod/0xacf63e56fd08970b43401492a02f6f38b6635c91/5147-edbab12fa8ac49f5?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
  {
    url: 'https://images.blur.io/_blur-prod/0xacf63e56fd08970b43401492a02f6f38b6635c91/5147-edbab12fa8ac49f5?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
  {
    url: 'https://images.blur.io/_blur-prod/0xacf63e56fd08970b43401492a02f6f38b6635c91/5147-edbab12fa8ac49f5?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
  {
    url: 'https://images.blur.io/_blur-prod/0xacf63e56fd08970b43401492a02f6f38b6635c91/5147-edbab12fa8ac49f5?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
  {
    url: 'https://images.blur.io/_blur-prod/0xacf63e56fd08970b43401492a02f6f38b6635c91/5147-edbab12fa8ac49f5?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
  {
    url: 'https://images.blur.io/_blur-prod/0xacf63e56fd08970b43401492a02f6f38b6635c91/5147-edbab12fa8ac49f5?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
  {
    url: 'https://images.blur.io/_blur-prod/0xacf63e56fd08970b43401492a02f6f38b6635c91/5147-edbab12fa8ac49f5?w=256',
    name: 'cloneX #82932',
    price: 2.59,
    lastSale: 2.96,
  },
]

export default function Profile2() {
  const [collections, setCollections] = React.useState(true)
  return (
    <div className='text-white'>
      <div className='flex flex-col items-center'>
        <img src={userProfile} alt='' className='w-24 mt-8 rounded-full' />
        <div className=' text-4xl font-bold mb-2'>Shane Helm</div>
        <div className=''>Joined 11/11/12 address: 2e4c...a7df</div>
      </div>
      <div className='flex justify-start'>
        <div className={`cursor-pointer m-4 mr-8 text-3xl font-semibold ${collections? 'text-red-600' : ''}`} onClick={() => setCollections(true)}>
          My Collections
        </div>
        <div className={`cursor-pointer m-4 mr-8 text-3xl font-semibold ${!collections? 'text-red-600' : ''}`} onClick={() => setCollections(false)}>
          NFTs
        </div>
      </div>
      {collections && (
        <div className='grid grid-cols-5'>
          {coll.map((coll) => {
            return (
              <div className='flex m-2 w-64 h-72 collCard items-end'>
                <div className='flex flex-col m-4 blue-glassmorphism p-4'>
                  <div className='font-bold mb-2 flex items-center justify-between'>
                    <div>{coll.name}</div>
                    <div>
                      <AiOutlineArrowRight className='mr-4' />
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='w-24 text-sm'>
                      FLOOR PRICE:
                      <br />
                      {coll.price}
                    </div>
                    <div className='ml-4 w-20 text-sm'>
                      LAST SALE:
                      <br />
                      {coll.lastSale}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
      {!collections && (
        <div className='grid grid-cols-5 m-2'>
        {nfts.map((nft) => {
          return (
            <div className='flex flex-col m-2 mt-8 w-56 h-72 border-2 border-indigo-300'>
                <img src={nft.url} alt="" className='w-64 h-48'/>
              <div className='flex flex-col mt-0 p-4'>
                <div className='font-bold mb-2 flex items-center justify-between'>
                  <div>nft:{nft.name}</div>
                  <div>
                    <AiOutlineArrowRight className='mr-4' />
                  </div>
                </div>
                <div className='flex'>
                  <div className='w-24 text-sm'>
                    FLOOR PRICE:
                    <br />
                    {nft.price}
                  </div>
                  <div className='ml-4 w-20 text-sm'>
                    LAST SALE:
                    <br />
                    {nft.lastSale}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      )}
    </div>
  )
}
