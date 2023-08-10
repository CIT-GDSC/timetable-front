

//eslint-disable-next-line
import React from 'react'
import { Outlet } from 'react-router-dom'
import { useStateContext } from '../Context'
import { Navigate } from 'react-router-dom'

const GuestLayout = () => {
  const { token } = useStateContext()
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
