import React from 'react'
import { useForm } from 'react-hook-form'
import axiosRequest from '../../services/axiosRequest'

const ChangeRole = ({ userRole }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async ({ userId, newRole }) => {
    if (userRole >= 3) {
      const response = await axiosRequest(`https://cinemalis-342015.rj.r.appspot.com/users/${userId}`, 'PUT', { role: newRole })
      response.fail
        ? window.alert('Error de changerole')
        : window.location.reload()
    }
  }

  return (
    <div className='card'>
      <h3 className='cardTitle'>
        Editar rol de usuario
      </h3>
      <form className='flex flex-col gap-4 p-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-flow-row gap-2'>
          <div className='grid grid-cols-2'>
            <label htmlFor='userId' className='inputLabel'>ID del usuario:</label>
            <p className='font-semibold text-xl border-2 w-max px-2 rounded'>
              {(errors.userId && errors.userId.message) || 'Listo'}
            </p>
          </div>
          <input
            id='userId' type='text' className='input'
            {...register('userId', {
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
            <label htmlFor='role' className='inputLabel'>Nuevo rol:</label>
            <p className='font-semibold text-xl border-2 w-max px-2 rounded'>
              {(errors.role && errors.role.message) || 'Listo'}
            </p>
          </div>
          <input
            id='role' type='number' className='input'
            {...register('newRole', {
              required: {
                value: true,
                message: 'Campo requerido.'
              },
              min: {
                value: 1,
                message: 'Rol mínimo = 1.'
              },
              max: {
                value: userRole - 1,
                message: `Rol máximo = ${userRole - 1}.`
              }
            })
          }
          />
        </div>
        <input
          type='submit'
          className='bg-white p-2 rounded-lg border-2 w-40 border-black text-black cursor-pointer'
          value='Cambiar'
        />
      </form>
    </div>
  )
}

export default ChangeRole
