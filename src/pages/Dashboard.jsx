import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { types } from '../reducers/globalReducer'

import AddMovie from '../components/dashboard/AddMovie'
import GetAllUsers from '../components/dashboard/GetAllUsers'
import MyReviews from '../components/dashboard/MyReviews'
import MyMovies from '../components/dashboard/MyMovies'
import ChangeRole from '../components/dashboard/ChangeRole'
import axiosRequest from '../services/axiosRequest'

const Dashboard = () => {
  const [store, dispatch] = useContext(GlobalContext)
  const { user } = store
  const navigate = useNavigate()

  useEffect(() => {
    user?.userName ? <></> : navigate('/')
  }, [])

  const handleLogoutButton = async () => {
    const response = await axiosRequest('https://cinemalis-342015.rj.r.appspot.com/auth/logout', 'POST')
    if (response.loggedOut) {
      navigate('/')
      return dispatch({
        type: types.logout,
        payload: {}
      })
    }
  }

  return (
    <div className='grid grid-cols-2 m-5 gap-8 text-white'>
      <div className='col-span-2 flex gap-2 px-8 py-2 bg-black bg-opacity-80 rounded-xl'>
        <h4 className='text-3xl font-bold border rounded px-2'>{user.userName}</h4>
        <h4 className='text-3xl font-bold border rounded px-2'>{user.email}</h4>
        <h4 className='text-3xl font-bold border rounded px-2'>Rol: {
          user.role === 1
            ? 'Usuario'
            : user.role === 2
              ? 'Editor'
              : user.role === 3
                ? 'Admin'
                : 'Owner'
        }
        </h4>
        <button className='button ml-auto' onClick={handleLogoutButton}>Cerrar sesión</button>
      </div>
      {
        user.role >= 2
          ? <div className='grid grid-cols-2 col-span-2 gap-8'>
            <AddMovie userRole={user.role} />
            <MyMovies userRole={user.role} />
            </div>
          : <></>
      }
      {
        user.role >= 3
          ? <div className='col-span-2 grid grid-cols-2 gap-8'>
            <ChangeRole userRole={user.role} />
            <GetAllUsers userRole={user.role} />
            </div>
          : <></>
        }
      <MyReviews userRole={user.role} />

    </div>
  )
}

export default Dashboard
