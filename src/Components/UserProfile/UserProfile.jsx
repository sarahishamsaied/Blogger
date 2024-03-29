import React, { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../Context/AuthProvider'
import BlogCard from '../Blog/BlogCard';
import { useNavigate } from 'react-router-dom';
import GetCookie from '../../Hooks/GetCookie';
import jwtDecode from 'jwt-decode';
import AlignItemsList from '../Menus/Sidebar';
import { grey, red } from '@mui/material/colors';
import * as RiIcons from 'react-icons/ri'
import {motion} from 'framer-motion'
import { Divider } from '@mui/material';
import ListPopup from '../Popups/ListPopup';
import * as IoArrow from 'react-icons/io5'
import Sidebar from '../Sidebar/Sidebar';
import UserContainer from './UserContainer';
import Leftbar from './Leftbar';

export default function UserProfile() {
    const navigate = useNavigate();
    const [userData,setUserData] = useState({});
    const [blogs,setBlogs] = useState([]);
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [followers,setFollowers] = useState([]);
    const [following,setFollowing] = useState([]);
    const [followersClicked,setFollowersClicked] = useState(false);
    const [followingClicked,setFollowingClicked] = useState(false);
    const [interests,setInterests] = useState([]);
    const [author,setAuthor] = useState("");
    useEffect(()=>{
    getUserData()
    },[]);
    useEffect(()=>{

        getUserData()
    },[])
const getUserData = async()=>{
    console.log("dsjkdbf")
    const token = GetCookie("token");
    const {id} = jwtDecode(token);
    console.log(id)
    const {data:{data}} = await axios.get(`http://localhost:5000/getUserById/${id}`)
    setUserData(data)
    setName(`${data.firstName} ${data.lastName}`);
    setLastName(data.lastName);
    setFollowers(data.followers);
    setFollowing(data.following);
    setBlogs(data.blogs)
    setInterests(data.interests)
    console.log(data.interests)
    console.log("dfjksgkjdsfjkl")
    console.log(data.author)
    
}
  return (
    <Fragment>
        <motion.div animate = {{display:(followingClicked || followersClicked )? 'block':'none',opacity:(followingClicked || followersClicked)? 1:0}}  transition = {{type:'tween'}}>
        <ListPopup list={followingClicked?following:followers} type = {followingClicked?'Following':'Followers'} />
        </motion.div>
        <IoArrow.IoArrowBackOutline className= "text-white text-6xl ml-9 mt-24 rounded-full hover:border-2 transition ease-in" onClick={()=>navigate(-1)}/>
        <div className="container grid  grid-cols-12 text-white px-11">
            <div className="sideBar   shadow-2xl p-5 col-span-3">
            <div className="profileIcon text-8xl bg-purple rounded-full border-2 text-center m-auto">
            {name[0] }
            {lastName[0]}
            </div>
            <h1 className='  text-2xl  mb-7 text-center mt-7 text-white'>{userData.firstName} {userData.lastName}</h1>
            <Divider variant='center' sx={{ bgcolor: "#9e9e9e" }}/>
            <p className='text-lg text-zinc-300 my-7'>Work: {userData.work}</p>
            <Divider variant='center' sx={{ bgcolor: "#9e9e9e" }}/>
            <p className='text-lg mt-5 font-thin text-zinc-300'><span className = "text-lg  my-5 mr-3 ">Bio:</span>{userData.bio}</p>
            
            <Divider variant='center' sx={{ bgcolor: "#9e9e9e" }}/>
            <div className="flex mt-5 text-lg">
            <RiIcons.RiUserSharedLine className='text-2xl mr-3 flip'/>
            <p onClick={()=>setFollowersClicked(!followersClicked)} className='cursor-pointer hover:underline'>Followers: {followers.length}</p>
            </div>
            <div className="flex mt-5 text-lg">
            <RiIcons.RiUserSharedLine className='text-2xl mr-3 '/>
            <p  onClick={()=>setFollowingClicked(!followingClicked)} className='cursor-pointer hover:underline'>Following: {following.length}</p>
            </div>
            {interests.length>0?<div className='flex flex-wrap mt-6 '>
                {interests.map((interest)=>{return <span className='mr-5'>#{interest}</span>})}</div>: <p className='mt-6 mr-4 text-zinc-700'>No interests yet</p>}

            </div>
            <div className="content p-11 shadow-2xl   col-span-9 overflow-y-scroll h-screen ">
                <h1 className='text-white text-4xl mb-7 font-bold'>Your Blogs</h1>
            {blogs.map((element,index)=>{
        return <div className='text-white w-full hover:scale-105 transition-all ease-out hover:shadow-xl'  key={index}>
       <BlogCard id={element._id} name={`${name}`} title  = {element.title} tags = {element.tags} nComments = {element.comments.length} nUpVotes = {element.upVotes.length}  nDownVotes = {element.downVotes.length} date = {element.createdAt} key = {index}/>
        </div>
    })}
    </div>   
        </div> 
    </Fragment>

  )
}
