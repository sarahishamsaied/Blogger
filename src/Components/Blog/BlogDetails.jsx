import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider';
import * as AiIcons from 'react-icons/ai'
import AlignItemsList from '../Menus/Sidebar';
import * as IoArrow from 'react-icons/io5'

export default function BlogDetails() {
    const navigate = useNavigate()
    let color = -1;
    const colors = ['text-pink-500','text-sky','text-purple','text-yellow']
    const user = useContext(AuthContext)
    const {id} = useParams()
    const [blog,setBlog] = useState({})
    const [username,setUsername] = useState("")
    const [name,setName] = useState("")
    const [comments,setComments] = useState([])
    const [comment,setComment] = useState("")
    const [tags,setTags] = useState([])
    console.log(id)
    useEffect(()=>{
        getBlogDetails()
        getComments()
    },[]);
    const getBlogDetails = async()=>{
        const {data:{data }} = await axios.get(`http://localhost:5000/getBlog/${id}`);
        console.log(data)
        console.log(data)
        setBlog(data)
        // setComments(data.comments);
        setUsername(data.author.username)
        setName(`${data.author.firstName} ${data.author.lastName}`)
        setTags(data.tags)
    }
    const postComment = async ()=>{
        try{
            const response = await axios.post(`http://localhost:5000/postComment/${id}`,{
                author:user._id,
                body:comment
            });
            console.log(response);
            getComments()
        }
        catch(e){
            console.log(e)
        }
    }
    const getComments = async()=>{
        console.log("com")
        const {data:{data }} = await axios.get(`http://localhost:5000/getComments/${id}`);
        setComments(data)
    }
    const deleteComment = async(commentId)=>{
        console.log(id)
        console.log(commentId)
            const response = await axios.delete(`http://localhost:5000/deleteComment/62d7df3f756d8ae58a6c2c5e`,{
                blogId:"62d70a404390424da443a851",
                author:"62d3da68678ae4ad9f6f9fdf"
            });
            console.log(response)
    }
  return (
    <Fragment>
        <IoArrow.IoArrowBackOutline className= "text-white text-6xl ml-9 mt-24 rounded-full hover:border-1 transition ease-in" onClick={()=>navigate(-1)}/>
        <div className='text-white p-24 px-32'>
        <h1 className='text-6xl text-left font-bold mt-11 text-white'> {blog.title}</h1>
        <h1 className='mt-7 font-light text-xl opacity-50'>Posted By</h1>
        <h1 className=' font-bold text-2xl'>{name}</h1>
        <p className='font-light text-xl opacity-50 mt-4 text-right'>{blog.createdAt}</p>
        <div className='flex justify-start'>
            {tags&&tags.map((element,index)=>{
            if(index>=colors.length)
             color = -1
            color++;
         return <span onClick={()=>navigate(`/filter/${element}`,{replace:true})} className={`mr-11 ${colors[color]} bg-gray-900 cursor-pointer hover:scale-110 transition-all  ease-in hover:border-1 px-4 py-2 rounded-2xl`} key={index}>{element}</span>            })}
        </div>
        <div className="blogBody mt-24 p-4">
        <p className='text-left text-3xl mt-9' dangerouslySetInnerHTML={{__html: blog.body}}/>
         </div>
              <div className="comments mt-11">
                <h2 className='text-white text-3xl'>Comments</h2>
        {comments.length ===0? <p className='text-slate-400'>No comments yet!</p>:comments.map((element,index)=>{
            let {author} = element
            return  <div className='my-4 text-white p-5 bg-zinc-900 hover:bg-white hover:text-black transition ease-in rounded-lg hover:border-1 '>
                <p className='text-xl font-bold mb-4'>{author.firstName} {author.lastName} <span className = "font-light opacity-40 text-base">@{author.username}</span> </p>
                <div className='flex justify-between'>
                <p className=''> {element.body} </p>
                <span onClick={()=>deleteComment(element._id)}  className = {author._id === user._id?' text-xl ml-32 text-right hover:scale-125':'hidden'}>{<AiIcons.AiFillDelete/>}</span>
                </div>
            </div>
         })}
         <input type="text" onChange={(e)=>setComment(e.target.value)} placeholder='Add Comment' className='border-0 focus:outline-none border-b-2 bg-transparent w-full text-xl mt-5'/>
         <button type="button" onClick={postComment} class="text-white mt-7 bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:hover:bg-yellow hover:text-black transition ease-in dark:focus:bg-purple">Post Comment</button>
         </div>
        </div>

    </Fragment>
  )
}
