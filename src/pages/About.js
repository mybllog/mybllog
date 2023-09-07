import React,{useState,useEffect} from 'react'
import { MapComponent} from '../components/Map'
import Abouts from '../components/Abouts'
import {InfinitySpin,MutatingDots,Grid} from "react-loader-spinner"
export const About = () => {
  const [ loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])
  return (
   <div>
     
        <Abouts />
      
      
     
    
     
        

    </div>
  )
}
