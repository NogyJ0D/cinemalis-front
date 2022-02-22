import React, { useEffect, useState } from 'react'
import axiosRequest from '../services/axiosRequest'
import MovieDisplay from '../components/MovieDisplay'

const Ranking = () => {
  const [bestMovies, setBestMovies] = useState([])
  const [worstMovies, setWorstMovies] = useState([])

  useEffect(async () => {
    const bestResponse = await axiosRequest('https://cinemalis-342015.rj.r.appspot.com/movies/ranking/-1', 'GET')
    bestResponse.success === false
      ? window.alert('Error')
      : setBestMovies(bestResponse)

    const worstResponse = await axiosRequest('https://cinemalis-342015.rj.r.appspot.com/movies/ranking/1', 'GET')
    worstResponse.success === false
      ? window.alert('Error')
      : setWorstMovies(worstResponse)
  }, [])

  return (
    <div className='text-white grid grid-cols-2 gap-10 mx-auto w-max'>
      <div>
        <h2 className='bg-black bg-opacity-50 w-fit px-16 py-2 text-white font-bold text-2xl mx-auto my-4'>Mejor puntuación</h2>
        <div className='grid grid-cols-2 gap-4 auto-rows-fr'>
          {
          bestMovies.length > 0
            ? bestMovies.map(movie =>
              <MovieDisplay
                key={movie._id}
                id={movie._id}
                name={movie.name}
                poster={movie.poster}
                year={movie.year}
                rating={movie.rating}
              />
              )
            : <h2 className='text-5xl'>Cargando lista...</h2>
        }
        </div>
      </div>
      <div>
        <h2 className='bg-black bg-opacity-50 w-fit px-16 py-2 text-white font-bold text-2xl mx-auto my-4'>Peor puntuación</h2>
        <div className='grid grid-cols-2 gap-4 auto-rows-fr'>
          {
          worstMovies.length > 0
            ? worstMovies.map(movie => { return <MovieDisplay key={movie._id} id={movie._id} name={movie.name} poster={movie.poster} year={movie.year} rating={movie.rating} /> })
            : <h2 className='text-5xl'>Cargando lista...</h2>
        }
        </div>
      </div>
    </div>
  )
}

export default Ranking
