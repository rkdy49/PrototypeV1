import { useEffect, useState } from 'react'

const API = 'https://jsonplaceholder.typicode.com/users'

const Chart = () => {
  const [users, setUsers] = useState([]) 
  
  const UserData = (users) => {
    console.log(users)
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
  }, [])

  useEffect(() => {
    console.log('users now:', users);
  }, [users]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Chart