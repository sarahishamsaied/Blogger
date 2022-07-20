import React, { useState } from 'react'

export default function Card({type,setInterests,interests}) {
    const [added,setAdded] = useState(false);
    const handle = (e)=>{
        console.log(type)
        setAdded(!added);
        setInterests([
          ...interests,
          type
        ]);
    }
  return <div className = "hover:font-bold  mb-3 mr-3 card text-center rounded-md hover:scale-105 hover:text-purple transition ease-out">
  <h1 className='mt-5'>{type}</h1>
  <button onClick={handle}  type="button" class="text-white mt-20 bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple dark:hover:bg-yellow hover:text-black transition ease-in dark:focus:bg-purple">{added?'Added':'Add'}</button>
</div>
}
