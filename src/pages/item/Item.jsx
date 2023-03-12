import React from "react";
import "./item.css";

import {  NftMarketplace_address, abi_marketplace } from "./../../constants";
import { useLocation } from "react-router";
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";

const Item = () => {
  const { isAuthenticated, user, Moralis, account } = useMoralis();

  const location = useLocation();
  const nft = location.state?.data;
  console.log(nft.token_address._value);
  
  async function storeInitializedSale(nft) {

    const InitializedSale = Moralis.Object.extend("Sales");

    const initializedSale = new InitializedSale();
    
    initializedSale.set("userAddress", user.id);
    initializedSale.set("nft", nft);

    await initializedSale.save();
  }

  async function buy() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        NftMarketplace_address,
        abi_marketplace,
        signer
      );
     
      const response = await contract.initializeSale(nft.token_address._value, nft.token_id, {
        value: ethers.utils.parseEther("0.003"),
      });

      console.log(response)

      if(response){
        storeInitializedSale(nft)
      }
    } 

    else alert("Sorry no wallet found");

  }

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
              <h1>{nft?.metadata.name}</h1>
         
            </div>
            
            <div className="item-content-detail">
              <p>{nft?.metadata.description}</p>
              <p>Owner: 0x45F0bF42fc26923e88a46b15Ad22B89fA50Dbb37</p>
              <p>Price: 0.01 ETH</p>
              <p>Downpayment : 30%</p>
              <p>Repayment Duration : 4 days</p>
            </div>
            <div className="item-content-buy">
              
              <button 
              className="primary-btn" 
              onClick={()=>buy()}
              > 

              Buy Now For 0.003 ETH 

              </button>

            </div>
          </div>
      </div>
  );
};

export default Item;
