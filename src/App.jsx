import React, { useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { GlobalContext } from './context/GlobalContext'
import { types } from './reducers/globalReducer'
import axiosRequest from './services/axiosRequest'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import MovieDetails from './pages/MovieDetails'
import Signup from './pages/Signup'
import Movies from './pages/Movies'
import Ranking from './pages/Ranking'
import EditMovie from './pages/EditMovie'

const App = () => {
  const [store, dispatch] = useContext(GlobalContext)

  useEffect(async () => {
    const response = await axiosRequest('https://cinemalis-342015.rj.r.appspot.com/auth/tokenlogin', 'POST')
    if (response.failed) dispatch({ type: types.loginFail })
    else {
      const userData = response.userData
      dispatch({
        type: types.login,
        payload: { userName: userData.userName, email: userData.email, role: userData.role, id: userData.id }
      })
    }
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='/movies'>
          <Route index element={<Movies />} />
          <Route path='ranking' element={<Ranking />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
          <Route path='/movies/edit/:id' element={<EditMovie />} />
        </Route>
        <Route path='*' element={<Navigate replace to='/' />} />
      </Route>
    </Routes>
  )
}

export default App
