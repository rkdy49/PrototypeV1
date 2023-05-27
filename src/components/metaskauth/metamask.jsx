import { AiOutlineClose } from 'react-icons/ai'
import React, { useState, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext/UserContext'
const userImage = require('../../assets/user.jpg')

const MetaMaskAuthButton = () => {
  const { user, setUser } = useContext(UserContext)
  const [isConnected, setIsConnected] = useState(false)
  const [userId, setUserId] = useState('')
  const [signature, setSignature] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [toggleMenu, setToggleMenu] = React.useState(false)

  const dropdownRef = useRef(null)

  const handleMenuToggle = () => {
    console.log(menuOpen)
    setMenuOpen(!menuOpen)
  }

  const handleViewProfile = () => {}
  const sliceIt = (address) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

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
        console.log('signature', signature)

        setIsConnected(true)
        console.log(isConnected)
        // Set the user information in the UserContext
        setUser({ id: userId })
        console.log('user is:', user)
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
  const NavbarItem = ({ title, classProps }) => {
    return <li className={`mx-4  cursor-pointer ${classProps}`}>{title}</li>
  }
  return (
    <div className=''>
      {isConnected ? (
        <>
          {!toggleMenu && (
            <div
              className='flex flex-row cursor:pointer'
              onClick={() => setToggleMenu(true)}
            >
              <p className='text-white text-xl'>{sliceIt(userId)}</p>
              <img src={userImage} alt='' className='w-12 rounded-full' />
            </div>
          )}
          {toggleMenu && (
            <ul
              className='z-10 fixed top-0 -right-2 p-3 w-[70w] h-screen shadow-2xl 
              flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
            >
              <>
                <li className='text-xl w-full my-2'>
                  <AiOutlineClose onClick={() => setToggleMenu(false)} />
                </li>
                <div
                  className='flex flex-row cursor-pointer items-center'
                  onClick={() => setToggleMenu(true)}
                >
                  <p className='text-white text-xl mx-8'>
                    {sliceIt(userId)}
                  </p>
                  <img src={userImage} alt='' className='w-12 rounded-full' />
                </div>
                <p className='cursor-pointer' onClick={disconnectFromMetaMask}>
                  Disconnect Wallet
                </p>
                <Link to={`/profile/${user}`}>
                  <p className='cursor-pointer'>User Profile</p>
                </Link>
              </>
            </ul>
          )}
          {menuOpen && <div className='text-white'>hidden</div>}
        </>
      ) : (
        <button
          onClick={connectAndSign}
          className='inline-flex items-center px-3 py-2 text-lg font-medium text-center text-black border-2 border-black bg-gradient-to-r  from-gray-800 to-green-200 '
        >
          Connect
        </button>
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
