import { useNFTBalances } from "react-moralis";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import "./bids.css";

 
export default function Bids() {
 
  const { data, error, isLoading } = useNFTBalances(
    {
      chain: 5,
      address: "0x45F0bF42fc26923e88a46b15Ad22B89fA50Dbb37",
    },
    {
      autoFetch: true,
    }
  );
  
  
  try {
    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return (
        <div>
          <p>{error.name}</p>
          <p>{error.message}</p>
        </div>
      );
    }

    if (!data?.result || data.result.length === 0) {
       return <Loader />;
    }


    return (
      <div className="card-wrap">
        {data.result.map((nft) => (
          <div className="card-column">
           
              <div className="bids-card">
            <Link
              to={`/post/${nft.token_address}${nft.token_id}`}
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
                  <p>
                    Price: 
                  </p>
                </div>
            </Link>
              </div>
          </div>
        ))}
      </div>
    );
  } 
  
  catch (error) {
    console.log(error);
    return null;
  }
}

