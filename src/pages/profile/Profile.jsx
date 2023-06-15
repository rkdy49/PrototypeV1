import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './profile.css'
// import { useMoralis, useMoralisQuery } from "react-moralis";
import userProfile from '../../assets/userProfile.jpg'
// import { nftContractAddress, abi, NftMarketplace_address, abi_marketplace } from "./../../constants";
// import { ethers } from "ethers";

/***************************************************************** */
import { AiOutlineArrowRight } from "react-icons/ai";
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
/********************************************************** */

const Profile = () => {
  // const { user } = useMoralis();

  // console.log("user: ", user);

  // const { data, error, isLoading } = useMoralisQuery("Sales", (query) =>
  //   query.equalTo("userAddress", user?.id)
  // );

  // function cards() {
  //    return data?.map((res) => (

  //     <div className="card-column">
  //       <div className="bids-card">
  //       <div
  //         style={{
  //           display: "",
  //           gridTemplateColumns: "repeat(3, 4fr)",
  //           gridGap: "10px",
  //         }}
  //       >
  //         <Link
  //           to={`/profileitem/${res.attributes.nft.token_address._value}${res.attributes.nft.token_id}`}
  //           state={{ data: res.attributes.nft }}
  //         >
  //           <div className="bids-card-top">
  //             {res.attributes.nft.metadata.image && (
  //               <img
  //                 src={res.attributes.nft.metadata.image.replace(
  //                   "ipfs://",
  //                   "https://ipfs.moralis.io:2053/ipfs/"
  //                 )}
  //                 alt=""
  //               />
  //             )}

  //             <p className="bids-title">
  //               {res.attributes.nft.metadata.name} #
  //               {res.attributes.nft.token_id}
  //             </p>
  //           </div>
  //           <div className="bids-card-bottom"></div>
  //         </Link>
  //       </div>
  //     </div>

  //     </div>

  //   ));
  // }

  // async function checkOwner(token_address, token_id) {
  //   if (window.ethereum) {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();

  //     const nftContract = new ethers.Contract(nftContractAddress, abi, signer);
  //     const owner = await nftContract.ownerOf(token_id);

  //     const marketplaceContract = new ethers.Contract(NftMarketplace_address, abi_marketplace, signer);
  //     const loanData = await marketplaceContract.getLoanData(token_address, token_id);
  //     //console.log("owner address ", owner);

  //     if ((loanData.buyer === user?.attributes.ethAddress && loanData.state !== 3) || (owner === user?.attributes.ethAddress && loanData.state === 3)) {

  //       return true;

  //     } else return false;

  //   } else alert("Sorry no wallet found");
  // }

  const [listings, setListings] = React.useState(true)
  return (
    <div className='text-white mt-20'>
      <div className='flex flex-col items-center'>
        <img src={userProfile} alt='' className='w-24 mt-8 rounded-full' />
        <div className=' text-4xl font-bold mb-2'>Shane Helm</div>
        <div className=''>Joined 11/11/12 address: 2e4c...a7df</div>
      </div>
      <div className='flex justify-start'>
        <div className={`cursor-pointer m-4 mr-8 text-3xl font-semibold ${listings? 'text-red-600' : ''}`} onClick={() => setListings(true)}>
          My Listings
        </div>
        <div className={`cursor-pointer m-4 mr-8 text-3xl font-semibold ${!listings? 'text-red-600' : ''}`} onClick={() => setListings(false)}>
          NFTs
        </div>
      </div>
      {listings && (
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
      {!listings && (
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

export default Profile



