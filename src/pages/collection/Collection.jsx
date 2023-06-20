import { React, useContext, useEffect, useState } from 'react'
import Banner from '../../components/banner/banner'
import nft_5 from '../../assets/nft_5.avif'
import bannerImg from '../../assets/banner2.avif'
import { AiOutlineArrowRight } from 'react-icons/ai'
import axios from 'axios'
import { useParams } from 'react-router'
// import data from '../../assets/data.json'

import { UserContext } from '../../components/UserContext/UserContext'

export default function Collection() {
  // useEffect(() => {
  //   axios.post(`http://localhost:8000/addListing`, {nftId, nftAddress, sellerAddress, metadata, price}).then(({ data }) => {
  //     console.log("data is", data);
  //   })
  // }, [])
  // useEffect(() => {
  //   console.log('krishna')
  //   axios(`http://localhost:8000/getListing/${collAddress}`, {collAddress}).then(
  //     ({ data }) => {
  //       console.log('data is', data)
  //     }
  //   )
  // }, [])
  // useEffect(() => {
  //   console.log('krishna')
  // axios(`http://localhost:8000/collection/${collAddress}`).then(
  //   ({ data }) => {
  //     console.log('data is', data)
  //   }
  // )
  // }, [])
  // useEffect(() => {
  //   axios('http://localhost:3000/getNFTMetadata').then((data) => {
  //     // console.log("data is: ", data.data.metadata)
  //     fetch(data.data)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok')
  //         }
  //         return response.json() // Extract JSON data from the response
  //       })
  //       .then((result) => {
  //         console.log('data', result.image)
  //       })
  //       .catch((error) => {
  //         console.error('An error occurred:', error)
  //       })
  //   })
  // }, [])

  // data.map(coll => {
  //   console.log("coll is", coll)
  // })
  // console.log('data', data)
  // const response = data.find((entry) => entry.address===collAddress)

  // console.log('response', response)

  const { collAddress } = useParams()
  const [nftIds, setNftIds] = useState([])
  const [nftData, setNftData] = useState([])

  useEffect(() => {
    console.log('useEffect1')
    axios(`http://localhost:8000/collection/${collAddress}`).then(
      ({ data }) => {
        console.log('datacollection type', typeof data.data.collection[0].nfts)
        setNftIds(data.data.collection[0].nfts)
      }
    )
  }, [collAddress])

  useEffect(() => {
    console.log('useEffect2')
    const fetchNftData = async () => {
      const fetchData = async (nftId) => {
        const response = await fetch(`http://localhost:8000/nft/${nftId}`)
        const { data } = await response.json()
        return data.nft[0]
      }

      console.log('nftid type', typeof nftIds)

      const promises = nftIds.map((nftId) => fetchData(nftId))
      
      const fetchedData = await Promise.all(promises)

      setNftData(fetchedData)
    }

    if (nftIds.length > 0) {
      fetchNftData()
    }
  }, [nftIds])

  console.log('nftIds:', nftIds)
  console.log('nftData:', nftData)

  const nftDataArr = Object.values(nftData);

  nftDataArr.map((nft) => console.log("fdhg",nft))

  return (
    <div className='text-white'>
      <div className='relative'>
        {/* <img src={response.bannerImg} alt='' className='banner_img relative top-0 left-0 w-full' /> */}
        {/* <img
          src={response.img}
          className='b-4 absolute -bottom-4 left-20 border-4 w-20 sm:w-24 md:w-32 lg:w-40 border-white rounded-lg '
        /> */}
      </div>
      <div>
        <div className='mx-4 mb-0 mt-8 text-3xl font-bold'>
          Muses in my life
        </div>
        <div className='m-4 my-0 text-md font-semibold'>By RyanAnnet</div>
        <div className='mx-4 text-xs mb-2'>
          "Muses of My Life" is an exclusive NFT collection that features a
          series of digital artworks inspired by the muses that...
        </div>
        <div className='flex'>
          <div className='flex-col ml-4'>
            <div>0.75ETH</div>
            <div className='text-xs'>total volume</div>
          </div>
          <div className='flex-col ml-4'>
            <div>0.75ETH</div>
            <div className='text-xs'>total volume</div>
          </div>
          <div className='flex-col ml-4'>
            <div>0.75ETH</div>
            <div className='text-xs'>total volume</div>
          </div>
          <div className='flex-col ml-4'>
            <div>0.75ETH</div>
            <div className='text-xs'>total volume</div>
          </div>
          <div className='flex-col ml-4'>
            <div>0.75ETH</div>
            <div className='text-xs'>total volume</div>
          </div>
        </div>
        <h1 className='text-white'>working</h1>
        <div className='grid grid-cols-5 m-2 text-white'>
          {nftDataArr.map((nft) => {
            return (
              <div className='flex flex-col m-2 mt-8 w-56 h-72 border-2 border-indigo-300'>
                {console.log('image url', nftData.image)}
                <img src={nft.image} alt='' className='w-64 h-48' />
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
      </div>
    </div>
  )
}
