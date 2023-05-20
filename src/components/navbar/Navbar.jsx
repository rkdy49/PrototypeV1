import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import Moralis from "moralis-v1";
import MetaMaskAuthButton from "../metaskauth/metamask";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <Link to="/">
            <h1>
              GearFi
              <sup style={{ color: "#0773ef" }}>Testnet</sup>
            </h1>
          </Link>
        </div>
        <div className="navbar-links_container">
          
          <a href="https://armilaadarshs-organization.gitbook.io/gearfi_litepaper/welcome-to-gear_fi/abstract"> 
            <p>Docs</p>
          </a>
            
         

         <a href="https://discord.com/invite/PJp2DbX64U"> 
            <p>Discord</p>
          </a>
           
          <MetaMaskAuthButton/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
