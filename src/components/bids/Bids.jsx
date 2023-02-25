import { useNFTBalances } from "react-moralis";
import { Link } from "react-router-dom";
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
      return <p>isLoading</p>;
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
      return <p>No result</p>;
    }


    return (
      <div
        style={{
          display: "",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "20px",
        }}
      >
        {data.result.map((nft) => (
          <div className="card-column">
           
            <Link
              to={`/post/${nft.token_address}${nft.token_id}`}
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
              </div>
            </Link>
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

