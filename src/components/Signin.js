import React from 'react'
import Manifold from '../Assests/img/Manifold.jpeg'
import { useState } from 'react'
import s from '../Assests/img/s.jpeg'
import { NavLink } from 'react-router-dom'
const Signin = () => {
  const [isChecked, setIsChecked] = useState(false)

  const check = (e) =>{
    e.preventDefault()
    setIsChecked(!isChecked)
  }
  return (
    <div  className='flex absolute   bg-gray-300  w-screen h-screen 'style={{height: 800,}}>
      <div className=' relative'>
      <div className='grid grid-cols-2 relative  left-10 top-8  border w-11/12 rounded-xl  bg-white shadow-lg' style={{height: 650,}}>
            <div>
              <div className=' w-16 m-28'><img src={Manifold} alt='manifold'/></div>
              <div className=' absolute m-28 top-10'>
                 <text className=' font-bold text-2xl'>Create an account!</text>
                 <div className=''> <text className=' font-light'>Enter the information you entered while registering.</text></div>
                 </div>
              <div className='m-28 space-y-4'>
              <div>
                  <label>Name</label>
                 <div> <input type='text' className=' bg-white border w-96 rounded-lg h-10' /></div>
                </div>
                <div>
                  <label>Email</label>
                 <div> <input type='text' className=' bg-white border w-96 rounded-lg h-10' /></div>
                </div>
                <div className=''>
                  <label>Password</label>
                 <div> <input type='text' className=' bg-white border w-96 rounded-lg h-10' /></div>
                </div>
                <div className=' '>
                    <div className=' space-x-2'>
                      <input type='checkbox' checked={isChecked} onChange={check}/>
                      <text className=''>i have read and agree with the Terms and Privacy Policy</text>
                    </div>
                    
                </div>
                <div className=' relative top-3 h-10 w-96 rounded-lg bg-pink-400'><button type='button' className=' absolute top-2 text-center left-44 text-white'>Register</button></div>
                <div className=' relative top-5 '> <text className=' text-center m-12'>Don't have an account ? <NavLink to = "/newuser"><span className=' text-pink-300'>Log in</span></NavLink></text></div>
              </div>
              
            </div>
            
              <div className=' ' ><img src={s} alt='s' className=' bg-cover bg-center'style={{ height:650}} /></div>
            
        </div>

      </div>
    </div>
  )
}

export default Signin
