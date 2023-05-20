import { useEffect, useState } from 'react'

const API = 'https://jsonplaceholder.typicode.com/users'

const Chart = () => {
  let [users, setUsers] = useState() 
  
  
  const UserData = ({users}) => {
    console.log("label 1", users)
    return (
      <>
        {users.map((curUser) => {
          const { id, name, email } = curUser
          return (
            <tr>
              <th>{id}</th>
              <th>{name}</th>
              <th>{email}</th>
            </tr>
          )
        })}
      </>
    )
  }
  
  const fetchUser = async () => {
    try {
      const res = await fetch(API)
      const data = await res.json()
      console.log('data', data)

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
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            {/* <th>Address</th> */}
          </tr>
        </thead>
        {console.log("label 2", users)}
        <tbody>
        {users?<UserData users={users} key='1'/>:''}
      </tbody>
      </table>
    </>
  )
}

export default Chart
