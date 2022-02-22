import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext'
import axiosRequest from '../../services/axiosRequest'

const AddMovie = ({ userRole }) => {
  const navigate = useNavigate()
  const [store, dispatch] = useContext(GlobalContext)
  const { user } = store
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async ({ name, description, year, rating, banner, poster }) => {
    if (user.role >= 2) {
      const response = await axiosRequest('https://cinemalis-342015.rj.r.appspot.com/movies/create', 'POST', { name, description, year, rating, banner, poster, editor: user.id })
      response.fail
        ? window.alert('Error de addmovie')
        : window.confirm('¿Desea ir a la página de la película?')
          ? navigate(`/movies/${response._id}`)
          : navigate(0)
    }
  }

  return (
    <div className='card'>
      <h3 className='cardTitle'>
        Agregar película
      </h3>
      <form className='flex flex-col gap-4 p-4' onSubmit={handleSubmit(onSubmit)}>

        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label htmlFor='name' className='inputLabel'>Nombre</label>
            <p className='font-semibold text-xl border-2 w-max px-2 rounded'>
              {(errors.name && errors.name.message) || 'Listo'}
            </p>
          </div>
          <input
            id='name' type='text' className='input'
            {...register('name', {
              required: {
                value: true,
                message: 'Campo requerido.'
              }
            })
            }
          />
        </div>

        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label htmlFor='description' className='inputLabel'>Descripción</label>
            <p className='font-semibold text-xl border-2 w-max px-2 rounded'>
              {(errors.description && errors.description.message) || 'Listo'}
            </p>
          </div>
          <textarea
            id='description' className='input'
            {...register('description', {
              required: {
                value: true,
                message: 'Campo requerido.'
              }
            })
          }
          />
        </div>

        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label htmlFor='year' className='inputLabel'>Lanzamiento (dd-mm-aaaa)</label>
            <p className='font-semibold text-xl border-2 w-max px-2 rounded'>
              {(errors.year && errors.year.message) || 'Listo'}
            </p>
          </div>
          <input
            id='year' type='date' className='input'
            {...register('year', {
              required: {
                value: true,
                message: 'Campo requerido.'
              }
            })
          }
          />
        </div>

        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label htmlFor='rating' className='inputLabel'>Puntuación Cinécritic (0-5)</label>
            <p className='font-semibold text-xl border-2 w-max px-2 rounded'>
              {(errors.rating && errors.rating.message) || 'Listo'}
            </p>
          </div>
          <input
            id='rating' type='number' step='0.01' className='input' min='0' max='5'
            {...register('rating', {
              required: {
                value: true,
                message: 'Campo requerido.'
              },
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
            <p className='font-semibold text-xl border-2 w-max px-2 rounded'>
              {(errors.banner && errors.banner.message) || 'Listo'}
            </p>
          </div>
          <textarea
            id='banner' className='input'
            {...register('banner', {
              required: {
                value: true,
                message: 'Campo requerido.'
              }
            })
          }
          />
        </div>

        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label htmlFor='poster' className='inputLabel'>Poster url (▯)</label>
            <p className='font-semibold text-xl border-2 w-max px-2 rounded'>
              {(errors.poster && errors.poster.message) || 'Listo'}
            </p>
          </div>
          <textarea
            id='poster' className='input'
            {...register('poster', {
              required: {
                value: true,
                message: 'Campo requerido.'
              }
            })
          }
          />
        </div>

        <input
          type='submit'
          className='bg-white p-2 rounded-lg border-2 w-40 border-black text-black cursor-pointer'
          value='Agregar'
        />
      </form>
    </div>
  )
}

export default AddMovie
