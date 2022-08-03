import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlogCard from '../Blog/BlogCard';

export default function Explore({interests,name}) {
    const [bookmarks,setBookmarks] = useState([])
    console.log(bookmarks)
    let stringUrl = useRef("http://localhost:5000/explore?")
    const [blogs,setBlogs] = useState([])
    const colors = ['text-pink-500','text-sky','text-purple','text-yellow'];
    let color = -1
    const navigate = useNavigate()   
    useEffect(()=>{
        const explore = async()=>{
            try{
                interests.map((interest,index)=>{
                    if(index === 0) return stringUrl.current+=`interests=${interest}`
                    else return stringUrl.current+=`&interests=${interest}`
                });
                const {data:{data}} = await axios.get(`${stringUrl.current}`);
                setBlogs(data[0]);
            }
            catch(e){
                console.log(e)
            }
           
       }
        if(blogs.length === 0)
        explore();
    },[blogs,interests])
  return (
    <div className='text-white p-24 h-screen mt-24 overflow-y-scroll'>
        <h1 className='font-bold text-3xl'>Blogs based on your interests</h1>
        <ul className='mt-11'>
            {interests.map((interest,index)=>{
                if(index>=colors.length)
                color = -1
                color++;
              return <span key = {index} onClick={()=>navigate(`/filter/${interest}`,{replace:true})} className={`mr-11 ${colors[color]} bg-gray-900 cursor-pointer hover:scale-110 transition-all  ease-in hover:border-1 px-4 py-2 rounded-2xl`} >{interest}</span>
            })}
        </ul>
        <div className='mt-11'>
            {blogs.map((blog,index)=>{
                return <div key = {index}>
                <BlogCard id={blog._id} name = {name} title={blog.title} nUpVotes = {0} nDownVotes = {0} tags = {blog.tags}  date = "" setBookmarks = {setBookmarks}/>
                </div>
            })}
        </div>
    </div>
  )
}
