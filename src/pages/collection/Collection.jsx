import { React, useContext, useEffect } from 'react'
import Banner from '../../components/banner/banner'
import nft_5 from '../../assets/nft_5.avif'
import bannerImg from '../../assets/banner2.avif'
import { AiOutlineArrowRight } from 'react-icons/ai'
import axios from 'axios'
import { useParams } from 'react-router'
import data from "./data.json";
import { UserContext } from '../../components/UserContext/UserContext'

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
export default function Collection() {
  const { user, setUser } = useContext(UserContext)
  const nftId = 4437
  const nftAddress = 427
  const sellerAddress = 5798
  const metadata = { name: 'kanpai' }
  const price = 75758
  const {collAddress} = useParams()
  // const collAddress = id;
  console.log('id:', collAddress)

  // useEffect(() => {
  //   axios.post(`http://localhost:8000/addListing`, {nftId, nftAddress, sellerAddress, metadata, price}).then(({ data }) => {
  //     console.log("data is", data);
  //   })
  // }, [])
  useEffect(() => {
    axios(`http://localhost:8000/getListing/${collAddress}`, {collAddress}).then(
      ({ data }) => {
        console.log('data is', data)
      }
    )
  }, [])

  const res = data.find((entry) => entry.address === collAddress);
  console.log(res)
  return (
    <div className='text-white'>
      <div className='relative'>
        <img src={bannerImg} alt='' className='relative top-0 left-0 w-full' />
        <img
          src={nft_5}
          className='b-4 absolute -bottom-4 left-20 border-4 w-20 sm:w-24 md:w-32 lg:w-40 border-white rounded-lg '
        />
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
        <div className='grid grid-cols-5 m-2'>
          {nfts.map((nft) => {
            return (
              <div className='flex flex-col m-2 mt-8 w-56 h-72 border-2 border-indigo-300'>
                <img src={nft.url} alt='' className='w-64 h-48' />
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
