import React from 'react'
import collImg from '../../assets/nft_3.jpg'
import { useNavigate } from 'react-router-dom'

import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Banner2() {
  const navigate = useNavigate()

  const handleRedirect = (address) => {
    navigate(`/collection/${address}`)
  }
  return (
    <div className='text-white mt-20 w-full'>
      <div className='flex justify-center'>
        <div className='flex flex-col w-1/2 justify-center items-start'>
          <div className='text-5xl font-bold text-gradient w-2/3'>
            Buy Now Pay Later is here with GearFi
          </div>
          <div className='w-2/3 text-gradient my-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
            animi. Odit totam adipisci sed nulla commodi ipsa architecto autem
            quo.
          </div>
          <div className='flex'>
            <a href='https://discord.com/invite/PJp2DbX64U'>
              <button className='bg-[#fff] text-[#333333] rounded-md font-md px-5 py-2.5 m-2.5 cursor-pointer hover:bg-[#5865F2] hover:text-[#fff]'>
                Join Discord
              </button>
            </a>
            {/* <a href='https://armilaadarshs-organization.gitbook.io/gearfi_litepaper/welcome-to-gear_fi/abstract'>
              <button className='bg-white text-[#333333] rounded-md font-md px-5 py-2.5 m-2.5  cursor-pointer '>
                Docs
              </button>
            </a> */}
          </div>
        </div>
        <div className='white-glassmorphism-no-border rounded-none py-4 px-8 align-self-left'>
          <div
            className='flex m-4 h-72 card items-end cursor-pointer'
            style={{ backgroundImage: `url(${collImg})` }}
            onClick={() => handleRedirect('7436')}
          >
            <div className='flex flex-col m-4 blue-glassmorphism p-4'>
              <div className='font-bold mb-2 flex items-center justify-between'>
                <div>BAYC</div>
                <div>
                  <AiOutlineArrowRight className='mr-4' />
                </div>
              </div>
              <div className='flex'>
                <div className='w-24 text-sm'>
                  FLOOR PRICE:
                  <br />
                  4.56
                </div>
                <div className='ml-4 w-20 text-sm'>
                  LAST SALE:
                  <br />
                  COLL.LASTSALE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
