import React from 'react'

export default function ComingSoon() {
  return (
    <div className='p-8 flex items-center justify-center text-white w-full relative border-t'>
      <div className='rounded-lg shadow-md'>
        <div className='text-white '>
          <div className='flex flex-col items-center justify-center'>
            <div className='absolute -top-4 text-center bg-black'><p className='text-xl text-green-200'>Coming Soon</p></div>
            <div className='flex justify-around'>
              <div className='m-4 flex flex-col items-center'> 
                <h1>Step-1: </h1>
                <p className='text-center'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli</p>
              </div>
              <div className='m-4 flex flex-col items-center'>
                <h1>Step-2: </h1>
                <p className='text-center'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli</p>
              </div>
              <div className='m-4 flex flex-col items-center'>
                <h1>Step-3: </h1>
                <p className='text-center'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli</p>
              </div>
            </div>
            <div className='text-center w-[80%] mt-4'>
              <input className='w-full rounded-md bg-gray-900 border border-black text-center m-4 h-10' type='text' placeholder='Type your NFT URL here' />
              <button className=''>Buy Now Pay Later</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
