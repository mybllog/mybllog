import React, {useRef} from 'react'
import manifold from "../Assests/img/Manifold.jpeg"
import manifoldaboutus from "../Assests/img/manifoldaboutus.jpeg"
import thinker from "../Assests/img/like_1067346.png"
import balance from "../Assests/img/balance_994414.png"
import smart from "../Assests/img/brainstorming_8594008.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
 faCircleDown,
 faArrowAltCircleRight,
 faEnvelope
} from "@fortawesome/free-regular-svg-icons"
import {
 faLinkedin,
  faTwitter,
  faMicrosoft,
  
 
} from "@fortawesome/free-brands-svg-icons"
import {
   faArrowRight,
   faQuoteLeft,
   faQuoteRight
}from "@fortawesome/free-solid-svg-icons"

import m from "../Assests/img/Dh.png"
import n from "../Assests/img/md.png"
import w from "../Assests/img/uju.jpg"
import v from "../Assests/img/technology-trends-2020-1280x640.jpg"
import r from "../Assests/img/rotimi.jpg"
import Footers from "../components/Footer"
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import Slider from "../components/Carousels"
import Sliders from './Carous'
import "./Abouts.css"
const scrollToPageEnd = (e,elementRef) =>{
   
  elementRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
}
const Abouts = () => {
  
  const navigate = useNavigate
  
  const bottomRef = useRef(null);
  console.log("bottomRef:", bottomRef)

  const curveText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="texts span" style={{ transform: `rotate(${(index / text.split('').length) * 360}deg)` }}>
        {char}
      </span>
    ));
  };
   

  return (
   
      <div className='flex' style={{fontFamily:' Roboto Slab'}}>
        <div>
          <div className='flex flex-col md:flex-row w-screen'>
           <img src={v} alt="manifold" className='w-screen'/>
           <div className='absolute text-center mt-16 md:mt-0 md:ml-8 md:top-1/2 md:transform -translate-y-1/2 space-y-4 text-white'>
           <p className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold'>About Us</p>
          <div className=''>
            <text className=' text-xs sm:text-sm '>At Manifold, we are equipped with the <br className='sm:hidden'/> right team of experts to<p>ensure we deliver value to your business. Your 100%<p>Satisfaction is our Key Performance Indicator.</p></p></text></div>
           </div>
          </div>
          <div className='sm:flex md:flex-row sm:space-x-4 py-9 m-2 sm:m-16 xl:relative xl:mb-60  '>
            <div className=' space-y-4'>
            <text className=' opacity-60 text-xs sm:text-sm'>GROWING WITH OUR CLIENTS</text>
            <p className=' font-bold sm:font-extrabold sm:text-5xl'>30+ Years of <span className=' text-pink-400'>Experience</span></p>
            <p className=' text-sm sm:text-lg opacity-70'>Delivering Integrated Technology Solutions and Services</p>
            <p className=' text-xs sm:text-sm opacity-60'>Through the ever-evolving technology space, Manifold has continued to drive digital transformation for diverse organisations with simple, smart and scalable technology solutions. With expert IT services from Manifold, you have a well equipped team committed to helping you succeed in your <br/> business; solution-oriented professionals who you can count on to help <br/> you accomplish your goals.</p>
            <p className='text-xs sm:text-sm opacity-60'>Manifold Computers offers end-to-end IT solutions including hardware, <br/> software, network infrastructure, systems integration and provisioning and implementation of mission-critical IT solutions. By taking advantage of<br/> best practices across the industry, we provide best-in-class services.</p>
            </div>
            <img src = {manifoldaboutus} alt='manifold' className=' sm:w-full' />
          </div>
          <div className=' sm:m-8 space-y-8'>
            <div className='border w-16 bg-pink-800 '></div>
            <text className='text-2xl font-bold'>core values</text>
            <div className=' grid grid-cols-1 space-y-8 sm:space-y-0 sm:grid-cols-2 md:grid-flow-row'>
                <div className=' space-y-5'>
                 <div className='flex space-x-3'>
                   <div  className='border w-2 h-9 bg-pink-600  '></div>
                  <text className='font-bold text-2xl  text-pink-600'>Our Vision</text>
                 </div>
                  <div className=' border w-5/12  h-60 sm:w-11/12 sm:h-48 rounded-lg bg-white shadow-lg'>
                    <div className='flex m-8'>
                     <div> <FontAwesomeIcon icon={faQuoteLeft} className=' text-pink-600'/>
                      <text className=' text-xs sm:text-lg opacity-70'> To Become a leading IT System Integration <br/> Company in Africa and become the first choice of customers and employees. <FontAwesomeIcon icon={faQuoteRight} className=' text-pink-600'/></text></div>
                    <div className=' text-center'>
                       <img src={n} alt="n" className='w-28 rounded-full'/>
                       <p className='text-xs opacity-70'>Gbemiga Delano</p>
                       <p className='text-xs opacity-70'>MD/Founder</p>
                       </div>
                    </div>
                  </div>
                </div>
                <div className=' space-y-5'>
                <div className='flex space-x-3'>
                   <div  className='border w-2 h-9 bg-pink-600  '></div>
                  <text className='font-bold text-2xl  text-pink-600 '>Our Mission</text>
                 </div>
                  <div>
                  <div className=' border w-5/12  h-60 sm:w-11/12 sm:h-44 bg-white shadow-lg rounded-lg'>
                        <div className='m-3 '>
                        <FontAwesomeIcon icon={faQuoteLeft} className=' text-pink-600'/>
                      <text className=' text-xs sm:text-lg relative top-4 leading-4 opacity-70'>Knowledge-based True IT System Integration Company driving and delivering Simple, Smart, Scalable Technology solutions with the highest level to every business. We help our customers achieve their goals by providing them with the technology advice and products they need when they need them. <FontAwesomeIcon icon={faQuoteRight} className=' text-pink-600'/></text>
                        </div>
                  </div>
                  </div>
                </div>
            </div>
            </div>
            <div className=' m-6  space-x-3 text-pink-300 animate-pulse'>
              <text>Contact Us</text>
             <NavLink to='/contact'><FontAwesomeIcon icon={faArrowRight}/></NavLink> 
            </div>
            <div>
              <div className='flex m-9 space-x-2'>
              <div className='border w-2 h-9 bg-pink-600'></div>
              <text className='text-2xl font-bold text-pink-600'>Our core Values</text>
              </div>
              <div className='relative right-0 bg-pink-600 w-5/12 sm:w-8/12 h-64 sm:h-64  rounded-3xl shadow-gray-500 shadow-lg '>
                  <p className=' m-8 py-5 text-xs sm:text-lg text-white sm:leading-5'>The key to success in the modern age lies within a strong digital foundation. SMBs and Enterprise are experiencing tremendous growth with a continued demand of increased speed to market for products and services. As the nature of business changes, it is imperative that organizations maintain an agile approach to the market. Manifold Computers is here to guide and implement the technology changes needed to address your business needs. Manifold Computers offers end-to-end IT solutions including hardware, software, network infrastructure, systems integration and provisioning and implementation of mission-critical IT solutions. By taking advantage of best practices across the industry, we provide best-in-class services. Manifold has turnkey capabilities with an expert network of strategic foreign and local technical partners and manufacturers. Build a firm digital foundation with our service offering and expert consultations. Manifold helps ensure that the right decision is made, and your investments are optimized and leveraged to their fullest capacity.</p>
              </div>
            </div>
            <div className='relative border rounded-xl w-full h-full sm:w-full sm:h-auto bg-gray-300 top-56 sm:top-40 text-center'>
              <div className=' my-14 sm:font-extrabold text-white'>
                <text className=' text-lg sm:text-4xl'>Our Values</text>
                </div>
               <div className='grid  grid-cols-1 sm:grid-cols-3 gap-2 m-6'>
              <div className='border-box items-center'>
                <div className='flex align-middle justify-center relative text-center border  w-60 h-60 rounded-full'>
                <img src={thinker} alt='thinker' className='w-16 absolute left-20 my-16' />
               <div className="text">
              
              
                {curveText("Simple-operations-management-technology-capabilities")}
                
               
               </div>
                </div>
              
              </div>
                <div className=' h-56 text-white rounded-full shadow-lg  bg-gray-400 '>
             <img src={balance} alt='balance' className='w-16 m-10 mx-44'/>
             <text>Pursue scalable infrastructure to obtain sustainable potentialities.</text>
                </div>
                <div className=' h-56  text-white rounded-full shadow-lg bg-gray-400 '>
                <img src={smart} alt='smart' className=' w-16 m-10 mx-44'/>
                <text>Dynamically innovate technology to create a resilient infrastructure</text>
                </div>
               </div>
            </div>
            <div className=' space-y-40'>
              <div className='relative top-80 text-center' style={{fontFamily:' Roboto Slab'}}><text className=' text-4xl font-bold'>our Partners</text>
               <div className="relative top-10" style={{fontFamily:' Roboto Slab'}}><Sliders /></div>
              </div>
              </div>
              <div className=' space-y-40'>
              <div className='relative top-96 text-center'><text className=' text-4xl font-bold'>our Clients</text>
               <div className="relative top-10"><Sliders /></div>
              </div>
              </div>
            <div className='relative top-96 py-40 text-center'>
              <div className=' text-lg sm:text-4xl space-y-2'>
                <text className='font-extrabold'>Meet Our <span className=' text-pink-400'>Team</span></text>
                <p className=' text-sm font-light'>At Manifold, we are equipped with the right team of experts to ensure we deliver value to your business. Your 100% Satisfaction is our Key Performance Indicator.</p>
                </div>
              <div className='grid grid-cols-1 sm:grid-cols-4 gap-2 m-8'>
                  <div>
                    <div className=''>
                       <img src={n} alt="gbemiga" className=' w-40 sm:w-72  rounded-full '/>
                       <text className='opacity-70'>Gbemiga Delano</text>
                       <p className='opacity-70'>MD/Chief Executive Officer</p>
                       <div className=' space-x-2 opacity-70'>
                       <a href='https://www.linkedin.com/in/gbemiga-delano-66080620'  ><FontAwesomeIcon icon={faLinkedin} /></a> 
                       <FontAwesomeIcon icon={faTwitter} />
                       <a href='mailto:Gbemiga.Delano@manifoldcomputers.com'  ><FontAwesomeIcon icon={faEnvelope} /></a>
                       </div>
                       </div>
                  </div>
                  <div>
                  <div className='' >
                    <img src={m} alt="gbemiga" className='w-40 sm:w-72 rounded-full '/>
                    <text className='opacity-70'>Dharmesh Gupta</text>
                       <p className='opacity-70'>ED/Chief Operating Officer</p>
                       <div className=' space-x-2 opacity-70'>
                       <a href='https://www.linkedin.com/in/dharmeshgupta81'  ><FontAwesomeIcon icon={faLinkedin} /></a> 
                       <FontAwesomeIcon icon={faTwitter} />
                       <a href='mailto:dharmesh.gupta@manifoldcomputers.com'  ><FontAwesomeIcon icon={faEnvelope} /></a>
                       </div>
                      
                    </div>
                  </div>
                  <div>
                 <div className=' '> 
                 <img src={r} alt="gbemiga" className='w-40 sm:w-72 rounded-full'/>
                 <text className='opacity-70'>Rotimi Ayodele-oba</text>
                  <p className='opacity-70'>Chief Technology Officer</p>
                  <div className=' space-x-2 opacity-70'>
                  <a href='https://www.linkedin.com/in/rotimi-ayodele-oba'  ><FontAwesomeIcon icon={faLinkedin} /></a> 
                       <FontAwesomeIcon icon={faTwitter} />
                       <a href='mailto:rotimi.ayodele-oba@manifoldcomputers.com'  ><FontAwesomeIcon icon={faEnvelope} /></a>
                       </div>
                 </div>
                  </div>
                  <div>
                  <div className='' >
                    <img src={w} alt="gbemiga" className=' w-40 sm:w-72 rounded-full'/>
                    <text className='opacity-70'>Uju Nwobi-Oyekwere</text>
                    <p className='opacity-70'>Chief Financial Officer</p>
                    <div className=' space-x-2 opacity-70'>
                    <a href='https://www.linkedin.com/in/uju-nwaobi-onyekwere-fca-acca-a5411043'  ><FontAwesomeIcon icon={faLinkedin} /></a> 
                       <FontAwesomeIcon icon={faTwitter} />
                      <a href='mailto:uju.Onyekwere@manifoldcomputers.com'  ><FontAwesomeIcon icon={faEnvelope} /></a>
                       </div>
                    </div>
                  </div>
              </div>
            
            </div>
           
        </div>
      </div> 


  ) 
}

export default Abouts