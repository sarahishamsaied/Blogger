import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BlogCard from '../Blog/BlogCard';

export default function Feed() {
  const [feed,setFeed] = useState([]);
  const navigate = useNavigate()
  const getFeed = async()=>{
    const {data} = await axios.get("http://localhost:5000/getFeed/62d3da68678ae4ad9f6f9fdf");
    console.log(data)
    setFeed(data)
  }
  useEffect(()=>{
    getFeed()
  },[])
  return (
    <div className='text-white p-32 h-screen overflow-y-scroll'>
      <h1 className='font-bold text-3xl mb-4'>News Feed</h1>
      <div>
        {feed.length>0?feed.map((blog, index) => {
          let [test] = [...blog];
          if (test) {
            console.log(test);
            return <div >
            <BlogCard id = {test._id} key={index} title={test.title} nComments={test.comments.length} nUpVotes={test.upVotes.length} nDownVotes={test.downVotes.length} tags={test.tags} name = {`${test.author.firstName} ${test.author.lastName}`} />
            </div>
             
          }
        }):''}
      </div>
    </div>
  )
}
