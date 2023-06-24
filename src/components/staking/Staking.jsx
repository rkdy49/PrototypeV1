import React from "react";
import { Link } from "react-router-dom";
import nft_1 from "../../assets/nft_1.png";

export default function Staking() {
  return (
    <div className="m-12 rounded-2xl flex  md:flex-row flex-col justify-evenly  white-glassmorphism items-center">
     
      <div className="flex-col items-center justify-center">
        <div className="flex my-4 justify-center">
          Introducing BNPL Vaults
        </div>
        <div className="flex my-4 justify-items-center">
          Provide Liquidity into our Vaults against Top Blue-Chip NFT collections and 
          earn exciting APR.
        </div>
        <div className="flex my-4 justify-items-center">
          
        <Link to ={'/staking'}>
          <button className="text-[#0ea5e9] bg-gray-800 border-2 items-center px-3 py-2 text-lg font-medium text-center  hover:bg-[#0ea5e9] hover:text-gray-800 ">
            Deposit SHM
            </button>
          </Link>
        </div>
      
      </div>


         
      
    </div>
  );
}
