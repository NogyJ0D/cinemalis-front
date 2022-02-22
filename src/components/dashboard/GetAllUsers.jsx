import React, { useEffect, useState } from 'react'
import axiosRequest from '../../services/axiosRequest'

const GetAllUsers = ({ userRole }) => {
  const [users, setUsers] = useState([])

  useEffect(async () => {
    if (userRole >= 3) {
      const response = await axiosRequest('https://cinemalis-342015.rj.r.appspot.com/users', 'GET')
      response.fail
        ? window.alert('Error de getallusers')
        : setUsers(response)
    }
  }, [])

  return (
    <div className='card'>
      <h3 className='cardTitle'>
        Ver usuarios
      </h3>
      <table className='text-center'>
        <thead>
          <tr className='bg-neutral-800'>
            <th>Usuario</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length > 0
              ? users.map(user =>
                <tr
                  key={user._id}
                  className='bg-neutral-300 text-black border-b border-black'
                >
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user._id}</td>
                </tr>
                )
              : <tr><td>Cargando...</td></tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default GetAllUsers
