import { React, useEffect, useState } from 'react'
import './item.css'
import { useLocation } from "react-router";
// import { NftMarketplace_address, abi_marketplace } from "./../../constants";
// import { ethers } from "ethers";
import { useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProfileItem = () => {
  //   const location = useLocation();
  //   const nft = location.state?.data;
  //console.log(nft);

  //   const [loanRepaid, setLoanRepaid] = useState();
  //   const [nftClaimed, setNftClaimed] = useState();
  //   const [timeRemaining, setTimeRemaining] = useState();

  //   useEffect(() => {
  //     isLoanRepaid().then((res) => setLoanRepaid(res));
  //     isNFTClaimed().then((res) => setNftClaimed(res));
  //     getTimeRemaining().then((res) => setTimeRemaining(res));
  //   }, [loanRepaid, nftClaimed]);
  const location = useLocation();
  const nft = location.state?.data;

    console.log('nfts is', nft)


  //   async function getTimeRemaining() {
  //     if (window.ethereum) {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);

  //       const signer = provider.getSigner();

  //       const marketplaceContract = new ethers.Contract(
  //         NftMarketplace_address,
  //         abi_marketplace,
  //         signer
  //       );

  //       const response = await marketplaceContract.getTimeRemaining(
  //         nft.token_address._value,
  //         nft.token_id
  //       );

  //       console.log(response.toString() / 86400);
  //       return response.toString() / 86400;
  //     } else alert("Sorry no wallet found");
  //   }

  //   async function repay() {
  //     const accounts = await window.ethereum.request({ method: "eth_accounts" });
  //     const chainId = await window.ethereum.request({ method: "eth_chainId" });

  //     if (accounts.length === 0) {
  //       alert("Please connect Wallet");
  //       return;
  //     }

  //     if (chainId !== "0x5") {
  //       alert("Please switch to Goerli Testnet");
  //       return;
  //     }

  //     if (window.ethereum) {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);

  //       const signer = provider.getSigner();

  //       const marketplaceContract = new ethers.Contract(
  //         NftMarketplace_address,
  //         abi_marketplace,
  //         signer
  //       );

  //       const response = await marketplaceContract.repayLoan(
  //         nft.token_address._value,
  //         nft.token_id,
  //         {
  //           value: ethers.utils.parseEther("0.007"),
  //         }
  //       );

  //       console.log(response);
  //     } else alert("Sorry no wallet found");
  //   }

  //   async function isLoanRepaid() {
  //     if (window.ethereum) {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);

  //       const signer = provider.getSigner();

  //       const marketplaceContract = new ethers.Contract(
  //         NftMarketplace_address,
  //         abi_marketplace,
  //         signer
  //       );

  //       const response = await marketplaceContract.getLoanData(
  //         nft.token_address._value,
  //         nft.token_id
  //       );

  //       if (response.state === 2) {
  //         console.log("Loan state (Repaid)", response.state);
  //         return true;
  //       } else return false;
  //     } else alert("Sorry no wallet found");
  //   }

  //   async function claimNFT() {
  //     if (window.ethereum) {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);

  //       const signer = provider.getSigner();

  //       const marketplaceContract = new ethers.Contract(
  //         NftMarketplace_address,
  //         abi_marketplace,
  //         signer
  //       );

  //       const response = await marketplaceContract
  //         .claimNFTbyBuyer(nft.token_address._value, nft.token_id)
  //         .then(() => {
  //           console.log(response);
  //         });
  //     } else alert("Sorry no wallet found");
  //   }

  //   async function isNFTClaimed() {
  //     if (window.ethereum) {
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);

  //       const signer = provider.getSigner();

  //       const marketplaceContract = new ethers.Contract(
  //         NftMarketplace_address,
  //         abi_marketplace,
  //         signer
  //       );

  //       const response = await marketplaceContract.getLoanData(
  //         nft.token_address._value,
  //         nft.token_id
  //       );

  //       if (response.state === 3) {
  //         console.log("Loan state (claimed)", response.state);
  //         return true;
  //       } else return false;
  //     } else alert("Sorry no wallet found");
  //   }

  //   return (
  // //     <div className="item section__padding">
  // //       <div className="item-image">
  // //         <img
  // //           src={nft.metadata?.image.replace(
  // //             "ipfs://",
  // //             "https://ipfs.moralis.io:2053/ipfs/"
  // //           )}
  // //           alt=""
  // //         />
  // //       </div>
  // //       <div className="item-content">
  // //         <div className="item-content-title">
  // //           <h1>
  // //             {nft.metadata?.name} #{nft.token_id}
  // //           </h1>
  // //         </div>
  // //         <div>
  // //           <div className="item-content-detail">
  // //             <p>{nft.metadata?.description}</p>
  // //           </div>

  // //           {nftClaimed ? (
  // //             <div className="item-content-detail">
  // //               {/* <p>Owner: {user?.attributes.ethAddress}</p> */}
  // //               <p>
  // //                 <span>
  // //                   {" "}
  // //                   Checkout your NFT on{" "}
  // //                   <a href="https://testnets.opensea.io/">
  // //                     https://testnets.opensea.io
  // //                   </a>{" "}
  // //                   (Goerli){" "}
  // //                 </span>
  // //               </p>
  // //             </div>
  // //           ) : (
  // //             <div>
  // //               <div className="item-content-detail">
  // //                 <p>Owner: 0xB9e53abF5b0bAE6353076467F0505DebA8A98efa</p>
  // //               </div>

  // //               <div className="item-content-buy">
  // //                 {loanRepaid ? (
  // //                   <button className="primary-btn" onClick={() => claimNFT()}>
  // //                     Claim NFT
  // //                   </button>
  // //                 ) : (
  // //                   <div className="item-content-detail">
  // //                     <p>Time Remaining : {timeRemaining} Days</p>
  // //                     <p>
  // //                       <span>
  // //                         *Note: Failure to pay full amount in the remaining time
  // //                         will result in default of the sale, which means you
  // //                         won't be able to claim your NFT.
  // //                       </span>
  // //                     </p>
  // //                     <button className="primary-btn" onClick={() => repay()}>
  // //                       Pay 0.007 ETH
  // //                     </button>
  // //                   </div>
  // //                 )}
  // //               </div>
  // //             </div>
  // //           )}
  // //         </div>
  // //       </div>
  // //     </div>
  // //   );
  return (
    <div className='item flex px-6 text-white h-screen '>
      <div className='item-image flex flex-col justify-center items-center border-r border-gray-200'>
        <img
          src={`https://ipfs.io/ipfs/${
            nft.metadata?.imageURI.split('//')[1]
          }`}
          alt=''
          className='rounded-15'
        />
        {/* <p className='mt-4 '>Description: {nft?.metadata.description}</p> */}
      </div>
      <div className='item-content flex-1 flex justify-start items-start flex-col m-5 relative'>
        <div className='item-content-title'>
          <h1 className='font-bold text-28 mt-20'>
            {nft.metadata?.name} #{nft?.tokenId}
          </h1>
        </div>
        <div className=' flex-col mt-4 w-full px-8'>
          <div className='p-4 border border-white border-b-0 py-8'>
            Description:{' '}
            <span className='font-semibold'>
              {nft.metadata?.description}
            </span>
          </div>
          <div className='p-4 border border-white text-white'>
            <div className='flex justify-around my-4'>
              <div className='flex flex-col items-center'>
                <div>Price</div>
                <div className='text-5xl font-bold'>{nft.price}</div>
              </div>
              <div className='flex flex-col items-center'>
                <div>Downpayment</div>
                <div className='text-5xl font-bold'>30%</div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='item-content-buy mb-4'>
          {sale ? (
            <Link
            // to={`/profile/${user.id}`}
            >
              <button className='primary-btn'>Checkout Sale</button>
            </Link>
          ) : (
            <div>
              <div className='relative inline-block'>
                <button className='primary-btn mb-0'>
                  Buy Now For 0.003 ETH
                </button>
              </div>
              <button className='primary-btn'>Make Offer</button>
            </div>
          )}
        </div> */}
        <div className='item-content-buy mb-4'>
          {nft.state === 'listed' ? (
            <div>
              <button className='primary-btn'>Repay Loan</button>
              <button className='primary-btn'>Claim NFT</button>
            </div>
          ) : (
            <div>
              <div className='relative inline-block'>
                <button className='primary-btn mb-0'>
                  Buy Now For 0.003 ETH
                </button>
              </div>
              <button className='primary-btn'>Make Offer</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileItem
