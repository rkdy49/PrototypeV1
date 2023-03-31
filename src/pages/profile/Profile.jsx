import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import { useMoralis, useMoralisQuery } from "react-moralis";
import profile_banner from "../../assets/profile_banner.jpg";
import profile_pic from "../../assets/images.png";
import { nftContractAddress, abi, NftMarketplace_address } from "./../../constants";
import { ethers } from "ethers";

const Profile = () => {
  const { user } = useMoralis();

  console.log("user: ", user);

  const { data, error, isLoading } = useMoralisQuery("Sales", (query) =>
    query.equalTo("userAddress", user?.id)
  );

  function cards() {
    return data?.map((res) => (
      <div className="card-column">
        { ownerOf(res.attributes.nft.token_id) ? 
        <div className="bids-card">
        <div
          style={{
            display: "",
            gridTemplateColumns: "repeat(3, 4fr)",
            gridGap: "10px",
          }}
        >
          <Link
            to={`/profileitem/${res.attributes.nft.token_address._value}${res.attributes.nft.token_id}`}
            state={{ data: res.attributes.nft }}
          >
            <div className="bids-card-top">
              {res.attributes.nft.metadata.image && (
                <img
                  src={res.attributes.nft.metadata.image.replace(
                    "ipfs://",
                    "https://ipfs.moralis.io:2053/ipfs/"
                  )}
                  alt=""
                />
              )}

              <p className="bids-title">
                {res.attributes.nft.metadata.name} #
                {res.attributes.nft.token_id}
              </p>
            </div>
            <div className="bids-card-bottom"></div>
          </Link>
        </div>
      </div>
        : ""}
        
      </div>
     
    ));
  }

  async function ownerOf(token_address, token_id) {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const nftContract = new ethers.Contract(nftContractAddress, abi, signer);
      const owner = await nftContract.ownerOf(token_address, token_id);
      console.log("owner address ", owner);

      if (owner === NftMarketplace_address || owner === user?.attributes.ethAddress) {
      
        return true;
      
      } else return false;

    } else alert("Sorry no wallet found");
  }

  return (
    <div className="profile section__padding">
      <div className="profile-top">
        <div className="profile-banner">
          <img src={profile_banner} alt="banner" />
        </div>
        <div className="profile-pic">
          <img src={profile_pic} alt="profile" />
          <h3>
            {user?.attributes.ethAddress.substring(0, 5)}....
            {user?.attributes.ethAddress.substring(
              user.attributes.ethAddress.length - 4
            )}
          </h3>
        </div>
      </div>

      <div className="profile-bottom">
        <div className="bids-container">
          <div className="card-wrap">
            
            {data ? cards() : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
