//eslint-disable-next-line
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../context';

const Signup = () => {
  const { token } = useStateContext();
  const navigate = useNavigate();

  //redirects to dashboard if token exists
  React.useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]); 

  return (
    <div>Signup</div>
  )
}

export default Signup