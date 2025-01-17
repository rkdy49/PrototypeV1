import React from 'react'

export default function StakingPage() {
  const [active, setActive] = React.useState('deposit')

  return (
    <div className='text-white mt-20 h-[90vh]'>
      <div className='flex justify-center'>

        <div
          className={`m-4  p-4 ${
            active === 'deposit'
              ? 'bg-slate-700 rounded-xl'
              : 'white-glassmorphism'
          } 
          cursor-pointer`}
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
          } 
          cursor-pointer`}
          onClick={() => {
            setActive('withdraw')
          }}
        >
          withdraw
        </div>
      </div>
      
      {active === 'deposit' && (
        <div className='flex flex-col items-center'>
          <div className='flex border border-white w-1/2 justify-between p-4 m-4 rounded-md'>
            <div className='flex flex-col '>
              <div>Amount</div>
              <div>
                <input type='text' placeholder='0.0' className='text-black bg-transparent border-white' />
              </div>
            </div>
            <div className='flex flex-col'>
              <div>Balance: 0</div>
              <div>max 0 Eth</div>
            </div>
          </div>
          <div className='flex bg-slate-900 w-1/2 justify-center p-8 m-4 rounded-md'>
            Deposit SHM to GearFi Vault.
          </div>
          <div className='flex'>
        
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
                <input type='text' placeholder='0.0' className='text-black bg-transparent' />
              </div>
            </div>
            <div className='flex flex-col'>
              <div>Balance: 0</div>
              <div>max 0 Eth</div>
            </div>
          </div>
          <div className='flex bg-slate-900 w-1/2 justify-center p-8 m-4 rounded-md'>
            Withdraw your SHM deposits from GearFi.
          </div>
          <div className='flex bg-slate-500 w-1/2 justify-center p-4 m-4 rounded-md'>
            <input type="checkbox" name="" id="" className='mx-4 bg-transparent'/>
            Withdraw all - Withdraw total deposited SHM
          </div>
          <div className='flex'>
            
            <div className='text-black border-2 border-black bg-gradient-to-r  from-gray-800 to-green-200 m-4 p-2 cursor-pointer'>
              Withdraw
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
