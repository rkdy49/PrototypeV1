import React, { useState, useEffect } from 'react'
import earlyAccessImg from '../../assets/EarlyAccess2.png'
import thumbsUpNFT from '../../assets/thumbsUpNft.png'
import axios from 'axios'

export default function EarlyAccess() {
  const [email, setEmail] = useState('')
  const [sentEmail, setSentEmail] = useState(false)

  const sendEmail = () => {
    console.log(email)
    axios.post(`http://localhost:8000/subscriber/`, { email })
    setSentEmail(true)
  }

  const handleInputChange = (event) => {
    setEmail(event.target.value)
  }

  return (
    <div>
      {sentEmail ? (
        <div className='flex justify-around items-center w-5/6 mx-auto m-8'>
          <div className='w-1/3'>
            <img src={thumbsUpNFT} alt='' />
          </div>
          <div className='flex flex-col w-2/3 justify-center items-center'>
            <div className='text-5xl m-4 font-semibold'>Thanks for Subscribing</div>
            <div className='text-xl w-5/6 m-4'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              fugit. Quae asperiores saepe doloremque provident ab voluptatem,
              optio necessitatibus adipisci.
            </div>
          
          </div>
        </div>
      ) : (
        <div className='flex justify-around items-center w-5/6 mx-auto m-8'>
          <div className='w-1/3'>
            <img src={earlyAccessImg} alt='' />
          </div>
          <div className='flex flex-col w-2/3 justify-center items-center'>
            <div className='text-5xl m-4 font-semibold'>Get Early Access</div>
            <div className='text-xl w-5/6 m-4'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              fugit. Quae asperiores saepe doloremque provident ab voluptatem,
              optio necessitatibus adipisci.
            </div>
          
          <div>
            <input
              type='text'
              placeholder='abc@xyz.com'
              className='m-4 text-2xl p-2 w-2/3 rounded-md text-black'
              value={email}
              onChange={handleInputChange}
            />
            <button
              className='m-4 text-2xl p-2 w-2/3 bg-[#ea4c89]'
              onClick={sendEmail}
            >
              Subscribe
            </button>
          </div></div>
        </div>
      )}
    </div>
  )
}
