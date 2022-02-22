import React from 'react'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'
import dateLocale from '../../services/dateLocale'
import RatingStars from '../RatingStars'

const Review = ({ movieId, userName, movie, rating, text, time }) => {
  return (
    <div className='p-2 rounded-lg flex flex-col gap-2 border bg-stone-900 bg-opacity-50 w-full'>
      <div className='flex gap-2'>
        <Link className='border rounded w-max px-2 py-1' to={`/movies/${movieId}`}>{movie}</Link>
      </div>
      <p className='bg-white text-black p-2 rounded'>{text}</p>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <h4 className='border rounded w-max px-2 py-1'>{userName}</h4>
          <RatingStars rating={rating} />
        </div>
        <p className=''>{format(time, 'es')}</p>
      </div>
    </div>
  )
}

export default Review
