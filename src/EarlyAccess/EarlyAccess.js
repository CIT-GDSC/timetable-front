//eslint-disable-next-line
import React from 'react'
import { Link } from 'react-router-dom';
const EarlyAccess = () => {
  return (
    <aside className="auth-container">
      <form>
      <p>Request an early access to the app</p>
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" />
        <p>Dont have an account? <Link to='/register'>Sign up</Link></p>
      </form>
    </aside>
  )
}

export default EarlyAccess