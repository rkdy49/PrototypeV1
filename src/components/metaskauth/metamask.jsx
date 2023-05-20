import React, { useState, useContext } from 'react';
import { UserContext } from "../UserContext/UserContext";

const MetaMaskAuthButton = () => {
  const { setUser } = useContext(UserContext);
  const [isConnected, setIsConnected] = useState(false);
  const [userId, setUserId] = useState('');
  const [signature, setSignature] = useState('');

  const connectAndSign = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request MetaMask user's permission to connect
        await window.ethereum.enable();
        // User is now connected to MetaMask
       
        // Get the connected user's address
        const address = window.ethereum.selectedAddress;
        setUserId(address);
        // Generate a random message to sign
        const message = 'This is a sample message.';
        // Request user's permission to sign the message
        const signedMessage = await window.ethereum.request({
          method: 'personal_sign',
          params: [message, address],
        });
        // Set the signature in the state
        setSignature(signedMessage);
        console.log(signature)

        setIsConnected(true);

        // Set the user information in the UserContext
        setUser({ id: userId });
      } else {
        // MetaMask is not installed, handle the error or prompt the user to install it
        console.error('MetaMask is not installed.');
      }
    } catch (error) {
      // Error occurred during MetaMask authentication or message signing
      setIsConnected(false);
      setUserId('');
      console.error('Error:', error);
    }
  };

  const disconnectFromMetaMask = () => {
    setIsConnected(false);
    setUserId('');
    // Perform any additional cleanup or state reset here
  };

  return (
    <div>
      {isConnected ? (
        <div>
          <p>my profile
          <button onClick={disconnectFromMetaMask}>Disconnect</button>
          </p>
        </div>
      ) : (
        <button onClick={connectAndSign}>Connect</button>
      
      )}
    </div>
  );
};

export default MetaMaskAuthButton;
