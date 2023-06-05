import React, { useState } from 'react'
import './item.css'
import LinedChart from '../../components/lineChart/LinedChart'

import { NftMarketplace_address, abi_marketplace } from './../../constants'
import { useLocation } from 'react-router'
// import { useMoralis } from "react-moralis";
import { ethers } from 'ethers'
import { Link } from 'react-router-dom'

const Item = () => {
  // const { user, Moralis } = useMoralis();

  const location = useLocation()
  const nft = location.state?.data
  //console.log(nft.token_address._value);
  const [sale, setSale] = useState()

  // async function storeInitializedSale() {
  //   const InitializedSale = Moralis.Object.extend("Sales");

  //   const initializedSale = new InitializedSale();

  //   initializedSale.set("userAddress", user.id);
  //   initializedSale.set("nft", nft);

  //   await initializedSale.save();
  // }

  async function buy() {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' })
    const chainId = await window.ethereum.request({ method: 'eth_chainId' })

    if (accounts.length === 0) {
      alert('Please connect Wallet')
      return
    }

    if (chainId !== '0x5') {
      alert('Please switch to Goerli Testnet')
      return
    }

    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(
        NftMarketplace_address,
        abi_marketplace,
        signer
      )

      const response = await contract.initializeSale(
        nft.token_address._value,
        nft.token_id,
        {
          value: ethers.utils.parseEther('0.003'),
        }
      )
      // .then(() => {
      //   storeInitializedSale();
      //   setSale(true);
      // });

      console.log(response)
    } else alert('Sorry no wallet found')
  }

  return (
    <div className='item flex px-6'>
      <div className='item-image flex-1 flex justify-center items-center border-r border-gray-200'>
        <img
          src={nft.metadata?.image.replace(
            'ipfs://',
            'https://ipfs.moralis.io:2053/ipfs/'
          )}
          alt=''
          className='w-90p rounded-15'
        />
      </div>
      <div className='item-content flex-1 flex justify-start items-start flex-col m-5 relative'>
        <div className='item-content-title'>
          <h1 className='font-bold text-28 text-white'>
            {nft?.metadata.name} #{nft.token_id}
          </h1>
        </div>

        <div className='item-content-detail mt-5'>
          <p className='text-white'>Description: {nft?.metadata.description}</p>
          <p className='text-white'>
            Owner: 0xB9e53abF5b0bAE6353076467F0505DebA8A98efa
          </p>
          <p className='text-white'>Price: 0.01 ETH</p>
          <p className='text-white'>Downpayment: 30%</p>
          <p className='text-white'>Repayment Duration: 4 days</p>
        </div>
        <div className='item-content-buy'>
          {sale ? (
            <Link
            // to={`/profile/${user.id}`}
            >
              <button className='primary-btn'>Checkout Sale</button>
            </Link>
          ) : (
            <button className='primary-btn' onClick={() => buy()}>
              Buy Now For 0.003 ETH
            </button>
          )}
        </div>
        <LinedChart />
      </div>
    </div>
  )
}

export default Item

{
  /* <div className="item flex px-6">
  <div className="item-image flex-1 flex justify-center items-center border-r border-gray-200">
    <img
      src={nft.metadata?.image.replace(
        "ipfs://",
        "https://ipfs.moralis.io:2053/ipfs/"
      )}
      alt=""
      className="w-90p rounded-15"
    />
  </div>
  <div className="item-content flex-1 flex justify-start items-start flex-col m-5 relative">
    <div className="item-content-title">
      <h1 className="font-bold text-28 text-white">
        {nft?.metadata.name} #{nft.token_id}
      </h1>
    </div>

    <div className="item-content-detail mt-5">
      <p className="text-white">
        Description: {nft?.metadata.description}
      </p>
      <p className="text-white">Owner: 0xB9e53abF5b0bAE6353076467F0505DebA8A98efa</p>
      <p className="text-white">Price: 0.01 ETH</p>
      <p className="text-white">Downpayment: 30%</p>
      <p className="text-white">Repayment Duration: 4 days</p>
    </div>
    <div className="item-content-buy">
      {sale ? (
        <Link to={`/profile/${user.id}`}>
          <button className="primary-btn">Checkout Sale</button>
        </Link>
      ) : (
        <button className="primary-btn" onClick={() => buy()}>
          Buy Now For 0.003 ETH
        </button>
      )}
    </div>
  </div>
</div>  */
}
