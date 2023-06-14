import React from 'react'

export default function StakingPage() {
  const [active, setActive] = React.useState('overview')

  return (
    <div className='text-white mt-20'>
      <div className='flex justify-center'>
        <div
          className={`m-4  p-4 ${
            active === 'overview'
              ? 'bg-slate-700 rounded-xl'
              : 'white-glassmorphism'
          }`}
          onClick={() => {
            setActive('overview')
          }}
        >
          overview
        </div>

        <div
          className={`m-4  p-4 ${
            active === 'deposit'
              ? 'bg-slate-700 rounded-xl'
              : 'white-glassmorphism'
          }`}
          onClick={() => {
            setActive('deposit')
          }}
        >
          deposit
        </div>
        <div
          className={`m-4  p-4 ${
            active === 'withdraw'
              ? 'bg-slate-700 rounded-xl'
              : 'white-glassmorphism'
          }`}
          onClick={() => {
            setActive('withdraw')
          }}
        >
          withdraw
        </div>
      </div>
      {active === 'overview' && (
        <div className='flex flex-col'>
          <div className='flex justify-center'>
            <div className='m-4 '>current deposit</div>
            <div className='m-4 '>claimable rewards</div>
          </div>
          <div className='flex justify-center'>
            <div className='m-4'> total liquidity</div>
            <div className='m-4'>your share</div>
            <div className='m-4'>utilization</div>
          </div>
          <div className='flex justify-center'>
            <div className='m-4'> total deposit</div>
            <div className='m-4'>total withdrawl</div>
            <div className='m-4'>total earning</div>
          </div>
        </div>
      )}
      {active === 'deposit' && (
        <div className='flex flex-col items-center'>
          <div className='flex border border-white w-1/2 justify-between p-4 m-4 rounded-md'>
            <div className='flex flex-col'>
              <div>Amount</div>
              <div>
                <input type='text' placeholder='0.0' className='text-black' />
              </div>
            </div>
            <div className='flex flex-col'>
              <div>Balance: 0</div>
              <div>max 0 Eth</div>
            </div>
          </div>
          <div className='flex bg-slate-900 w-1/2 justify-center p-8 m-4 rounded-md'>
            Deposit ETH to the reserve pool and start earning interest.
          </div>
          <div className='flex'>
            <div
              className='text-black border-2 border-black bg-gradient-to-r  from-gray-800 to-green-200 m-4 p-2 cursor-pointer'
              onClick={() => {
                setActive('overview')
              }}
            >
              Back to overview
            </div>
            <div className='text-black border-2 border-black bg-gradient-to-r  from-gray-800 to-green-200 m-4 p-2 cursor-pointer'>
              Deposit
            </div>
          </div>
        </div>
      )}
      {active === 'withdraw' && (
        <div className='flex flex-col items-center'>
          <div className='flex border border-white w-1/2 justify-between p-4 m-4 rounded-md'>
            <div className='flex flex-col'>
              <div>Amount</div>
              <div>
                <input type='text' placeholder='0.0' className='text-black' />
              </div>
            </div>
            <div className='flex flex-col'>
              <div>Balance: 0</div>
              <div>max 0 Eth</div>
            </div>
          </div>
          <div className='flex bg-slate-900 w-1/2 justify-center p-8 m-4 rounded-md'>
            Withdraw your ETH deposits from the reserve pool.
          </div>
          <div className='flex bg-slate-500 w-1/2 justify-center p-4 m-4 rounded-md'>
            <input type="checkbox" name="" id="" className='mx-4'/>
            Withdraw all - Withdraw total deposited amount from BEND
          </div>
          <div className='flex'>
            <div
              className='text-black border-2 border-black bg-gradient-to-r  from-gray-800 to-green-200 m-4 p-2 cursor-pointer'
              onClick={() => {
                setActive('overview')
              }}
            >
              Back to overview
            </div>
            <div className='text-black border-2 border-black bg-gradient-to-r  from-gray-800 to-green-200 m-4 p-2 cursor-pointer'>
              Withdraw
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
