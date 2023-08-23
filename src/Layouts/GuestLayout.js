

//eslint-disable-next-line
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const GuestLayout = () => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  if (token) {
    return <Navigate to='/' />
  }
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default GuestLayout
