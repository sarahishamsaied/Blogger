import React, { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../Context/AuthProvider'
import BlogCard from '../Blog/BlogCard';
import { useNavigate, useParams } from 'react-router-dom';
import GetCookie from '../../Hooks/GetCookie';
import jwtDecode from 'jwt-decode';
import AlignItemsList from '../Menus/Sidebar';
import { grey, red } from '@mui/material/colors';
import * as RiIcons from 'react-icons/ri'
import {motion} from 'framer-motion'
import { Divider } from '@mui/material';
import ListPopup from '../Popups/ListPopup';
import * as IoArrow from 'react-icons/io5'
import * as SiIcons from 'react-icons/si'

export default function Profile() {
    const navigate = useNavigate();
    const {username} = useParams()
    console.log(username)
    const [userData,setUserData] = useState({});
    const [blogs,setBlogs] = useState([]);
    const [name,setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [followers,setFollowers] = useState([]);
    const [following,setFollowing] = useState([]);
    const [followersClicked,setFollowersClicked] = useState(false);
    const [followingClicked,setFollowingClicked] = useState(false);
    const [interests,setInterests] = useState([]);
    const [followed,setFollowed] = useState(false);
    useEffect(()=>{
    getUserData()
    },[]);
    useEffect(()=>{
        getUserData()
    },[])
const getUserData = async()=>{
    console.log("dsjkdbf")
    const {data:{data}} = await axios.get(`http://localhost:5000/users/${username}`);
    console.log("data ius")
    console.log(data)
    setUserData(data)
    setName(`${data.firstName}`);
    setLastName(data.lastName);
    setFollowers(data.followers);
    setFollowing(data.following);
    setBlogs(data.blogs)
    setInterests(data.interests)
    console.log(data.interests)    
}
const follow = async()=>{
    console.log(userData._id)
    const token = GetCookie("token");
    const {id} = jwtDecode(token);
    const response = await axios.post(`http://localhost:5000/followUser/${id}/${userData._id}`);
    console.log(response)
}
const unFollow = async()=>{
    const token = GetCookie("token");
    const {id} = jwtDecode(token);
    const response = await axios.post(`http://localhost:5000/followUser/${id}/${userData._id}`);
    console.log(response)
}
  return (
    <Fragment>
        <motion.div animate = {{display:(followingClicked || followersClicked )? 'block':'none',opacity:(followingClicked || followersClicked)? 1:0}}  transition = {{type:'tween'}}>
        <ListPopup list={followingClicked?following:followers} type = {followingClicked?'Following':'Followers'} />
        </motion.div>
        <IoArrow.IoArrowBackOutline className= "text-white text-6xl ml-9 mt-24 rounded-full hover:border-2 transition ease-in" onClick={()=>navigate(-1)}/>
        <div className="container grid  grid-cols-12 text-white p-32">
            <div className="sideBar  h-screen  shadow-2xl p-5 col-span-3">
            <div className="profileIcon text-8xl bg-purple rounded-full border-2">
            {name[0] }
            {lastName[0]}
            </div>
            <div className='flex justify-around'>
            <button onClick={()=>{
                setFollowed(!followed);
                if(followed)
                follow();
                else
                unFollow()
                }} type="button" class="text-black mt-7 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium w-full rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-white font-bold hover:bg-purple hover:text-white transition ease-in dark:focus:bg-purple">{followed?'Followed':'Follow +'}</button>
            </div>
            <h1 className=' ml-11 text-3xl mb-7 text-left mt-11 text-white'>{userData.firstName} {userData.lastName}</h1>
            <Divider variant='center' sx={{ bgcolor: "#9e9e9e" }}/>
            <p className='text-lg text-zinc-300 my-7'>Work: {userData.work}</p>
            <Divider variant='center' sx={{ bgcolor: "#9e9e9e" }}/>
            <p className='text-lg mt-5 font-thin text-zinc-300'><span className = "text-lg  my-5 mr-3 ">Bio:</span>{userData.bio}</p>
            
            <Divider variant='center' sx={{ bgcolor: "#9e9e9e" }}/>
            <div className="flex mt-5 text-lg">
            <RiIcons.RiUserSharedLine className='text-2xl mr-3 flip'/>
            <p onClick={()=>setFollowersClicked(!followersClicked)} className='cursor-pointer hover:underline'>Followers: {followers.length}</p>
            </div>
            <div className="flex mt-5 text-xl">
            <RiIcons.RiUserSharedLine className='text-2xl mr-3 '/>
            <p  onClick={()=>setFollowingClicked(!followingClicked)} className='cursor-pointer hover:underline'>Following: {following.length}</p>
            </div>
            {interests.length>0?<div className='flex flex-wrap mt-6 '>
                {interests.map((interest)=>{return <span>{interest}</span>})}</div>: <p className='mt-6 text-zinc-700'>No interests yet</p>}

            </div>
            <div className="content ml-32 col-span-9 ">
                <h1 className='text-white text-4xl mb-7 font-bold'>{name} {lastName}'s blogs</h1>
            {blogs.map((element,index)=>{
        return <div className='text-white w-full  transition-all ease-out hover:shadow-xl' onClick={()=>navigate(`/blogdetails/${element._id}`)} key={index}>
       <BlogCard  title  = {element.title} tags = {element.tags} nComments = {element.comments.length} nUpVotes = {element.upVotes.length}  nDownVotes = {element.downVotes.length} date = {element.createdAt} key = {index}/>
        </div>
    })}
    </div>   
        </div> 
    </Fragment>

  )
}
