import React from 'react'
import './popularCollections.css'
import { AiOutlineArrowRight } from "react-icons/ai";
const popColl = [
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
  }
]

export default function PopularCollections() {
  return (
    <div className='text-white overflow-x-auto font-semibold'>
      <div className='text-3xl ml-2 underline'>Popular Collections:</div>
      <div className='flex'>
        {popColl.map((coll) => {
          return (
            <div className='flex m-2 w-64 h-72 card items-end'>
              <div className='flex flex-col m-4 blue-glassmorphism p-4'>
                <div className='font-bold mb-2 flex items-center justify-between'>
                  <div>{coll.name}</div>
                  <div><AiOutlineArrowRight className='mr-4'/></div>
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
    </div>
  )
}
