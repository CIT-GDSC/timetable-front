//eslint-disable-next-line
import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../context';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const { token } = useStateContext();
  const navigate = useNavigate();

  //redirects to dashboard if token exists
  React.useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <aside className="auth-container">
      <form>
        <p>Welcome back, please login again</p>
        <label htmlFor="name">Admission Number: </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
        <button type="submit" className='submit'>Request</button>
        <Link to={'/register'} >Register</Link>
      </form>

    </aside>
  )
};

export default Login
