import { useEffect, useState } from 'react'
import data from './data.json'
import nft from '../../assets/nft.jpg'

console.log('prime: ', data)

const API = 'https://jsonplaceholder.typicode.com/users'

const Chart = () => {
  let [users, setUsers] = useState()

  const UserData = ({ users }) => {
    console.log('label 1', users)
    return (
      <>
        {users.map((curUser) => {
          const {
            COLLECTION,
            FLOOR_PRICE,
            oneD_CHANGE,
            sevenD_CHANGE,
            oneD_VOLUME,
            sevenD_VOLUME,
            OWNERS,
            SUPPLY,
          } = curUser
          const red = oneD_CHANGE<0;
          return (
            <tr>
              <th className='flex flex-row m-2'>
                <img src={nft} className='w-8 mx-4 rounded-full' />
                {COLLECTION}
              </th>
              <th>{FLOOR_PRICE}</th>
              <th className={oneD_CHANGE<0?'text-orange-700':'text-white'}>{oneD_CHANGE}</th>
              <th>{sevenD_CHANGE}</th>
              <th>{oneD_VOLUME}</th>
              <th>{sevenD_VOLUME}</th>
              <th>{OWNERS}</th>
              <th>{SUPPLY}</th>
            </tr>
          )
        })}
      </>
    )
  }

  const fetchUser = async () => {
    try {
      if (data.length > 0) {
        console.log('data here is : ', data)
        setUsers(data)
        console.log('user now: ', users)
      }
      console.log(users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [users])

  return (
    <>
      <table className='w-full m-4'>
        <thead>
          <tr>
            <th className='p-2'>COLLECTION</th>
            <th className='p-4'>FLOOR PRICE</th>
            <th className='p-4'>1D CHANGE</th>
            <th className='p-4'>7D CHANGE</th>
            <th className='p-4'>1D VOLUME</th>
            <th className='p-4'>7D VOLUME</th>
            <th className='p-4'>OWNERS</th>
            <th className='p-4'>SUPPLY</th>
          </tr>
        </thead>
        {console.log('label 2', users)}
        <tbody>{users ? <UserData users={users} key='1' /> : ''}</tbody>
      </table>
    </>
  )
}

export default Chart
