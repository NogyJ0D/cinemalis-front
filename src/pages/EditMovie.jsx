import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import axiosRequest from '../services/axiosRequest'

const EditMovie = () => {
  const { register, handleSubmit } = useForm()
  const [store, dispatch] = useContext(GlobalContext)
  const { user, movie } = store
  const navigate = useNavigate()

  const onSubmit = async ({ name, description, year, rating, banner, poster }) => {
    const response = await axiosRequest(`https://cinemalis-342015.rj.r.appspot.com/movies/${movie.id}/${user.id}`, 'PUT', {
      name, description, year, rating, banner, poster
    })
    response.fail
      ? window.alert('Error de editmovie')
      : window.confirm('¿Desea ir a la página de la película?')
        ? navigate(`/movies/${response._id}`)
        : navigate('/')
  }

  return (
    <div className='card text-white w-max mx-auto'>
      <h3 className='cardTitle'>Editar película</h3>
      <form className='flex flex-col gap-4 p-4' onSubmit={handleSubmit(onSubmit)}>

        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label htmlFor='name' className='inputLabel'>Nombre</label>
          </div>
          <input
            id='name' type='text' className='input'
            {...register('name')} defaultValue={movie.name}
          />
        </div>

        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label htmlFor='description' className='inputLabel'>Descripción</label>
          </div>
          <textarea
            id='description' className='input'
            {...register('description')} defaultValue={movie.description}
          />
        </div>

        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label htmlFor='year' className='inputLabel'>Lanzamiento (dd-mm-aaaa)</label>
          </div>
          <input
            id='year' type='date' className='input'
            {...register('year')} defaultValue={movie.year}
          />
        </div>

        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label htmlFor='rating' className='inputLabel'>Puntuación Cinécritic (0-5)</label>
          </div>
          <input
            id='rating' type='number' step='0.01' className='input' min='0' max='5' defaultValue={movie.rating}
            {...register('rating', {
              min: {
                value: 0,
                message: 'Mínimo 0.'
              },
              max: {
                value: 5,
                message: 'Máximo 5.'
              }
            })
          }
          />
        </div>

        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label htmlFor='banner' className='inputLabel'>Banner url (▭)</label>
          </div>
          <textarea
            id='banner' className='input' defaultValue={movie.banner}
            {...register('banner')
          }
          />
        </div>

        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label htmlFor='poster' className='inputLabel'>Poster url (▯)</label>
          </div>
          <textarea
            id='poster' className='input' defaultValue={movie.poster}
            {...register('poster')
          }
          />
        </div>

        <input
          type='submit'
          className='bg-white p-2 rounded-lg border-2 w-40 border-black text-black cursor-pointer'
          value='Editar'
        />
      </form>
    </div>
  )
}

export default EditMovie
