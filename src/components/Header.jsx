import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import HeadLogo from '../assets/img/HeadLogo.svg'
import { GlobalContext } from '../context/GlobalContext'

const Header = () => {
  const [store, dispatch] = useContext(GlobalContext)
  const { user } = store

  return (
    <nav className='flex flex-col md:flex-row md:h-20 bg-black bg-opacity-80 md:justify-between md:px-14 mb-4 pt-2 items-center shadow-2xl'>
      <Link className='self-baseline' to='/'>
        <img src={HeadLogo} alt='Cinémalis' />
      </Link>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        <Link to='/movies' className='button'>Ver todas las películas</Link>
        <Link to='/dashboard' className={user?.userName ? 'block button' : 'hidden'}>
          {user ? user?.userName : ''}
        </Link>
        <Link to='/login' className={user?.userName ? 'hidden' : 'block button'}>
          Entrar
        </Link>
      </div>
    </nav>
  )
}

export default Header
