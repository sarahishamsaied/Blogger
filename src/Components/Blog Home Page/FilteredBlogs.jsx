import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BlogCard from '../Blog/BlogCard';
import * as IoArrow from 'react-icons/io5'

export default function FilteredBlogs() {
  const navigate = useNavigate()
    const {tags} = useParams();
    console.log(tags)
    const [blogs,setBlogs] = useState([])
    const getBlogs = async()=>{
      const {data:{data}} = await axios.get(`http://localhost:5000/filterByTags/${tags}`)
      console.log(data)
      setBlogs(data);
    }
    useEffect(()=>{
      getBlogs()
    },[]);

  return (
    <div className='text-white p-32'>
      <div className="container">
        <div className="flex justify-start align-middle">
          <button  onClick={()=>navigate('/home')}>
          <IoArrow.IoArrowBackOutline className= "text-white text-5xl rounded-full hover:border-1 transition ease-in"/>
          </button>
        <span className='text-3xl mt-2 ml-6' >Blogs talking about "#{tags}"</span>

        </div>
        {blogs.map((blog)=>{
         return <div className='mt-6' onClick={()=>navigate(`/blogDetails/${blog._id}`,{replace:true})}>
              <BlogCard name = {blog.author.firstName} title = {blog.title} date = {blog.createdAt} tags = {blog.tags} nComments = {blog.comments.length} nUpVotes = {blog.upVotes.length} nDownVotes= {blog.downVotes.length}/>
            </div>
        })}
      </div>
    </div>
  )
}
