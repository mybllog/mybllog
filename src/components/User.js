import React from 'react'
import Manifold from '../Assests/img/Manifold.jpeg'
import { useState } from 'react'
import s from '../Assests/img/s.jpeg'
import { NavLink } from 'react-router-dom'
const User = () => {
  const [isChecked, setIsChecked] = useState(false)

  const check = (e) =>{
    e.preventDefault()
    setIsChecked(!isChecked)
  }
  return (
    <div className='main' style={{height:'800'}}>
      <div className=' h-screen m-auto inset-0 lg:block w-screen'>
      <div className='grid grid-cols-2 relative  left-10 top-9  border w-11/12 rounded-xl  bg-white shadow-lg' style={{height: 600,}}>
            <div>
              <div className=' w-16 m-28'><img src={Manifold} alt='manifold'/></div>
              <div className=' absolute m-28 top-10'>
                 <text className=' font-bold text-2xl'>Welcome back!</text>
                 <div className=''> <text className=' font-light'>Enter the information you entered while registering.</text></div>
                 </div>
              <div className='m-28 space-y-4'>
                <div>
                  <label>Email</label>
                 <div> <input type='text' className=' bg-white border w-96 rounded-lg h-10' /></div>
                </div>
                <div className=''>
                  <label>Password</label>
                 <div> <input type='text' className=' bg-white border w-96 rounded-lg h-10' /></div>
                </div>
                <div className='grid grid-cols-2 '>
                    <div className=' space-x-2'>
                      <input type='checkbox' checked={isChecked} onChange={check}/>
                      <text className=''>Remember me</text>
                    </div>
                    <div>
                      <text className=' relative text-pink-400 text-end left-20'>Forget password?</text>
                    </div>
                </div>
                <div className=' relative top-7 h-10 w-96 rounded-lg bg-pink-400'><button type='button' className=' absolute top-2 text-center left-44 text-white'>Login</button></div>
                <div className=' relative top-9'> <text className=''>Already have an account ? <NavLink to ="/siginup"><span className=' text-pink-300'>Sign up</span></NavLink> </text></div>
              </div>
              
            </div>
            <div className='flex  relative '>
              <div className='flex w-full' style={{height:600}}><img src={s} alt='s'  className=' bg-cover bg-center'style={{ height:600}}/></div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default User
