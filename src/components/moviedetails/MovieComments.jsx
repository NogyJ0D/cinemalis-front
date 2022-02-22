import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import axiosRequest from '../../services/axiosRequest'
import CardReview from './CardReview'
import NewReview from './NewReview'

const MovieComments = ({ id }) => {
  const [store, dispatch] = useContext(GlobalContext)
  const { user } = store

  const [reviews, setReviews] = useState({})

  useEffect(async () => {
    const response = await axiosRequest(`https://cinemalis-342015.rj.r.appspot.com/reviews/get/movieId/${id}`, 'GET')
    response.success === false
      ? window.alert('Error')
      : setReviews(response)
  }, [])

  return (
    <div className='bg-black bg-opacity-80 m-8 p-8 text-white flex flex-col gap-4'>
      {user?.userName ? <><NewReview /> <hr /></> : ''}
      {reviews.length > 0
        ? reviews.map((el) => {
            return <CardReview key={el._id} userName={el.userName} text={el.text} rating={el.rating} date={el.date} />
          })
        : <h2 className='text-5xl'>Sin comentarios...</h2>}
    </div>
  )
}

export default MovieComments
