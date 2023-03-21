
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import { useEffect, useState } from "react";
import axios from "axios";
import "./bids.css";

export default function Bids() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios("https://gearfi.onrender.com/getNFTs").then(({ data }) => {
      setData(data);
      console.log(data.nfts);
    });
  }, []);

  try {
    if (!data?.nfts || data.nfts.length === 0) {
      return <Loader />;
    }

    return (
      <div className="bids-container">

        <div className="bids-container-text">
          <h1>Discover Latest NFTs</h1>
        </div>

        <div className="card-wrap">
          {data.nfts.map((nft) => (
           
           <div className="card-column">
              <Link
                to={`/nft/${nft.token_address._value}${nft.token_id}`}
                state={{ data: nft }}
              >
               
                <div className="bids-card">
                  
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

                    <p className="bids-title">{nft.metadata?.name} #{nft.token_id}</p>
                  </div>

                  <div className="bids-card-bottom">
                    <div>
                    <p>Price</p>
                    <p>
                      0.01 <span>ETH</span>
                    </p>
                    </div>

                    <div>
                    <p>Downpayment</p>
                    <p>0.003 <span>ETH</span></p>
                    </div>
                    
                  </div>
                </div>
              </Link>
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
