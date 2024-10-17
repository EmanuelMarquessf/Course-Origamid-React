import React, { useContext } from 'react'
import UserContext from '../../UserContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
  const { login } = useContext(UserContext)

  if(login === true) {
    return children
  } else if(login === false){
    <Navigate to={'/login'} />
  } else{
    return <></>
  }

}

export default ProtectedRoute