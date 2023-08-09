//eslint-disable-next-line
import React from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <aside className="register-container">
      <form>
        <p>Register An Account</p>
        <label htmlFor="name">Username: </label>
        <input type="text" name="name" id="name" />

        <label htmlFor="firstName">FirstName: </label>
        <input type="text" name="firstName" id="firstName" />

        <label htmlFor="lastName">LastName: </label>
        <input type="text" name="lastName" id="lastName" />

        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" />

        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />

        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input type="password" name="confirmPassword" id="confirmPassword" />

        <button type="submit">Register</button>

        <p>Have an account? <Link to={'/login'} >Login</Link></p>
      </form>

    </aside>
  )
}

export default Signup
