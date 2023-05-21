import React, { useState, useContext, useRef } from 'react'
import { UserContext } from '../UserContext/UserContext'
const image = require('../../assets/images.png')

const MetaMaskAuthButton = () => {
  const { setUser } = useContext(UserContext)
  const [isConnected, setIsConnected] = useState(false)
  const [userId, setUserId] = useState('')
  const [signature, setSignature] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  const handleMenuHover = () => {
    setMenuOpen(true)
  }

  const handleMenuLeave = () => {
    setMenuOpen(false)
  }

  const handleViewProfile = () => {}

  const connectAndSign = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request MetaMask user's permission to connect
        await window.ethereum.enable()
        // User is now connected to MetaMask

        // Get the connected user's address
        const address = window.ethereum.selectedAddress
        setUserId(address)
        console.log('ethereum address', address)
        // Generate a random message to sign
        const message = 'This is a sample message.'
        // Request user's permission to sign the message
        const signedMessage = await window.ethereum.request({
          method: 'personal_sign',
          params: [message, address],
        })
        // Set the signature in the state
        setSignature(signedMessage)
        console.log('signature ', signature)

        setIsConnected(true)
        console.log(isConnected)
        // Set the user information in the UserContext
        setUser({ id: userId })
      } else {
        // MetaMask is not installed, handle the error or prompt the user to install it
        console.error('MetaMask is not installed.')
      }
    } catch (error) {
      // Error occurred during MetaMask authentication or message signing
      setIsConnected(false)
      setUserId('')
      console.error('Error:', error)
    }
  }

  const disconnectFromMetaMask = () => {
    setIsConnected(false)
    setUserId('')
    // Perform any additional cleanup or state reset here
  }

  return (
    <div>
      {isConnected ? (
        <>
          <button
            onMouseEnter={handleMenuHover}
            className='text-white mx-4 list-none font-medium text-3xl capitalize mr-1 cursor-pointer'
          >
            Menu
          </button>
          {menuOpen && (
            <div
              ref={dropdownRef}
              onMouseLeave={handleMenuLeave}
              className='absolute mt-2 py-2 w-40 bg-white rounded shadow-lg'
            >
              <button
                onClick={handleViewProfile}
                className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
              >
                View Profile
              </button>
              <button
                onClick={disconnectFromMetaMask}
                className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
              >
                Disconnect Wallet
              </button>
            </div>
          )}
        </>
      ) : (
        <button onClick={connectAndSign}>Connect</button>
      )}
    </div>
  )
}

export default MetaMaskAuthButton

{
  /* <p className="my-auto mx-4 text-white font-medium text-3xl list-none capitalize mr-1 cursor-pointer">
        my profile
        <button onClick={disconnectFromMetaMask}>Disconnect</button>
      </p> */
}
