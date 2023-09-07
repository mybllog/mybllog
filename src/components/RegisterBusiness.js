import React ,{useState}from 'react'
import  Manifold from "../Assests/img/Manifold.jpeg"
import  d from "../Assests/img/d.jpeg"
import business from "../Assests/img/business.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faEyeSlash,
  faArrowAltCircleRight
} from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router-dom'
export const RegisterBusiness = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [isChecked, setIsChecked] = useState(true)
   const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }
    const checkBox = (e) =>{
      e.preventDefault();
      setIsChecked(!isChecked)
    }
  return (
   <div className='flex bg-white'>
      <div className='grid grid-cols-2 absolute top-5 left-12  gap-0  border w-11/12 h-full'>
      <div className='flex w-full'>
      <img src ={business} alt='business' className='w-full bg-cover bg-center'/>
        <div className='absolute'>
        <img src ={Manifold} alt='manifold' className='w-8 m-9'/>
        </div>
       </div>
      <div className='m-9 text-center'>
         <text className=' font-bold text-xl '>Registration</text>
         <div className='absolute  space-y-8 m-12'> 
         <div className='grid grid-cols-2 gap-8'>
           <div>  <input type='text' className='border text-center  w-48 h-10' placeholder='company name'/> </div>
          <div><input type='text' className='border text-center  w-48 h-10' placeholder='company type'/> </div>
         </div>
          <div> <input type='text' className='border text-center w-96 h-10' placeholder='registration number'/></div>
           <div><input type='text' className='border text-center w-96 h-10' placeholder='company address'/></div> 
           <div> <input type='text' className='border text-center w-96 h-10' placeholder='contact person'/></div>
           <div><input type='text' className='border text-center w-96 h-10' placeholder='email'/></div> 
            <div><input type='text' className='border text-center w-96 h-10' placeholder='password'/></div> 

            <div className='absolute'><input type='checkbox' checked={isChecked} onChange={checkBox}/></div>

            <div className='relative top-14 h-10 border bg-amber-400 rounded-lg '><button type='text' onClick={{}} className=' relative top-2 text-center text-white'>register</button></div>
         </div>
      </div>
      </div>
   </div>
  
  )
}
