import React from "react";
import "./item.css";
import { useLocation } from "react-router";
import {  NftMarketplace_address, abi_marketplace } from "./../../constants";
import { ethers } from "ethers";



const ProfileItem = () => {

  const location = useLocation();
  const nft = location.state?.data;
  console.log(nft);

  let amountRemaining;

 async function getAmountRemaining() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
      const marketplaceContract = new ethers.Contract(
        NftMarketplace_address,
        abi_marketplace,
        signer
      );

      const response = await marketplaceContract.getAmountRemaining(
        nft.token_address._value,
        nft.token_id
      );
      
      console.log(ethers.utils.formatEther(response.toString()));
      amountRemaining = ethers.utils.formatEther(response.toString())
    } 
    
    else alert("Sorry no wallet found");
     
  }

  async function getTimeRemaining() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
      const marketplaceContract = new ethers.Contract(
        NftMarketplace_address,
        abi_marketplace,
        signer
      );

      const response = await marketplaceContract.getTimeRemaining(
        nft.token_address._value,
        nft.token_id
      );
      
      console.log(response.toString()/86400);
      
    } 
    
    else alert("Sorry no wallet found");
     
  }

  getAmountRemaining()
  getTimeRemaining()

  return (
    <div className="item section__padding">
        <div className="item-image">
        <img
            src={nft.metadata?.image.replace(
              "ipfs://",
              "https://ipfs.moralis.io:2053/ipfs/"
            )}
             alt=""
        />
        </div>
          <div className="item-content">
            <div className="item-content-title">
              <h1>{nft.metadata?.name}</h1>
         
            </div>
            
            <div className="item-content-detail">
            
              <p>{nft.metadata?.description}</p>
              <p>Owner: 0x45F0bF42fc26923e88a46b15Ad22B89fA50Dbb37</p>
              <p>{amountRemaining}</p>
              <p>Downpayment : 30%</p>
              <p>Repayment Duration : 4 days</p>
            </div>
            <div className="item-content-buy">
              
              {/* <button className="primary-btn" > 

              Buy Now For 0.003 ETH 

              </button> */}

            </div>
          </div>
      </div>
  );
};

export default ProfileItem;
