import React, { createContext,useState } from 'react'
import { useEffect } from 'react';
import GetCookie from '../Hooks/GetCookie'
import jwtDecode from 'jwt-decode'
import axios from 'axios';
const AuthContext = createContext();
const AuthDispatchContext = createContext(undefined)
export default function AuthProvider({children}) {
  const [user,setUser] = useState({})
  const getUserData = async()=>{
    console.log("CONTEXT  ============================================")
    if(GetCookie("token"))
    {
      const token = GetCookie("token")
      console.log(token)
      let {id} = jwtDecode(token)
      console.log(id)
      const user = await axios.get(`http://localhost:5000/getUserById/${id}`);
      setUser(user.data.data)
      console.log(user.data.data)
    }
}
useEffect(()=>{
  getUserData()
},[])
  return <AuthContext.Provider value={user}>
    <AuthDispatchContext.Provider value={setUser}>
        {children}
    </AuthDispatchContext.Provider>
  </AuthContext.Provider>
}
export {AuthContext,AuthDispatchContext,AuthProvider}
