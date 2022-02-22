import React from 'react'
import { Link } from 'react-router-dom'

const MovieDisplay = ({ id, name, poster, year, rating }) => {
  return (
    <Link to={`/movies/${id}`} className='w-64 bg-black bg-opacity-50 shadow-xl p-4'>
      <div className='flex flex-col'>
        <img src={poster} alt={name} className='h-80 mx-auto' />
        <h3 className='font-bold text-2xl text-center'>{name}</h3>
        <div className='text-center w-full'>
          {rating ? <p className='font-semibold text-lg border-t-4 border-sky-600'>Puntuación: {rating}</p> : ''}
          {year ? <p>({year})</p> : ''}
        </div>
      </div>
    </Link>
  )
}

export default MovieDisplay
