import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({isLoggedIn,children}) {
    console.log(isLoggedIn)
        if(!isLoggedIn)
        return <Navigate to = "/" replace/>
    else
  return children;
}
