import React, { useState,useEffect } from 'react'
import {InfinitySpin,MutatingDots} from "react-loader-spinner"
const Preloader = () => {
 const[loading,setLoading]= useState(false)
    useEffect(()=>{
       setLoading(true)
       setTimeout(()=>{
        setLoading(false)
       },5000)
    },[])
  return (
    <div>
        {
        loading?
        <MutatingDots color={"blue"} loading={loading} size={150}/>
        :
        <></>
        }
    </div>
  )
}

export default Preloader