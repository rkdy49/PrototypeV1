import React from "react";
import "./profile.css";
import profile_banner from "../../assets/profile_banner.png";
import profile_pic from "../../assets/profile.jpg";
import { useMoralis, useMoralisQuery } from "react-moralis";

const Profile = () => {
  const { isAuthenticated, user, Moralis, account } = useMoralis();
  const id = user.id;
  console.log(id);
  const { data, error, isLoading } = useMoralisQuery("Sales", (query) =>
    query.equalTo("userAddress", id)
  );
  console.log(data, null, 2);

  // // console.log(data);
  // async function getNFTMetadata() {
  //   // data?.map(async (res) => {
  //   const metadata = await api.token.getNFTMetadata({
  //     address: "0xe2dC7315fF98CC91790C72878485a899BfC21D88",
  //   });
  //   print(metadata);
  // }

  function cards() {
    return data.map((res) => (
      <div className="card-column">
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
              <p>
                0.20 <span>ETH</span>
              </p>
              <p>Price:</p>
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
          <h3>{id}</h3>
        </div>
      </div>
      <div className="profile-bottom">
        <div className="profile-bottom-input">
          <input type="text" placeholder="Search Item here" />
          <select>
            <option>Recently Listed</option>
            <option>Popular</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
        </div>
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
