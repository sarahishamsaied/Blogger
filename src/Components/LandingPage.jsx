import React, { Fragment } from 'react'
import Navbar from './Navbar/Navbar'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Typed from 'typed.js';
import { useRef,useEffect } from 'react';
import logo from '../Images/logo3.png'
import Lottie from 'react-lottie';
import animationData from '../lotties/worldMap.json';
export default function LandingPage() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    const typedElement = useRef(null);
    const FadeUp = batch(Fade(), Move(), Sticky());
    useEffect(() => {
      const typed = new Typed(typedElement.current,{
        strings:["welcome to blogger."],
        typeSpeed: 80,
        cursorChar:""
      })
    
      return () => {
        typed.destroy();
      }
    }, [])
    
    return <Fragment>
    <Navbar/>
    <div className='bg-black'>
    <ScrollContainer>
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <h2 ref={typedElement} className='text-7xl text-center font-bold text-white'>welcome to blogger<span className='text-purple'>.</span> </h2>
    </Animator>
  </ScrollPage>
  <ScrollPage>
        <Animator animation={MoveIn(0, 1000)}><div className=' bg-black flex justify-center align-middle h-screen'> <h1 className='text-7xl m-auto text-center font-bold text-yellow'>publish your professional blogs</h1> </div></Animator>
  </ScrollPage>
  <ScrollPage>
    <div className='bg-purple'>
    <Animator animation={batch(MoveIn(300, 1500))}><h2 className=' top-80 p-24 h-screen text-white text-9xl font-bold flex justify-center align-middle'> with high flexibilities </h2></Animator>
    </div>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={batch(FadeUp,MoveIn(0,1000))}>
      <div className='h-screen w-screen bg-black '> <img src={logo} alt="" style={{width:'50%'}} className='m-auto' /> </div>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-900, 0)}> <h1 className='text-8xl text-white font-bold'>Know your audience</h1> </Animator>
      </span>
    </div>
  </ScrollPage>
  <ScrollPage>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(900, 0)}> <h1 className='text-8xl text-white font-bold'>Customize your own blog</h1> </Animator>
      </span>
    </div>
  </ScrollPage>
  <ScrollPage>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
      <Animator animation={MoveIn(-900, 0)}><h1 className='text-8xl text-white font-bold'>save your favorite blogs</h1></Animator>
      </span>
    </div>
  </ScrollPage>
  <ScrollPage>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
        <Animator animation={MoveIn(900, 0)}> 
         <div className='flex justify-start align-middle'>
            <h1 className='text-8xl text-white font-bold m-auto'>Publish it<span className='text-purple'>!</span></h1>
            <Lottie  options={defaultOptions} width = {500} height = {500}/>
        </div> 
        </Animator>
    </div>
  </ScrollPage>
 
</ScrollContainer>
    </div>
    
  </Fragment>
}
