import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars   
} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from 'react-router-dom'
const Menu = () => {
    const[isOpen, setIsOpen] = useState('')

    const toggleDown = (e) =>{
        e.preventdefault()
        setIsOpen(!isOpen)
    }

  return (
    <div>
        <div className=' sm:hidden md:hidden lg:hidden xl:hidden'>
            <FontAwesomeIcon icon={faBars} onClick={toggleDown}/>
            <>
            {isOpen && (

                <ul>
                  <NavLink to='/'><li>HOME</li></NavLink>  
                    <li>ABOUT US</li>
                    <li>SERVICES</li>
                    <li>CONTACT US</li>
                </ul>

            )}
            </>
            </div>
    </div>
  )
}

export default Menu