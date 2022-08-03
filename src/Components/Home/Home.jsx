import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import GetCookie from '../../Hooks/GetCookie';
import jwtDecode from 'jwt-decode';
import Sidebar from '../Sidebar/Sidebar';
import UserContainer from '../UserProfile/UserContainer';
import Leftbar from '../UserProfile/Leftbar';
import {motion} from 'framer-motion' 
import Explore from '../Explore/Explore';
import Feed from '../Feed/Feed';
import ReadingList from '../ReadlingList/ReadingList';
import UserProfile from '../UserProfile/UserProfile';
import BlogForm from '../Blog/BlogForm'
import FilteredBlogs from '../Blog Home Page/FilteredBlogs';
export default function Home() {
  const [page,setPage] = useState("feed")
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
  setName(`${data.firstName}`);
  setLastName(data.lastName);
  setFollowers(data.followers);
  setFollowing(data.following);
  setBlogs(data.blogs)
  setInterests(data.interests)
  console.log(data.interests)
}
  return (
      <div className='flex h-screen overflow-hidden'>
            <div>
            <Sidebar username = {userData.username} setPage = {setPage}/>
            </div>
            <motion.div className=' w-full' animate = {{opacity:page === 'explore'?1:0,display:page === 'explore'?'block':'none'}} >
              <Explore interests = {interests} name = {`${name} ${lastName}`}/>
            </motion.div>
            <motion.div className=' w-full' animate = {{opacity:page === 'createBlog'?1:0,display:page === 'createBlog'?'block':'none'}} >
              <BlogForm/>
            </motion.div>
            <motion.div className=' w-full' animate = {{opacity:page === 'feed'?1:0,display:page === 'feed'?'block':'none'}}>
              <Feed/>
            </motion.div>
            <motion.div className='w-full' animate = {{opacity:page === 'readingList'?1:0,display:page === 'readingList'?'block':'none'}}>
              <ReadingList/>
            </motion.div>
            <motion.div className='w-full' animate = {{opacity:page === 'profile'?1:0,display:page === 'profile'?'block':'none'}}>
              <UserProfile/>
            </motion.div>
            <motion.div className='w-full' animate = {{opacity:page === 'filteredBlogs'?1:0,display:page === 'filteredBlogs'?'block':'none'}}>
              <FilteredBlogs setPage = {setPage}/>
            </motion.div>
    </div>
  )
}
