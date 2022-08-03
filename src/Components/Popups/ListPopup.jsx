import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function ListPopup({list,type}) {
  const navigate = useNavigate();
  console.log(list)
  return (
    <div className='absolute z-50 popup rounded-2xl bg-zinc-800 text-white overflow-y-scroll p-11'>
        <button className='absolute top-4 text-2xl cursor:poiner right-7 hover:bg-zinc-300 hover:text-black transition ease-in rounded-full px-3 '>x</button>
        <h1 className='text-2xl'>{type}</h1>
        {list.map((element)=>{
            return <div className='p-3 bg-zinc-600 rounded-lg mt-5 cursor-pointer hober:bg-slate-900 transition-all ease-in' onClick={()=>{navigate(`/user/${element.username}`,{replace:true});navigate(0)}}>@{element.username}</div>

        })}
    </div>
  )
}
