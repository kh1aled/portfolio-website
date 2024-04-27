import React, { useEffect, useRef } from 'react'
import './Preloader.css'
const Preloader = () => {
    const pre = useRef()
     useEffect(()=>{
         window.addEventListener("load" , function(){
             pre.current.style.display = "none";
         })
     })
  return (
    <div className='preloader' ref={pre}>
        
    </div>
  )
}

export default Preloader
