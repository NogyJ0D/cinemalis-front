import React from 'react'
import { format } from 'timeago.js'
import RatingStars from '../RatingStars'

const CardReview = ({ userName, text, rating, date }) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-white font-bold text-xl flex gap-4 items-center'>
        <h2 className='border rounded w-max px-2 py-1'>{userName}</h2>
        <RatingStars rating={rating} />
        <h4 className='border rounded px-2 py-1 flex gap-4'>{format(date, 'es')}</h4>
      </div>
      <textarea readOnly value={text} className='text-black outline-none rounded-xl p-4' />
    </div>
  )
}

export default CardReview
