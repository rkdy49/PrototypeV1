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
        <div className="bids-container-text m-4 mt-16">
          <h1 className="font-medium text-2xl text-white">
            Discover Latest NFTs
          </h1>
        </div>
  
        <div className="card-wrap">
          {data.nfts.map((nft) => (
            <div key={nft.token_id} className="card-column">
              <Link
                to={`/nft/${nft.token_address._value}${nft.token_id}`}
                state={{ data: nft }}
                className="block"
              >
                <div className="bids-card bg-gray-800 rounded-lg p-4">
                  <div className="bids-card-top">
                    {nft.metadata?.image && (
                      <img
                        src={nft.metadata?.image.replace(
                          'ipfs://',
                          'https://ipfs.moralis.io:2053/ipfs/'
                        )}
                        alt=""
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    )}
                    <p className="bids-title font-medium text-white mt-4">
                      {nft.metadata?.name} #{nft.token_id}
                    </p>
                  </div>
  
                  <div className="bids-card-bottom flex justify-between">
                    <div>
                      <p className="font-medium text-white">Price</p>
                      <p>
                        0.01 <span className="font-normal">ETH</span>
                      </p>
                    </div>
  
                    <div>
                      <p className="font-medium text-white">Downpayment</p>
                      <p>
                        0.003 <span className="font-normal">ETH</span>
                      </p>
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

