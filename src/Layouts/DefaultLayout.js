//eslint-disable-next-line
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
// import { useStateContext } from '../Context'




const DefaultLayout = () => {
  // const { token } = useStateContext();
  const token = localStorage.getItem('ACCESS_TOKEN');
  console.log(token)
  if (!token) {
    return <Navigate to='/login' />
  }
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default DefaultLayout
