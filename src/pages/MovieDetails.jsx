import React, { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosRequest from '../services/axiosRequest'
import { GlobalContext } from '../context/GlobalContext'
import { types } from '../reducers/globalReducer'
import { Knob } from 'primereact/knob'
import MovieComments from '../components/moviedetails/MovieComments'

const MovieDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [store, dispatch] = useContext(GlobalContext)
  const { user, movie } = store

  useEffect(async () => {
    const response = await axiosRequest(`https://cinemalis-342015.rj.r.appspot.com/movies/${id}`, 'GET')
    if (response.success === false) {
      navigate('/')
      dispatch({ type: types.resetMovie, payload: {} })
      window.alert('La película no existe')
    } else {
      dispatch({
        type: types.setMovie,
        payload: { id: response._id, banner: response.banner, description: response.description, name: response.name, poster: response.poster, year: response.year, rating: response.rating, editor: response.editor }
      })
    }
  }, [])

  return (
    <>
      <div className='text-white bg-black bg-opacity-80 m-8 p-4 grid grid-cols-2 shadow-sm'>
        <img src={movie.banner} alt={movie.name} className='min-w-full place-self-center' />
        <div className='flex flex-col p-4 mx-4 bg-neutral-700 bg-opacity-30'>
          <div>
            <h4 className='font-bold text-4xl'>{movie.name}</h4>
            <h4 className='text-lg'>{movie.description}</h4>
          </div>
          <div className='flex justify-between items-center'>
            <Link to={`/movies/edit/${movie.id}`} className={movie.editor === user?.id ? 'block button' : 'hidden'}>Editar</Link>
            <h4 className='font-bold text-xl'>Lanzamiento: {movie.year}</h4>
            <div className='flex flex-col items-center w-max px-2'>
              <h5 className='font-semibold text-lg'>Puntuación Cinécritic</h5>
              <Knob value={movie.rating ? movie.rating : 0} readOnly min={0} max={5} valueColor='OliveDrab' rangeColor='FireBrick' textColor='White' size={150} />
            </div>
          </div>
        </div>
      </div>
      <MovieComments id={id} />
    </>
  )
}

export default MovieDetails

/*

  Ir a la pelicula por id en el parametro
  Buscar el id en la database y traer toda la información
  useEffect
    HECHO

  Actualizar el rating: hacer un axios a la ruta put del id pasando el rating

  Usar un Knob readonly de prime para mostrar el rating
*/
