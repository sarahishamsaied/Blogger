import React,{Fragment} from 'react'
import * as AiIcons from 'react-icons/ai'
export default function BlogCard({title,nUpVotes,nComments,date,tags,nDownVotes}) {
  return <Fragment>
    <section className='p-11 cursor-pointer blogCard m-auto mb-11 border-2 rounded-lg  transition-all ease-in'>
    <div className="title">
        <h2 className='text-white text-3xl'>{title}</h2>
    </div>
    <div className="tags p-3 mt-7">
    {tags.map((element,index)=>{
      return  <span key={index} className = " hover:bg-gray-800 hover:scale-110 transition-all ease-in rounded-full p-1 cursor-pointer mr-5"><span className='text-purple'>#</span>{element}</span>
    })}
    </div>


    <div className="footer font-extralight opacity-90 w-full shadow-lg mt-11 flex justify-start">
    <span className='mr-4 text-xl'><AiIcons.AiOutlineComment/></span>
    <h5 className='mr-5'> {nComments}  comments</h5>
    <span className='mr-4 text-xl'><AiIcons.AiOutlineLike/></span>
    <h5 className='mr-5'> {nUpVotes}  Up Vote(s)</h5>
    <span className='mr-4 text-xl'><AiIcons.AiOutlineDislike/></span>
    <h5 className='mr-5'>{nDownVotes}  Down Vote(s)</h5>
    </div>
    <div className="date mt-7">
    <p className='text-white opacity-50'>{date}</p>
    </div>
    </section>
    
  </Fragment>
}
