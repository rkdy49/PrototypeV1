import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import Moralis from "moralis-v1";

const Navbar = () => {
  const { authenticate, enableWeb3, logout } = useMoralis();
  const { isAuthenticated, user } = useMoralis();

  const [authError, setAuthError] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function handleAuth() {
    console.log("running Auth");

    try {
      setAuthError(null);
      setIsAuthenticating(true);

      // Enable web3 to get user address and chain
      await enableWeb3({ throwOnError: true, provider: "metamask" });
      const { account, chainId } = Moralis;

      if (!account) {
        throw new Error(
          "Connecting to chain failed, as no connected account was found"
        );
      }
      if (!chainId) {
        throw new Error(
          "Connecting to chain failed, as no connected chain was found"
        );
      }

      // Get message to sign from the auth api
      const { message } = await Moralis.Cloud.run("requestMessage", {
        address: account,
        chain: parseInt(chainId, 16),
        networkType: "evm",
      });

      // Authenticate and login via parse
      await authenticate({
        signingMessage: message,
        throwOnError: true,
      });
    } catch (error) {
      setAuthError(error);
    } finally {
      setIsAuthenticating(false);
    }
    console.log(user);
  }

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          {/* <img src={logo} alt="logo" /> */}
          <Link to="/">
            <h1>
              GearFi
              <sup style={{ color: "#0773ef" }}>Testnet</sup>
            </h1>
          </Link>
        </div>
        <div className="navbar-links_container">
          {!isAuthenticated ? (
            <button
              type="button"
              className="primary-btn"
              onClick={() => handleAuth()}
            >
              Connect Wallet
            </button>
          ) : (
            <div className="My-profile-container">
              <button onClick={logout}>Logout</button>

              <Link to={`/profile/${user.id}`}>
                <p>My Profile</p>
              </Link>
            </div>
          )}

          <a href="https://armilaadarshs-organization.gitbook.io/gearfi_litepaper/welcome-to-gear_fi/abstract"> 
            <p>Docs</p>
          </a>
            
         

         <a href="https://discord.com/invite/PJp2DbX64U"> 
            <p>Discord</p>
          </a>
           
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
