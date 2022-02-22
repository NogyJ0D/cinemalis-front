const RatingStars = ({ rating, setRating }) => {
  return (
    <div className='border rounded px-2 py-1.5 flex gap-3 items-center'>
      <svg onClick={() => setRating ? setRating(1) : ''} className={rating >= 1 ? 'fill-yellow-400 cursor-pointer' : 'fill-white cursor-pointer'} xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
        <path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' />
      </svg>
      <svg onClick={() => setRating ? setRating(2) : ''} className={rating >= 2 ? 'fill-yellow-400 cursor-pointer' : 'fill-white cursor-pointer'} xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
        <path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' />
      </svg>
      <svg onClick={() => setRating ? setRating(3) : ''} className={rating >= 3 ? 'fill-yellow-400 cursor-pointer' : 'fill-white cursor-pointer'} xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
        <path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' />
      </svg>
      <svg onClick={() => setRating ? setRating(4) : ''} className={rating >= 4 ? 'fill-yellow-400 cursor-pointer' : 'fill-white cursor-pointer'} xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
        <path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' />
      </svg>
      <svg onClick={() => setRating ? setRating(5) : ''} className={rating === 5 ? 'fill-yellow-400 cursor-pointer' : 'fill-white cursor-pointer'} xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
        <path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' />
      </svg>
      <p>({rating})</p>
    </div>
  )
}

export default RatingStars
