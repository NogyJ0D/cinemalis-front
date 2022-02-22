import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'
import axiosRequest from '../../services/axiosRequest'

const MyReviews = ({ userRole }) => {
  const [store, dispatch] = useContext(GlobalContext)
  const { user } = store
  const [myMovies, setMyMovies] = useState([])

  useEffect(async () => {
    if (user.role >= 2) {
      const response = await axiosRequest(`https://cinemalis-342015.rj.r.appspot.com/movies/editor/${user.id}`)
      response.fail
        ? window.alert('Error de mis películas.')
        : setMyMovies(response)
    }
  }, [])

  return (
    <div className='card'>
      <h3 className='cardTitle'>
        Mis películas
      </h3>
      <table className='text-center'>
        <thead>
          <tr className='bg-neutral-800'>
            <th>Nombre</th>
            <th>ID</th>
            <th>Visitar</th>
          </tr>
        </thead>
        <tbody>
          {
          myMovies.length > 0
            ? myMovies.map(movie =>
              <tr
                key={movie._id}
                className='bg-neutral-300 text-black border-b border-black'
              >
                <td>{movie.name}</td>
                <td>{movie._id}</td>
                <td><Link to={`/movies/${movie._id}`}>Click</Link></td>
              </tr>)
            : <tr className='text-2xl font-bold text-center'><td>Sin películas</td></tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default MyReviews
