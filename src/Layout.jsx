import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const Layout = () => {
  return (
    <main className='min-h-screen flex flex-col font-nunito bg-gradient-to-b from-red-700 to-red-900 pb-4'>
      <Header />
      <section>
        <Outlet />
      </section>
    </main>
  )
}

export default Layout
