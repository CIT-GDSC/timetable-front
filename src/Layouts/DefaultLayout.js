//eslint-disable-next-line
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../Context'




const DefaultLayout = () => {
  const { token } = useStateContext();
  if (!token) {
    return <Navigate to='/login' />
  }
  return (
    <div>
      DefaultLayout
      <Outlet />
    </div>
  )
}

export default DefaultLayout
