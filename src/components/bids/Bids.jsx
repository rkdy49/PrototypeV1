import { useNFTBalances } from "react-moralis";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import { useEffect, useState } from "react";
import axios from "axios";
import "./bids.css";

export default function Bids() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios("https://gearfi-server.onrender.com/demo").then(({ data }) => {
      setData(data);
      // console.log(data.nfts);
    });
  }, []);


  try {
    if (!data?.nfts || data.nfts.length === 0) {
      return <Loader />;
    }

           
           
    return (
      <div className="bids-container">
     
      <div className="card-wrap">
        {data.nfts.map((nft) => (
          <div className="card-column">
           
              <div className="bids-card">
                <div
                  style={{
                  display: "",
                  gridTemplateColumns: "repeat(3, 4fr)",
                  gridGap: "10px",
                   }}
                  >
                   <Link
                        to={`/post/${nft.token_address._value}${nft.token_id}`}
                        state={{ data: nft }}
                    >
                <div className="bids-card-top">
                  {nft.metadata?.image && (
                    <img
                      src={nft.metadata?.image.replace(
                        "ipfs://",
                        "https://ipfs.moralis.io:2053/ipfs/"
                      )}
                      alt=""
                    />
                  )}

                  <p className="bids-title">{nft.metadata?.name}</p>
                </div>
                <div className="bids-card-bottom">
                  <p>
                    0.20 <span>ETH</span>
                  </p>
                  <p>Price:</p>
                </div>
            </Link>
            </div>
              </div>
          </div>
        ))}
      </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return null;
  }
}