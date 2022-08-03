import React from 'react'
import { useState,useContext } from 'react';
import RichTextEditor from '../Text Editor/RichTextEditor';
import Config from '../Text Editor/Config';
import { interests } from '../Auth/tags';
import Card from '../Card';
import { AuthContext } from '../../Context/AuthProvider';
import axios from 'axios';
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
export default function BlogForm() {
    const [body,setBody] = useState("")
    const [title,setTitle] = useState("")
    const [interests2,setInterests] = useState([])
    const [statusMessage,setStatusMessage] = useState("")
    const currentUser = useContext(AuthContext)
    console.log(currentUser)
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(interests2)
        try{
          const data = await axios.post(`http://localhost:5000/postBlog`,{
            tags:interests2,
            author:currentUser._id,
            category:interests2[0],
            body,
            title 
          })
          console.log(data)
          setStatusMessage("Posted Successfully");
        }
        catch(e){
          console.log(e)
          setStatusMessage("Error posting blog");
        }
    };
  return (
    <div className='text-white  bg-black  p-32 h-screen overflow-y-scroll'>
        <h2 className='font-bold text-5xl mb-5'>Create Blog</h2>
        <form action="  " method='POST' onSubmit={handleSubmit} className = "p-32 ">
            <label htmlFor="" className='my-7 text-3xl'>Blog Title</label>
            <input onChange={(e)=>setTitle(e.target.value)} className=" font-bold text-3xl border-0 border-b-2 my-6 shadow appearance-none  rounded bg-transparent w-full hover:bg-white transition hover:text-black ease-in py-3 px-3  leading-tight focus:outline-none text-white focus:shadow-outline focus:text-black" id="body" placeholder="Enter Blog Title Here.." cols={10} rows = {3}/>
            <label htmlFor="">Blog Body</label>
            <div className=' my-7'>
            <RichTextEditor setValue = {setBody} configuration = {Config}/>
            </div>
           {/* <p dangerouslySetInnerHTML={{__html: body}}/> */}
           <label htmlFor="" className='mb-7 text-3xl'>Tags</label>
           <div className="flex justify-start flex-wrap h-96 overflow-scroll tags my-7 gap-0 p-5">
           {interests.map((interest,index)=>{
                return <Card type={interest} id = {index} setInterests = {setInterests} interests = {interests2}/>
            })}
           </div>
           <div className = "flex justify-end mt-32 ">
           <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:hover:bg-yellow hover:text-black transition ease-in dark:focus:bg-purple">Post Blog</button>
           </div>
            <p className='p-4 text-white'>{statusMessage}</p>
            </form>
    </div>
  )
}
