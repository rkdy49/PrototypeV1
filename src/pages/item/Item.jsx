import React from 'react';
import './item.css'
import creator from '../../assets/seller2.png'

import { useLocation } from 'react-router';
import { useMoralis } from "react-moralis";

const Item = () => {
  const { isAuthenticated, user } = useMoralis();

  const location = useLocation();
  const nft = location.state?.data;
  console.log(nft.token_id)
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
              <button className="primary-btn" > Buy For 0.1ETH </button>
              <button className="secondary-btn">{isAuthenticated ? user.getUsername() : "Not Authenticated"}</button>

            </div>
          </div>
      </div>
  )
};

export default Item;
