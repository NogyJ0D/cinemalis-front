import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import axiosRequest from '../../services/axiosRequest'
import UpdateReview from './UpdateReview'

const MyReviews = ({ userRole }) => {
  const [store, dispatch] = useContext(GlobalContext)
  const { user } = store
  const [myReviews, setMyReviews] = useState([])

  useEffect(async () => {
    const response = await axiosRequest(`https://cinemalis-342015.rj.r.appspot.com/reviews/get/userId/${user.id}`)
    response.fail
      ? window.alert('Error de reviews')
      : setMyReviews(response)
  }, [])

  return (
    <div className='card'>
      <h3 className='cardTitle'>
        Mis reseñas
      </h3>
      <div className='flex flex-col'>
        {
          myReviews.length > 0
            ? myReviews.map(review => <UpdateReview key={review._id} reviewId={review._id} movieId={review.movieId} movieName={review.movieName} text={review.text} rating={review.rating} date={review.date} userId={review.userIdn} />)
            : <h3 className='text-2xl font-bold text-center'>Sin reseñas</h3>
        }
      </div>
    </div>
  )
}

export default MyReviews
