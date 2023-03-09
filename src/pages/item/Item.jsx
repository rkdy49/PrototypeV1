import React from 'react';
import './item.css'
import creator from '../../assets/seller2.png'

import { useLocation } from 'react-router';
import { useMoralis } from "react-moralis";
import { useMoralisQuery } from 'react-moralis';

const Item = () => {
  const { isAuthenticated, user, Moralis, account } = useMoralis();

  const location = useLocation();
  const nft = location.state?.data;
  console.log()
  //const id = user.id
  
  

    // const { data, error, isLoading } = useMoralisQuery("InitializedSales", (query) => query.equalTo("userAddress", id))
    // data.map((res) =>{  console.log(res.attributes.nftAddress)}) 
  
  
  
  
  async function storeInitializedSale(){
    
    const InitializedSale = Moralis.Object.extend("InitializedSales");

    const initializedSale = new InitializedSale();
    
    initializedSale.set("nftAddress", nft.token_address._value);
    initializedSale.set("tokenId", nft.token_id);
    initializedSale.set("userAddress", user.id);

    await initializedSale.save()

  }
  
  return( 
      <div className='item section__padding'>
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
              <p>From <span>4.5 ETH</span> ‧ 20 of 25 available</p>
            </div>
            <div className="item-content-creator">
              <div><p>Creater</p></div>
              <div>
                <img src={creator} alt="creator" />
                <p>GearFi </p>
              </div>
            </div>
            <div className="item-content-detail">
              <p>{nft?.metadata.description}</p>
            </div>
            <div className="item-content-buy">
              
              <button 
              className="primary-btn" 
              // onClick={()=> setUserData({
              //   tokenAddressBought : nft.token_address,
              //   tokenIdBought : nft.token_id
              // })}
              onClick={storeInitializedSale}
              > 
             
              Buy For 0.1ETH 
             
              </button>

              {/* <button className="secondary-btn">{isAuthenticated ? user.getUsername() : "Not Authenticated"}</button> */}

            </div>
          </div>
      </div>
  )
};

export default Item;
