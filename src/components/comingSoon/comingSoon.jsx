import React from 'react'

export default function ComingSoon() {
  return (
    <div className='flex items-center justify-center h-screen text-white'>
      <div className='max-w-lg p-4 rounded-lg shadow-md'>
        <div className='text-white m-8 white-glassmorphism relative'>
          <div className='flex flex-col items-center justify-center'>
            <div className='absolute -top-4 text-center'>Coming Soon!!</div>
            <div className='flex justify-around'>
              <div className='m-8'>first</div>
              <div className='m-8'>first</div>
              <div className='m-8'>first</div>
            </div>
            <div className='text-center'>
              <input type='text' />
            </div>
            <div className='text-center'>
              <button>Stake</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
