import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MovieDisplay from '../components/MovieDisplay'
import axiosRequest from '../services/axiosRequest'

const Movies = () => {
  const [movieList, setMovieList] = useState([])

  useEffect(async () => {
    const response = await axiosRequest('https://cinemalis-342015.rj.r.appspot.com/movies/', 'GET')
    response.fail
      ? window.alert('Error, no hay películas.')
      : setMovieList(response)
  }, [])

  return (
    <div>
      <div className='flex gap-8 bg-black bg-opacity-80 mx-8 mt-4 py-2 px-4 text-white font-bold text-xl items-baseline'>
        <h2>Todas las películas ({movieList.length})</h2>
        <Link to='/movies/ranking' className='rounded border-2 px-2'>Ver ranking</Link>
      </div>
      <div className='text-white grid grid-cols-4 mt-4 mx-16 gap-4'>
        {
          movieList.length > 0
            ? movieList.map(movie => { return <MovieDisplay key={movie._id} id={movie._id} name={movie.name} poster={movie.poster} year={movie.year} rating={movie.rating} /> })
            : <h2 className='text-5xl'>Cargando lista...</h2>
        }
      </div>
    </div>
  )
}

export default Movies
