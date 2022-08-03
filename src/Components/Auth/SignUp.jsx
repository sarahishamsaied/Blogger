import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Card from '../Card';
import {GoogleLogin} from 'react-google-login'
import { interests } from './tags';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import SetCookie from '../../Hooks/SetCookie';
export default function SignUp() {
    const [stage,setStage] = useState(1);
    const navigate = useNavigate()
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [bio,setBio] = useState("");
    const [work,setWork] = useState("");
    const [userInterests,setUserInterests] = useState([]);
    const handleSubmit = async(e)=>{
        try {
            console.log(userInterests)
            e.preventDefault();
            const user = {
                firstName,
                lastName,
                email,
                username,
                password,
                confirmPassword,
                bio,
                work,
                interests:userInterests
            };
            const {data} = await axios.post("http://localhost:5000/signup",user);
            console.log(data.token);
            SetCookie("token",data.token)
            navigate("/home");
        } catch (error) {
            console.log(error)
        }
       
    }
  return (
    <div className='bg-black h-screen w-screen flex align-middle justify-center signUp'>
        <form className="form-container m-auto shadow-2xl w-8/12 h-9/12" onSubmit={handleSubmit}>
            <div className="stages relative flex justify-around align-middle">
                <div onClick={()=>setStage(1)} className = {stage === 1?"  stage1 font-bold stage  bg-white text-purple hover:bg-slate-50 transition ease-in rounded-full border-purple border-4 hover:border-purple hover:text-purple cursor-pointer px-5 py-3  m-auto": "stage1 text-white font-bold stage border-2  hover:bg-slate-50 transition ease-in border-white rounded-full hover:border-purple hover:text-purple cursor-pointer px-5 py-3  m-auto" }>
                    1
                </div>
                <div onClick={()=>setStage(2)} className = {stage === 2?"  stage2 font-bold stage  bg-white text-purple hover:bg-slate-50 transition ease-in rounded-full border-purple border-4 hover:border-purple hover:text-purple cursor-pointer px-5 py-3  m-auto": "stage2 font-bold stage border-2  hover:bg-slate-50 transition ease-in border-white rounded-full hover:border-purple text-white hover:text-purple cursor-pointer px-5 py-3  m-auto"}>
                    2
                </div>
                <div onClick={()=>setStage(3)} className = {stage === 3?"  stage3 font-bold stage bg-white text-purple hover:bg-slate-50 transition ease-in rounded-full border-purple border-4 hover:border-purple hover:text-purple cursor-pointer px-5 py-3  m-auto": "stage3 font-bold stage border-2  hover:bg-slate-50 transition ease-in border-white rounded-full hover:border-purple text-white hover:text-purple cursor-pointer px-5 py-3  m-auto"}>
                    3
                </div>
            </div>
            <motion.div animate = {{opacity:stage === 1?1:0,display:stage === 1?'block':'none'}} transition = {{type:'tween', duration:'.3'}} className="content px-36">
        <h1 className = " font-bold text-3xl text-white my-7">Welcome to <span className = "text-purple">&#60; </span>blogger! <span className = "text-yellow">/</span> <span className='text-purple'>&#62;</span> </h1>
        <div className = "grid grid-cols-12 ">
        <label className = "text-white col-span-6">First Name</label>
        <label className = "text-white col-span-6">Last Name</label>
        </div>
        <div className = "grid grid-cols-12 gap-3 ">
        <input onChange={(e)=>setFirstName(e.target.value)} className=" col-span-6 mb-2 shadow appearance-none border rounded bg-transparent w-full hover:bg-white transition ease-in py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name"/>
        <input onChange={(e)=>setLastName(e.target.value)} className="col-span-6  mb-2 shadow appearance-none border rounded bg-transparent w-full hover:bg-white transition ease-in py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name"/>
        </div>
        <label className = "text-white">Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} className=" mb-2 shadow appearance-none border rounded bg-transparent w-full hover:bg-white transition ease-in py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="example@example.com"/>
      
        <label className = "text-white">Username</label>
        <input onChange={(e)=>setUsername(e.target.value)} className=" mb-2 shadow appearance-none border rounded bg-transparent w-full hover:bg-white transition ease-in py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="username"/>
        <label className = "text-white">Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} className=" mb-2 shadow appearance-none border rounded bg-transparent w-full hover:bg-white transition ease-in py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="at least 8 characters"/>
        <label className = "text-white">Confirm Password</label>
        <input onChange={(e)=>setConfirmPassword(e.target.value)} className=" mb-2 shadow appearance-none border rounded bg-transparent w-full hover:bg-white transition ease-in py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="text" placeholder="confirm password"/>
        <button onClick={()=>setStage(stage+1)} type="button" class="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:hover:bg-yellow hover:text-black transition ease-in dark:focus:bg-purple">Next</button>
        <div>
            <GoogleLogin className='mt-7' clientId='523022653649-aqb0p9r9mouehrcgibmri3rcn3q83ujg.apps.googleusercontent.com' 
            buttonText='sign up'
            onSucess/>
        </div>    
        </motion.div>
            <motion.div animate = {{opacity:stage === 2?1:0,display:stage === 2?'block':'none'}} transition = {{type:'tween', duration:'.3'}} className="content px-36">
            <h1 className = " font-bold text-3xl text-white my-7">What are you interested in? </h1>
            <div className="content2 flex justify-start flex-wrap align-middle p-5 text-white overflow-y-scroll">
            {interests.map((interest,index)=>{
                return <Card key={index} type={interest} interests = {userInterests} id = {index} setInterests = {setUserInterests}/>
            })}
            </div>
            <div className = "flex justify-between align-middle">
            <button onClick={()=>setStage(stage-1)} type="button" class="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:hover:bg-yellow hover:text-black transition ease-in dark:focus:bg-purple">Previous</button>
            <button onClick={()=>setStage(stage+1)} type="button" class="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:hover:bg-yellow hover:text-black transition ease-in dark:focus:bg-purple">Next</button>
            </div>
            </motion.div>
            <motion.div animate = {{opacity:stage === 3?1:0,display:stage === 3?'block':'none'}} transition = {{type:'tween', duration:'.3'}} className="content px-36">
            <h1 className = " font-bold text-3xl text-white my-7">Build your profile </h1>
            <label className = "text-white">Work</label>
        <input onChange={(e)=>setWork(e.target.value)} class=" mb-6 shadow appearance-none border rounded bg-transparent w-full hover:bg-white transition ease-in py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="work"/>
        <label className = "text-white">Bio</label>
        <textarea onChange={(e)=>setBio(e.target.value)} class=" mb-6 shadow appearance-none border rounded bg-transparent w-full hover:bg-white transition ease-in py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Tell us a bit about yourself" cols={10} rows = {5}/>
        <div className = "flex justify-between align-middle">
            <button onClick={()=>setStage(stage-1)} type="button" class="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:hover:bg-yellow hover:text-black transition ease-in dark:focus:bg-purple">Previous</button>
            <button type="submit" class="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:hover:bg-yellow hover:text-black transition ease-in dark:focus:bg-purple">Finish</button>
            </div>            
            </motion.div>
        
        </form>

    </div>

  )
}
