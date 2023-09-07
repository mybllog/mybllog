import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faEnvelope,
  faMap,
  faAddressBook,
  faEnvelopeOpen
} from '@fortawesome/free-regular-svg-icons';
import { InfinitySpin, MutatingDots, Grid } from 'react-loader-spinner';
import getintouch from '../Assests/img/get in.jpeg';
import touch from '../Assests/img/touch.jpeg';
import Footers from "../components/Footer"
import MapComponent from "../components/Map"

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    
        <div className="font-roboto-slab">
          <div>
            <div className='flex flex-col md:flex-row'>
              <img src={getintouch} alt='getintouch' className='w-full object-cover md:w-screen' />
              <div className='text-center sm:text-left mx-5 my-5 space-y-2 md:absolute md:top-60 right-0 left-0 m-5'>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-pink-500'>GET IN TOUCH</h1>
                <p className='text-xs sm:text-xl text-white font-light'>
                  Your questions are our priority.<br /> Let's bridge the gap between your curiosity and clarity.<br /> Reach out to us, and together, we'll navigate the solutions you're seeking.
                </p>
              </div>
            </div>
            <div className='grid md:grid-cols-2 w-full md:w-11/12 mx-auto relative top-60'>
              <div className='shadow-xl bg-white py-9 md:py-12 px-6 md:px-10'>
                <h2 className='text-pink-300 text-4xl font-extrabold m-3'>Contact Us</h2>
                <form className='my-8 space-y-6 m-3'>
                  <div>
                    <label className='text-white text-lg'>Name</label>
                    <input
                      type='name'
                      placeholder='Enter your full name'
                      className='border-b-2 border-b-solid border-black border-b-black w-full h-10'
                    />
                  </div>
                  <div>
                    <label className='text-white text-lg'>Email</label>
                    <input
                      type='Email'
                      placeholder='Enter your Email'
                      className='border-b-2 border-b-solid border-b-black border-white w-full h-10'
                    />
                  </div>
                  <div>
                    <label className='text-white text-lg'>Message</label>
                    <textarea
                      placeholder=''
                      className='h-20 w-full border-b-2 border-b-solid border-b-black border-white'
                    />
                  </div>
                  <button type='submit' className='uppercase hover:bg-pink-400 h-8 active:bg-blue-300 focus:cursor-pointer border bg-pink-500'>
                    Send Message
                  </button>
                </form>
              </div>
              <div className='flex text-black'>
                <div className='md:absolute top-5 mx-8 md:mx-12'>
                  <h2 className='uppercase text-3xl font-extrabold'>How can we help you ?</h2>
                  <p className='text-center md:text-left my-8'>Message us to be able to assist you</p>
                  <div className='my-4 md:my-8 space-y-4'>
                    <div className='flex items-center'>
                      <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
                      <div>
                        <p>reactus@manifoldcomputers.com</p>
                        <p>ghana@manifoldcomputers.com</p>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <FontAwesomeIcon icon={faAddressBook} className='mr-2' />
                      <p>+234 901 853 1055</p>
                    </div>
                    <div className='flex items-center'>
                      <FontAwesomeIcon icon={faMap} className='mr-2' />
                      <div>
                        <p>no 22, Awoyemi str, off ogunlana drive, surulere.</p>
                        <p>The Leadway Marble House 1 Alfred Rewane Rd, Ikoyi, Lagos, Nigeria.</p>
                        <p>35, Trans-Amadi Road, Rumuobioakani, Port-Harcourt, Rivers State.</p>
                        <p>WAEC House 10 Zambezi Crescent Maitama, Abuja FCT.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <MapComponent />
                <div className='grid grid-cols-2 relative top-96 shadow-lg z-30 justify-center left-40 w-full shrink-0'>
                  <div>
                    <img src={touch} alt='touch' className='h-full w-full' />
                  </div>
                  <div className='bg-white w-full'>
                    <div className='m-5'>
                      <FontAwesomeIcon icon={faAddressBook} />
                      <p>+234 901 853 1055</p>
                    </div>
                    <div className='m-5'>
                      <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
                      <div>
                        <p>reactus@manifoldcomputers.com</p>
                        <p>ghana@manifoldcomputers.com</p>
                      </div>
                    </div>
                    <div className='m-5'>
                      <FontAwesomeIcon icon={faMap} className='mr-2' />
                      <div>
                        <p>no 22, Awoyemi str, off ogunlana drive, surulere.</p>
                        <p>The Leadway Marble House 1 Alfred Rewane Rd, Ikoyi, Lagos, Nigeria.</p>
                        <p>35, Trans-Amadi Road, Rumuobioakani, Port-Harcourt, Rivers State.</p>
                        <p>WAEC House 10 Zambezi Crescent Maitama, Abuja FCT.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative top-96 py-80 text-center'>
              <p className='text-xl text-pink-400 '>Our Services</p>
              <p className='text-5xl font-extrabold uppercase'>Why choose us</p>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='border w-80  h-60 relative top-4 m-8'>

                </div>
                <div className='border w-80  h-60 relative top-4 m-8'></div>
                <div className='border w-80  h-60 relative top-4 m-8'></div>
                {/* Service Cards */}
                {/* ... */}
              </div>
            </div>
          
          </div>
        </div>
     
  );
};
