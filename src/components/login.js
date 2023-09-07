import React ,{useState}from 'react'
import  Manifold from "../Assests/img/Manifold.jpeg"
import  name from "../Assests/img/blue.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faEyeSlash
} from '@fortawesome/free-regular-svg-icons'
import { NavLink } from 'react-router-dom'
export const Login = () => {
   const [showPassword, setShowPassword] = useState(false)
   const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }
    return (
    <div className='flex bg-gray-600 max-h-screen xl:h-screen'>
        <div className=' w-10/12 h-5/6 absolute object-center top-16  rounded-xl left-20 " '>
          <div className='grid grid-cols-2  max-w-max  w-screen h-screen' style={{ background: "linear-gradient(45deg, #87adfe, #ff77cd)",}}>
            <div className=' w-9'>
              
              <img src ={Manifold} alt='laptop' />
              <div className='absolute left-48 top-8' style={{fontFamily:'inher'}}><text className='text-center font-extrabold text-3xl  tracking-widest text-white'>Login</text></div>
              <div className='flex absolute  top-20 left-9 justify-center w-96 h-64'>     
              <img src ={name} alt='pub'  />
              </div>
             <div className='flex absolute top-96 left-16' style={{fontFamily:'inher'}}><text className='relative text-center text-white'>Empowering Shopping Experiences.</text></div>
            </div>
              
            <div className=''>
              <div className='flex relative bg-white h-full'>
              <div className='grid grid-cols-2  absolute  m-0 border w-40 h-10  left-80 ' style={{ background:  "linear-gradient(45deg, #87adfe, #ff77cd)", fontFamily:'inher'}}>
             <NavLink to = "/business"><text className=' relative text-center top-2 left-2 text-white'>signup</text></NavLink>
                <text className=' relative text-center top-2 text-white'>login</text>
               </div>
               <div className='relative gap-0 m-16 top-4 space-y-3 pr-3' >
                  <div className='relative justify-center left-28'>
                    <label>Email:</label>
                    <input className='w-full bg-gray-100 border border-gray-300 rounded p-2' type='text' placeholder='email' />
                  </div>
                  <div className='relative justify-center left-28'>
                    <label>Password:</label>
                    <input className='w-full bg-gray-100 border border-gray-300 rounded p-2' type='text' placeholder='password' />
                    <div className="flex absolute right-0 text-gray-600 items-center pr-5 pb-4 top-2 my-3 h-full cursor-pointer">
                  <button onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon
                      icon={showPassword ? faEye : faEyeSlash}
                      style={{ fontSize: 20, color: "pink" }}
                    />
                  </button>

                </div>
                  </div>
               
               
                  <div className='relative top-8 left-48  w-28 h-14 rounded ' style={{ background:  " #87adfe", fontFamily:'inher'}}> 
                      <button className='w-full bg-gray-100 border border-gray-300 rounded p-2' type='text' onClick={{}} className='absolute top-4 text-center left-8 text-white '>Login</button>
                    </div>

               </div>
              
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

