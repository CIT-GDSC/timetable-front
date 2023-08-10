//eslint-disable-next-line
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../features/auth/authSlice';
import Loading from '../views/Loading/Loading';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, isSuccess, message, user } = useSelector(state => state.auth);

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });


  React.useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      // navigate('/timetable')
      toast.success("success")
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, dispatch, navigate]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(login(userData))
    if (login.fulfilled.match(response)) {
      const user = response.payload;
      const sessionToken = user.authentication.sessionToken
      localStorage.setItem('ACCESS_TOKEN', sessionToken);
      navigate('/timetable')
    }

  }
  if (isLoading) {
    return <Loading />
  }
  return (
    <aside className="auth-container">
      <form autoComplete='false' onSubmit={handleSubmit}>
        <p>Welcome back, please login again</p>
        <label htmlFor="email">Enter Your Email: </label>
        <input type="text" name="email" id="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
        <label htmlFor="password">Enter Your Password: </label>
        <input type="password" name="password" id="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
        <button type="submit" className='submit'>Login</button>
        <p>Have an account? <Link to={'/register'} >Register</Link></p>
      </form>
    </aside>
  )
};

export default Login
