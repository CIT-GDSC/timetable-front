//eslint-disable-next-line
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'




const DefaultLayout = () => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  console.log(token)
  //temporary configrations for d
  if (token) {
    return <Navigate to='/login' />
  }
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default DefaultLayout
