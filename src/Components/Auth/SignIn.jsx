import React, { useState,Fragment,useEffect } from 'react'
import {GoogleLogin} from 'react-google-login'
import axios from "axios"
import Confetti from 'react-confetti'
import { ToastContainer,toast } from 'react-toastify'
import {useNavigate} from 'react-router-dom'
import { gapi } from 'gapi-script'
import SetCookie from '../../Hooks/SetCookie'
import { useContext } from 'react'
import { AuthDispatchContext } from '../../Context/AuthProvider'

export default function SignIn() {
    const [email,setEmail] = useState("");
    const setUser = useContext(AuthDispatchContext)
    const [password,setPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState("")
    const navigate = useNavigate();
    const onFailure = (e)=>{
        console.log(e)
        alert(e)
    }
    useEffect(() => {
        function start() {
          gapi.client.init({
            clientId:"523022653649-aqb0p9r9mouehrcgibmri3rcn3q83ujg.apps.googleusercontent.com" ,
            scope: 'email',
          });
        }
    
        gapi.load('client:auth2', start);
      }, []);
    
    const googleResponse = async(response)=>{
        console.log(response)
        const {profileObj} = response
        const userData = {
            firstName:profileObj.givenName,
            lastName:profileObj.familyName,
            email:profileObj.email,
            profilePic:profileObj.imageUrl,
            idToken:response.tokenId
        }
       try{
        const {data} = await axios({
            method:'POST',
            url:'http://localhost:5000/signInWithGoogle',   
            data: userData
        });
        console.log(data)
        if(data.status === 200)
        {
        console.log(data.message)
        }
        else
        console.log(data.message)
        
       }
       catch(e){

    }
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const userData = {
            email,
            password
        }   
        try {
            const {data} = await axios.post("http://localhost:5000/signIn",{email,password})
            console.log(data)
            setErrorMessage('')
            SetCookie("token",JSON.stringify(data.token));
            navigate("/home")
        } catch (error) {
            const {response:{data}} = error;
            console.log(data)
            setErrorMessage(data.message)
        }

    }
  return (
    <Fragment>
        <section className = " h-screen flex flex-col justify-center align-middle rounded bg-black">
        <form onSubmit={handleSubmit} method = "POST" className='bg-black flex flex-col w-7/12 m-auto'>
            <h1 className='font-bold text-white text-5xl text-left mb-7'>Sign In</h1>
        <label className = "text-white">Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} className=" mb-2 shadow appearance-none border rounded bg-transparent w-full hover:bg-white transition ease-in py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="example@example.com"/>
        <label className = "text-white">Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} className=" mb-2 shadow appearance-none border rounded bg-transparent w-full hover:bg-white transition ease-in py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="password"/>
        <button  type="submit" class="text-white  mb-7 mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:hover:bg-yellow hover:text-black transition ease-in dark:focus:bg-purple">Login</button>
        {errorMessage!==''?<div className="bg-red-100 mb-4 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">{errorMessage}.</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>:''}
    <div >
    <GoogleLogin 
    cookiePolicy={'single_host_origin'}
    onSuccess={googleResponse}
    onFailure={onFailure}
    buttonText = "Login"
    clientId = "523022653649-aqb0p9r9mouehrcgibmri3rcn3q83ujg.apps.googleusercontent.com"/> 
    </div>
    
        </form>

        </section>
       

    </Fragment>
   
  )
}
