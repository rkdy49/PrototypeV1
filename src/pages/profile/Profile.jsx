import React from "react";
import "./profile.css";
import profile_banner from "../../assets/profile_banner.jpg";
import profile_pic from "../../assets/images.png";
import { useMoralis, useMoralisQuery } from "react-moralis";
import {
  contractAddress,
  contractAddressMarket as marketplaceContractAddress,
  abi_marketplace as abiMarketplace,
} from "./../../constants";
import { ethers } from "ethers";

const Profile = () => {
  const {user } = useMoralis();
  const id = user.id;
  console.log(user);
  const { data, error, isLoading } = useMoralisQuery("Sales", (query) =>
    query.equalTo("userAddress", id)
  );
  console.log(data);

  // // console.log(data);
  // async function getNFTMetadata() {
  //   // data?.map(async (res) => {
  //   const metadata = await api.token.getNFTMetadata({
  //     address: "0xe2dC7315fF98CC91790C72878485a899BfC21D88",
  //   });
  //   print(metadata);
  // }

  async function getAmountRemaining(res) {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const marketplaceContract = new ethers.Contract(
        marketplaceContractAddress,
        abiMarketplace,
        signer
      );
      const response = await marketplaceContract.getAmountRemaining(
        "0xe2dC7315fF98CC91790C72878485a899BfC21D88",
        3
      );
      console.log(response);
    } else alert("Sorry no wallet found");
  }

  function cards() {
    return data.map((res) => (
      <div className="card-column">
        {getAmountRemaining(res)}
        <div className="bids-card">
          <div
            style={{
              display: "",
              gridTemplateColumns: "repeat(3, 4fr)",
              gridGap: "10px",
            }}
          >
            {/* <Link
          to={`/post/${res.attributes.}${nft.token_id}`}
          state={{ data: nft }}
      >  */}
            <div className="bids-card-top">
              {res.attributes.nft.metadata?.image && (
                <img
                  src={res.attributes.nft.metadata?.image.replace(
                    "ipfs://",
                    "https://ipfs.moralis.io:2053/ipfs/"
                  )}
                  alt=""
                />
              )}

              <p className="bids-title">{res.attributes.nft.metadata?.name}</p>
            </div>
            <div className="bids-card-bottom">
              <p>Time remaining</p>
              <p>
                <span>ETH</span>
              </p>
            </div>
            {/* </Link>  */}
          </div>
        </div>
      </div>
    ));
  }
  return (
    <div className="profile section__padding">
      <div className="profile-top">
        <div className="profile-banner">
          <img src={profile_banner} alt="banner" />
        </div>
        <div className="profile-pic">
          <img src={profile_pic} alt="profile" />
          <h3>{user.attributes.ethAddress.substring(0, 5)}.....{user.attributes.ethAddress.substring(user.attributes.ethAddress.length - 3)}</h3>
        </div>
      </div>
      <div className="profile-bottom">
        
        
        <div className="bids-container">
          <div className="card-wrap">
            {cards()}
            {/* {data.map(
              // (res) => 
                  <div className="card-column">
                    <div className="bids-card">
                      <div
                //       style={{
                //         display: "",
                //         gridTemplateColumns: "repeat(3, 4fr)",
                //         gridGap: "10px",
                //       }}
                //     >
                //       {/* <Link
                //           to={`/post/${res.attributes.}${nft.token_id}`}
                //           state={{ data: nft }}
                //       > 
                //       <div className="bids-card-top">
                //         {res.attributes.nft.metadata?.image && (
                //           <img
                //             src={res.attributes.nft.metadata?.image.replace(
                //               "ipfs://",
                //               "https://ipfs.moralis.io:2053/ipfs/"
                //             )}
                //             alt=""
                //           />
                //         )}

                //         <p className="bids-title">
                //           {res.attributes.nft.metadata?.name}
                //         </p>
                //       </div>
                //       <div className="bids-card-bottom">
                //         <p>
                //           0.20 <span>ETH</span>
                //         </p>
                //         <p>Price:</p>
                //       </div>
                //       {/* </Link> 
                //     </div>
                //   </div>
                console.log(res)
              // </div>
            )}*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
