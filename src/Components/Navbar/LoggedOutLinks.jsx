import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoggedOutLinks() {
    const navigate = useNavigate()
  return (
    <button onClick={()=>navigate("/signup")} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:hover:bg-yellow hover:text-black transition ease-in dark:focus:bg-purple">Get started</button>
    )
}
