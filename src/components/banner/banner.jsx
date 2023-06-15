import React from 'react'
import banner2 from '../../assets/banner2.avif'
import { RiHqFill } from 'react-icons/ri'
import nft_1 from '../../assets/nft_1.png'
import nft_2 from '../../assets/nft_2.png'
import nft_3 from '../../assets/nft_3.jpg'
import nft_4 from '../../assets/nft_4.jpg'
import { useActionData } from 'react-router'
import './banner.css'

export default function Banner() {
  // const [mouseHover, setMouseHover] = useState('')

  // const showImage = (img) => {
  //     return(
  //         <img src={img} onMouseEnter={setMouseHover(true)} onMouseLeave={} />
  //     )
  // }

  return (
    <div className='w-fulltext-md md:text-lg banner mt-8'>
      <div className='bottom-0 left-0  flex flex-col font-bold w-full'>
        <div className='mb-2 ml-4 mt-10'>Kanpai Pandas</div>
        <div className='mb-2 ml-4 '>By Kanpai Pandas</div>
        <div className='ml-4 flex flex-row mb-2'>
          <div className='mr-4'>
            Floor Price
            <br />
            1.40
          </div>
          <div className='mr-4'>
            1D Volume
            <br />
            9.77
          </div>
          <div>
            <button className='m-0'>View Collection👉</button>
          </div>
        </div>
      
      </div>
    </div>
  )
}
