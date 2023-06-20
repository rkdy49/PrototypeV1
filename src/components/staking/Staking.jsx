import React from "react";
import nft_1 from "../../assets/nft_1.png";

export default function Staking() {
  return (
    <div className="m-12 rounded-2xl flex  md:flex-row flex-col justify-evenly  white-glassmorphism items-center">
     
      <div className="flex-col items-center">
        <div className="flex my-4 justify-center">
          Total value locked: $130000000
        </div>
        <div className="flex my-4 justify-items-center">
          <div className="m-4">
            <div>BAYC APY</div>
            <div>132.60%</div>
          </div>
          <div className="m-4">
            <div>BAYC APY</div>
            <div>132.60%</div>
          </div>
          <div className="m-4">
            <div>BAYC APY</div>
            <div>132.60%</div>
          </div>
          <div className="m-4">
            <div>BAYC APY</div>
            <div>132.60%</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
       
          <p className=""> Experience Pool-based Ape Staking! </p>
          <button>Stake Now</button>
       
      </div>
      
    </div>
  );
}
