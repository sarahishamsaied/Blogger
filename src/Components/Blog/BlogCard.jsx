import React,{Fragment, useContext, useState} from 'react'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { ReadingListStore } from '../../Context/ReadingListContext'
import axios from 'axios'
export default function BlogCard({title,nUpVotes,nComments,date,tags,nDownVotes,name,id,setBookmarks}) {
  const {setReadingList,readingList} = useContext(ReadingListStore)
  const post = async()=>{
    console.log("post")
    const response = await axios.patch(`http://localhost:5000/addToReadingList/62d3da68678ae4ad9f6f9fdf/${id}`);
    console.log(response)
}
  const handleBookMark = ()=>{
    setBookmark(!bookmark)
    if(!bookmark){
      setReadingList((prevState)=>[...prevState,title]);
      console.log(readingList)
      post()
    }else{
      setReadingList((prevState)=>prevState.filter((element)=>element!==title))
    }
  }
  const navigate = useNavigate()
  const [bookmark,setBookmark] = useState(false)
  let color = -1;
  const colors = ['text-pink-500','text-sky','text-purple','text-yellow']
  return <Fragment>
    <section className='p-11 cursor-pointer blogCard m-auto mb-11 shadow-2xl rounded-lg w-full  transition-all ease-in'>
    <div className="title "  onClick={()=>navigate(`/blogDetails/${id}`)}>
      <div className='flex'>
      <span className='icon bg-purple mr-5 rounded-full'>  {name&&name[0]}</span> 
      <h2 className='font-bold text-2xl mb-5 flex mt-2'> {name&&name}</h2>
      </div>

        <h2 className='text-white text-2xl'>{title}</h2>
    </div>
    <div className="tags p-3 mt-7">
    {tags.map((element,index)=>{
      if(color === (tags.length)-1)
      color = -1
      color++;
      return  <span onClick = {()=>navigate(`/filter/${element}`)} key={index} className = {` ${colors[color]} hover:bg-gray-800 hover:scale-110 transition-all bg-zinc-900 px-4 ease-in rounded-full p-1 cursor-pointer mr-5`}>#{element}</span>
    })}
    </div>

    {/* <div className="line border-1 border-zinc-800 mt-5"></div> */}
    <div className='flex justify-between p-5'>
    <div className="footer font-extralight opacity-90 w-full shadow-lg mt-4 flex justify-start">
    <span className='mr-4 text-lg'><AiIcons.AiOutlineComment/></span>
    <h5 className='mr-5'> {nComments}  comments</h5>
    <span className='mr-4 text-lg'><AiIcons.AiOutlineLike/></span>
    <h5 className='mr-5'> {nUpVotes}  Up Vote(s)</h5>
    <span className='mr-4 text-lg'><AiIcons.AiOutlineDislike/></span>
    <h5 className='mr-5'>{nDownVotes}  Down Vote(s)</h5>
    </div>
    <button className='focus:text-white' onClick={()=>{
          handleBookMark()
    }}>
    <BsIcons.BsFillBookmarkFill className={bookmark?"opacity-100 text-2xl mt-5 hover:opacity-100 hover:scale-110 transition ease-in ":'text-2xl mt-5 opacity-50 hover:opacity-100 hover:scale-110 transition ease-in'}/>
    </button>
    </div>

    <div className="date mt-7">
    <p className='text-white opacity-50'>{date}</p>
    </div>
    </section>
    
  </Fragment>
}
