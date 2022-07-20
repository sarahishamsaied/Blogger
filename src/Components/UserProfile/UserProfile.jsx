import React, { Fragment, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../Context/AuthProvider'
import BlogCard from '../Blog/BlogCard';
import { useNavigate } from 'react-router-dom';
export default function UserProfile() {
    const user = useContext(AuthContext);
    const [userData,setUserData] = useState({});
    const [blogs,setBlogs] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
    getUserData()
    },[]);
const getUserData = async()=>{
    console.log("datafdgfsdfsdf")
    const {data:{data}} = await axios.get(`http://localhost:5000/getUserById/${user._id}`)
    setUserData(data)
    setBlogs(data.blogs)
    
}
  return (
    <Fragment>
    <div className='flex justify-center align-middle flex-col py-11'>
        <h1>blogs   </h1>
    {blogs&&blogs.map((element,index)=>{
        return <div className='text-white m-auto hover:scale-105 transition-all ease-out hover:shadow-xl' onClick={()=>navigate(`/blogdetails/${element._id}`)} key={index}>
       <BlogCard title  = {element.title} tags = {element.tags} nComments = {element.comments.length} nUpVotes = {element.upVotes.length}  nDownVotes = {element.downVotes.length} date = {element.createdAt} key = {index}/>
        </div>
    })}
    </div>
    
    </Fragment>

  )
}
