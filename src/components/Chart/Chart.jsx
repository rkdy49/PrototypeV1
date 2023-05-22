import { useEffect, useState } from 'react'
import data from './data.json'

console.log("prime: ", data)

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
          return (
            <tr>
              <th>{COLLECTION}</th>
              <th>{FLOOR_PRICE}</th>
              <th>{oneD_CHANGE}</th>
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
      // const res = await fetch(API)
      // const data = await res.json()
      // console.log('data', data)

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
      <table>
        <thead>
          <tr>
            <th>COLLECTION</th>
            <th>FLOOR PRICE</th>
            <th>1D CHANGE</th>
            <th>7D CHANGE</th>
            1D VOLUME
            <th>7D VOLUME</th>
            <th>OWNERS</th>
            <th>SUPPLY</th>
          </tr>
        </thead>
        {console.log('label 2', users)}
        <tbody>{users ? <UserData users={users} key='1' /> : ''}</tbody>
      </table>
    </>
  )
}

export default Chart