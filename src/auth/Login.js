//eslint-disable-next-line
import React from 'react'


const Login = () => {
  return (
    <aside className="auth-container">
      <form>
      <p>Welcome back, please login again</p>
        <label htmlFor="name">Admission Number: </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
        <button type="submit" className='submit'>Request</button>
      </form>
    </aside>
  ) 
}

export default Login