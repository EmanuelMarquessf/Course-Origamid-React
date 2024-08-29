import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();

  function handleClick(){
    console.log('Login')
    navigate ('/')
  }
  return (
    <div>
      <span>Login</span>
      <button onClick={handleClick}>login</button>
    </div>

  )
}

export default Login