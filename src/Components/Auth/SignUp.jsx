import React from 'react'

export default function SignUp() {
  return (
    <div className='bg-black h-screen w-screen flex align-middle justify-center signUp'>
        <div className="form-container m-auto shadow-2xl ">
            <div className="stages relative flex justify-around align-middle">
                <div className = "stage1 font-bold stage border-2 hover:bg-slate-50 transition ease-in border-white rounded-full hover:border-purple hover:text-purple cursor-pointer px-5 py-3 text-white m-auto">
                    1
                </div>
                <div className = " stage2 font-bold stage border-2 hover:bg-slate-50 transition ease-in border-white rounded-full hover:border-purple hover:text-purple cursor-pointer px-5 py-3 text-white m-auto">
                    2
                </div>
                <div className = "stage3 font-bold stage border-2 hover:bg-slate-50 transition ease-in border-white rounded-full hover:border-purple hover:text-purple cursor-pointer px-5 py-3 text-white m-auto">
                    3
                </div>
            </div>
            <div className="content px-36">
            <h1 className = "test-white font-bold text-3xl text-white my-7">Welcome to <span className = "text-purple">&#60; </span>blogger! <span className = "text-yellow">/</span> <span className='text-purple'>&#62;</span> </h1>
            <label className = "text-white">Email</label>
        <input class=" mb-6 shadow appearance-none border rounded bg-transparent w-full hover:bg-white transition ease-in py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="email"/>
        <label className = "text-white">Username</label>
        <label className = "text-white">Password</label>
        <input class=" mb-6 shadow appearance-none border rounded bg-transparent w-full hover:bg-white transition ease-in py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="username"/>
        <label className = "text-white">Confirm Password</label>
        <input class=" mb-6 shadow appearance-none border rounded bg-transparent w-full hover:bg-white transition ease-in py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
       
            </div>
        
        </div>

    </div>

  )
}
