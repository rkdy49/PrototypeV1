import { React, useContext, useEffect, useState } from 'react'
import Banner from '../../components/banner/banner'
import nft_5 from '../../assets/nft_5.avif'
import bannerImg from '../../assets/banner2.avif'
import { AiOutlineArrowRight } from 'react-icons/ai'
import axios from 'axios'
import { useParams } from 'react-router'
import data from './data.json'

import { UserContext } from '../../components/UserContext/UserContext'

export default function Collection() {
  const { collAddress } = useParams()
  const [nftData, setNftData] = useState([])

  useEffect(() => {
    console.log('useEffect1')
    axios(`http://localhost:8000/assets/${collAddress}`).then(
      ({ data }) => {
        console.log('datacollection type', data)
        setNftData(data)
      }
    )
  }, [collAddress])

  console.log('nftData:', nftData)

  const nftDataArr = Object.values(nftData);

  const collData = data.find((obj) => {
    return obj.address === collAddress
  });
  console.log('colldata', collData)

  return (
    <div className='text-white mt-20'>
      <div className='relative'>
        <img src={collData.banner_img} alt='' className='object-cover h-[40vh] relative top-0 left-0 w-full' />
        <img
          src={collData.img}
          alt = ''
          className='b-4 absolute -bottom-4 left-20 border-4 w-20 sm:w-24 md:w-32 lg:w-40 border-white rounded-lg '
        />
      </div>
      <div>
        <div className='mx-4 mb-0 mt-8 text-3xl font-bold'>
          {collData.COLLECTION}
        </div>
       
        <div className='mx-4 text-lg m-4 w-2/3'>
          {collData.description}
        </div>
        <div className='flex'>
          <div className='flex-col ml-8 text-center'>
            <div>{collData.FLOOR_PRICE}ETH</div>
            <div className='text-sm mt-2'>Floor Price</div>
          </div>
          <div className='flex-col ml-8 text-center'>
            <div>{collData.SUPPLY}</div>
            <div className='text-sm mt-2'>Total Supply</div>
          </div>
          <div className='flex-col ml-8 text-center'>
            <div>{collData.OWNERS}</div>
            <div className='text-sm mt-2'>Unique Owners</div>
          </div>
          <div className='flex-col ml-8 text-center'>
            <div>0.75ETH</div>
            <div className='text-sm mt-2'>total volume</div>
          </div>
        </div>
   
        <div className='grid grid-cols-5 m-2 text-white'>
          {nftDataArr.map((nft) => {
            return (
              <div className='flex flex-col m-2 mt-8 w-56 h-72 border-2 border-indigo-300'>
                {console.log(`nft image is : https://ipfs.io/ipfs/${nft.metadata.imageURI.split('//')[1]}`)}
                <img src={`https://ipfs.io/ipfs/${nft.metadata.imageURI.split('//')[1]}`} alt='' className='w-64 h-48' />
                <div className='flex flex-col mt-0 p-4'>
                  <div className='font-bold mb-2 flex items-center justify-between'>
                    <div>{nft.metadata.name}</div>
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
      </div>
    </div>
  )
}