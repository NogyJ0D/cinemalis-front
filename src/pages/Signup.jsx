import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import axiosRequest from '../services/axiosRequest'

const Signup = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async ({ userName, email, password }) => {
    const response = await axiosRequest('https://cinemalis-342015.rj.r.appspot.com/auth/signup', 'POST', { userName, email, password })
    if (response.fail) window.alert('El usuario ya existe.')
    else {
      navigate('/')
      return window.location.reload()
    }
  }

  return (
    <div className='mt-10 rounded-lg w-[450px] mx-auto flex flex-col bg-black p-4 gap-2'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4'
      >
        <h5 className='text-center font-bold text-white text-3xl'>
          Registrarse
        </h5>

        <div className='p-inputgroup'>
          <InputText
            placeholder='Nombre de usuario'
            className={errors.userName ? 'p-invalid block' : ''}
            type='text'
            {...register('userName', {
              required: {
                value: true,
                message: 'Campo requerido.'
              },
              maxLength: {
                value: 15,
                message: 'Máximo 15 caracteres.'
              }
            })}
          />
          <span className='p-inputgroup-addon'>
            <i className='pi pi-user' />
          </span>
        </div>

        <small className='p-error block'>
          {errors.userName && errors.userName.message}
        </small>

        <div className='p-inputgroup'>
          <InputText
            placeholder='Email'
            className={errors.email ? 'p-invalid block' : ''}
            type='email'
            {...register('email', {
              required: {
                value: true,
                message: 'Campo requerido.'
              },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: 'Debe ser un email válido.'
              }
            })}
          />
          <span className='p-inputgroup-addon'>
            <i className='pi pi-at' />
          </span>
        </div>

        <small className='p-error block'>
          {errors.email && errors.email.message}
        </small>

        <div className='p-inputgroup'>
          <InputText
            placeholder='Contraseña'
            type='password'
            {...register('password', {
              required: { value: true, message: 'Campo requerido.' }
            })}
          />
          <span className='p-inputgroup-addon'>
            <i className='pi pi-lock' />
          </span>
        </div>

        <small className='p-error block'>
          {errors.password && errors.password.message}
        </small>

        <Button type='submit' label='Entrar' />
      </form>
    </div>
  )
}

export default Signup
