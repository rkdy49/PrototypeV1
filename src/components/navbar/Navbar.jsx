import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import Moralis from "moralis-v1";

const Menu = () => (
  <>
    <Link to="/">
      <p>Explore</p>{" "}
    </Link>
    <p>My Items</p>
  </>
);

const Navbar = () => {
  // const { authenticate, enableWeb3 } = useMoralis();
  // const { isAuthenticated, user, initialize } = useMoralis();

  // const [authError, setAuthError] = useState(null);
  // const [isAuthenticating, setIsAuthenticating] = useState(false);

  // const handleAuth = async () => {
  //   // initialize();

  //   console.log("running Auth");

  //   try {
  //     setAuthError(null);
  //     setIsAuthenticating(true);

  //     // Enable web3 to get user address and chain
  //     await enableWeb3({ throwOnError: true, provider: "metamask" });
  //     const { account, chainId } = Moralis;

  //     if (!account) {
  //       throw new Error(
  //         "Connecting to chain failed, as no connected account was found"
  //       );
  //     }
  //     if (!chainId) {
  //       throw new Error(
  //         "Connecting to chain failed, as no connected chain was found"
  //       );
  //     }

  //     // Get message to sign from the auth api
  //     const { message } = await Moralis.Cloud.run("requestMessage", {
  //       address: account,
  //       chain: parseInt(chainId, 16),
  //       networkType: "evm",
  //     });

  //     // Authenticate and login via parse
  //     await authenticate({
  //       signingMessage: message,
  //       throwOnError: true,
  //     });
  //   } catch (error) {
  //     setAuthError(error);
  //   } finally {
  //     setIsAuthenticating(false);
  //   }
  //   console.log(user);
  // };
  async function handleAuth(provider) {
    await Moralis.enableWeb3({
      throwOnError: true,
      provider,
    });

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

    const { message } = await Moralis.Cloud.run("requestMessage", {
      address: account,
      chain: parseInt(chainId, 16),
      network: "evm",
    });

    await Moralis.authenticate({
      signingMessage: message,
      throwOnError: true,
    }).then((user) => {
      console.log(user);
    });
  }

  async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
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
          <button
            type="button"
            className="primary-btn"
            onClick={() => handleAuth("metamask")}
          >
            Connect Wallet
          </button>

          <Link to={`/profile/`}>
            <p>My Profile</p>
          </Link>

          <button type="button" className="primary-btn" onClick={logOut}>
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
