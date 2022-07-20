import React, { useEffect ,useState} from 'react'
import GetCookie from '../../Hooks/GetCookie'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import BlogCard from '../Blog/BlogCard'
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
export default function Home() {
    const navigate = useNavigate()
    const user = useContext(AuthContext)
    const [userData,setUserData] = useState(user)
    const [following,setFollowing] = useState([])
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{

      async function getFollowing(){
        const token = JSON.parse(GetCookie("token"));
        console.log(token)
        const {id} = jwtDecode(token)
        const {data} = await axios.get(`http://localhost:5000/getFollowing/${id}`);
        setFollowing(data.data.blogs)
        setBlogs(data.data.blogs)
      }
      getFollowing()
    },[])
  
  return (
    <div className='bg-black text-white '>
        <div className="homeHeader flex justify-between p-24">
        {/* <h1 className='font-bold text-4xl'>Welcome back. {user.firstName}</h1> */}
        <button onClick={()=>navigate("/createPost")} type="button" class="text-white bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:hover:bg-yellow hover:text-black transition ease-in dark:focus:bg-purple">Create Post</button>
        </div>
        {/* <div className={!user.profilePic?'border-2 rounded-full icon  bg-purple text-white':'hidden'}> <span className=' w-full   text-center m-auto'>{user.username[0]}</span> </div> */}
        <div className="blogs grid grid-flow-row place-content-center ml-24 mt-24">
    {blogs&&blogs.map((element,index)=>{
      return <BlogCard title  = {element.title} tags = {element.tags} nComments = {element.comments.length} nUpVotes = {element.upVotes.length}  nDownVotes = {element.downVotes.length} date = {element.createdAt} key = {index}/>
    })}
        </div>
 
    
    </div>
  )
}
