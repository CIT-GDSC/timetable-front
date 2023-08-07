//eslint-disable-next-line
import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <aside className="auth-container">
      <form>
      <p>Welcome back, please login again</p>
        <label htmlFor="name">Admission Number: </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
        <button type="submit" className='submit'>Login</button>
        <p>Dont have an account? <Link to='/register'>Sign up</Link></p>
      </form>
    </aside>
  ) 
}

export default Login