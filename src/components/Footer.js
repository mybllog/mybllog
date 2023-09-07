import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedinIn
}from "@fortawesome/free-brands-svg-icons"
import Subscribe from "../components/borders";
 const Footers = () =>{
  return(
    <div className='flex'>
    <footer className='relative  top-96  sm:my-96 w-full  sm:w-full  bg-gray-300 border'>
      <div> <Subscribe/></div>
      <div className=' grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 sm:p-10 relative '>
          <div className=' mb-28 sm:mb-0 '>
            <div className=' absolute m-6 border bg-red-800 w-9 top-16 my-8'></div>
            <div className='absolute top-5 m-16 font-bold'><text>Stay Connected</text></div>
            <div className='flex left-14 absolute top-32 space-x-4'>
            <div className='rounded-3xl bg-pink-600 h-10 w-10'><a href='https://www.instagram.com/manifoldcomputers/'><FontAwesomeIcon icon={faInstagram} onClick={{}} className=" absolute justify-center m-3" style={{fontSize:20,color:'white'}}/></a> </div> 
              <div className='rounded-3xl bg-pink-600 h-10 w-10'><a href="https://www.facebook.com/manifoldcomputerslimited/"><FontAwesomeIcon icon={faFacebook} className=' absolute justify-center  m-3' style={{fontSize:20,color:'white'}} /></a></div>  
              <div className='rounded-3xl bg-pink-600 h-10 w-10'><a href='https://www.twitter.com/Manifold_Ltd/'></a><FontAwesomeIcon icon={faTwitter} className=' absolute justify-center  m-3' style={{fontSize:20,color:'white'}}/></div> 
            <div  className='rounded-3xl bg-pink-600 h-10 w-10'><a href='https://www.linkedin.com/company/manifold-computers-limited/'><FontAwesomeIcon icon={faLinkedinIn} className=' absolute justify-center  m-3' style={{fontSize:20, color:'white'}} /></a></div>  
            </div>
          </div>
          <div className='grid grid-cols-3 gap-11 sm:gap-28 relative m-16 top-5'>
              <div className=' space-y-2'>
                <div><text className=' text-xl font-bold'>Company</text></div>
                <div className=''><text className="text-sm text-gray-500">About us</text></div>
                <div className=''><text className='text-sm text-gray-500'>Why choose us</text></div>
                <div className=''><text className='text-sm text-gray-500'>Pricing</text></div>
                <div className=''><text className='text-sm text-gray-500'>Testimonial</text></div>
              </div>
              <div className=' space-y-2'>
                <div> <text className=' text-xl font-bold'>Resources</text></div>
                <div className=''><text className="text-sm text-gray-500">Privacy Policy</text></div>
                <div className=''><text className='text-sm text-gray-500'>Terms and Condition</text></div>
                <div className=''><text className='text-sm text-gray-500'>Pricing</text></div>
                <div className=''><text className='text-sm text-gray-500'>Contact us</text></div>
              </div>
              <div className=' space-y-2'>
                <div> <text className=' text-xl font-bold'>Products</text></div>
                <div className=''><text className="text-sm text-gray-500">About us</text></div>
                <div className=''><text className='text-sm text-gray-500'>Why choose us</text></div>
                <div className=''><text className='text-sm text-gray-500'>Pricing</text></div>
                <div className=''><text className='text-sm text-gray-500'>Testimonial</text></div>
              </div>
          </div>
          <div className='text-center sm:absolute sm:top-72'><text className='text-sm text-gray-500 sm:m-8 sm:relative sm:top-20'> &copy; 2023 Manifold ecommerce website| All right reserved</text></div>
      </div>
    </footer>
</div>
  )
 }
 export default Footers