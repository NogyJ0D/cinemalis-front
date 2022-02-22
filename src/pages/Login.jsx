import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { types } from '../reducers/globalReducer'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import axiosRequest from '../services/axiosRequest'

const Login = () => {
  const navigate = useNavigate()
  const [store, dispatch] = useContext(GlobalContext)

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async ({ email, password }) => {
    const response = await axiosRequest('https://cinemalis-342015.rj.r.appspot.com/auth/login', 'POST', { email, password })
    if (response.success === false) {
      dispatch({ type: types.logout })
      window.alert('Las credenciales no coinciden.')
    } else {
      const data = response.dataShowed
      dispatch({
        type: types.login,
        payload: { userName: data.userName, email: data.email, role: data.role, id: data.id }
      })
      navigate(-1)
    }
  }

  return (
    <div className='mt-10 rounded-lg w-[450px] mx-auto flex flex-col bg-black p-4 gap-2'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-4'
      >
        <h5 className='text-center font-bold text-white text-3xl'>
          Iniciar sesión
        </h5>

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
                // /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
                value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/igm,
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
      <Link to='/signup' className='bg-gray-500 py-1 text-white text-center font-bold rounded'><p>Registrarse</p></Link>
      {/* <Button className='h-8 p-button-secondary' label='Registrarse' /> */}
    </div>
  )
}

export default Login
