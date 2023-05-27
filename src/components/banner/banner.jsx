import React from 'react'
import banner from '../../assets/GEARFI BANNER.png'
import { RiHqFill } from 'react-icons/ri'
import nft_1 from '../../assets/nft_1.png'
import nft_2 from '../../assets/nft_2.png'
import nft_3 from '../../assets/nft_3.jpg'
import nft_4 from '../../assets/nft_4.jpg'
import { useActionData } from 'react-router'

export default function Banner() {
  // const [mouseHover, setMouseHover] = useState('')

  // const showImage = (img) => {
  //     return(
  //         <img src={img} onMouseEnter={setMouseHover(true)} onMouseLeave={} />
  //     )
  // }

  return (
    <div className='mt-20 w-full relative'>
      <img src={banner} className='w-full' />
      <div className='absolute bottom-0 left-0  overflow-x-auto flex flex-col font-bold w-full'>
        <div className='mb-2 ml-4'>Kanpai Pandas</div>
        <div className='mb-2 ml-4'>By Kanpai Pandas</div>
        <div className='ml-4 flex flex-row mb-2'>
          <div className=''>
            Floor Price<br/>
            1.40
          </div>
          <div className=''>
            1D Volume<br/>
            9.77
          </div>
          <div>
            <button className='m-0'>View Collection👉</button>
          </div>
        </div>
        <div className='flex justify-start'>
          <div className='flex-shrink-0 w-1/4'>
            <div className='aspect-w-1 aspect-h-1'>
              <img
                src={nft_2}
                className='hover:scale-105 w-full px-8 transform origin-center transition-transform duration-300 object-contain mb-4'
              />
            </div>
          </div>
          <div className='flex-shrink-0 w-1/4'>
            <div className='aspect-w-1 aspect-h-1'>
              <img
                src={nft_2}
                className='hover:scale-105 w-full px-8 transform origin-center transition-transform duration-300 object-contain mb-4'
              />
            </div>
          </div>
          <div className='flex-shrink-0 w-1/4'>
            <div className='aspect-w-1 aspect-h-1'>
              <img
                src={nft_2}
                className='hover:scale-105 w-full px-8 transform origin-center transition-transform duration-300 object-contain mb-4'
              />
            </div>
          </div>
          <div className='flex-shrink-0 w-1/4'>
            <div className='aspect-w-1 aspect-h-1'>
              <img
                src={nft_2}
                className='hover:scale-105 w-full px-8 transform origin-center transition-transform duration-300 object-contain mb-4'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='absolute '>
        
      </div>
    </div>
  )
}
