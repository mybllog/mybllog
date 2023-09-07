import React from 'react'
import Carousel from "@itseasy21/react-elastic-carousel"
import hp from "../Assests/img/1 (1).jpg"
import dell from "../Assests/img/1 (2).jpg"
import laptop from "../Assests/img/1 (3).jpg"
import desktop from "../Assests/img/1 (4).jpg"
import desktop3 from "../Assests/img/1 (5).jpg"
import desktop4 from "../Assests/img/1 (6).jpg"
import desktop5 from "../Assests/img/1 (7).jpg"
import desktop6 from "../Assests/img/1 (8).jpg"
import desktop7 from "../Assests/img/1.jpg"
const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  
  return (
    <div className='flex absolute top-40  align-middle h-full w-full  m-0  sm:text-center'>
      <Carousel responsive={responsive}>
       <div className='flex gap-2 h-full'>
      <div className='border bg-white w-80 h-full rounded-xl'> 
       <div className="relative justify-center text-center">
       <img src={laptop} alt="laptop" className="object-contain w-40 relative left-10 m-10 "/>
       <div className="border border-solid w-full m-0 divider"></div>
       <text className="text-black">Laserjet m50</text>
       </div>
      </div>
      <div className='border bg-white w-80 h-full rounded-xl'> 
      <div className="relative justify-center text-center">
       <img src={dell} alt="laptop" className="object-contain w-40 relative left-10 m-10"/>
       <div className="border border-solid w-full m-0 divider"></div>
       <text className="text-black">Laserjet m50</text>
       </div>
        </div>
      <div className='border bg-white w-80 h-full rounded-xl'> 
      <div className="relative justify-center text-center ">
       <img src={hp} alt="laptop" className="object-contain w-40 relative left-10 m-10 "/>
       <div className="border border-solid w-full m-0 divider"></div>
       <text className="text-black">Laserjet m50</text>
       </div>
        </div>
       </div>
      <div className='flex gap-2 h-full'>
      <div className='border bg-white w-80 h-full rounded-xl'> 
      <div className="relative justify-center text-center ">
       <img src={desktop} alt="laptop" className="object-contain w-40 relative left-10 m-10 "/>
       <div className="border border-solid w-full m-0 divider"></div>
       <text className="text-black">Laserjet m50</text>
       </div>
        </div>
      <div className='border bg-white w-80 h-full rounded-xl'> 
      <div className="relative justify-center text-center">
       <img src={desktop3} alt="laptop" className="object-contain w-40 relative left-10 m-10"/>
       <div className="border border-solid w-full m-0 divider"></div>
       <text className="text-black">Laserjet m50</text>
       </div>
        </div>
      <div className='border bg-white w-80 h-full rounded-xl'> 
      <div className="relative justify-center text-center">
       <img src={desktop4} alt="laptop" className="object-contain w-40 relative left-10 m-10  "/>
       <div className="border border-solid w-full m-0 divider"></div>
       <text className="text-black">Laserjet m50</text>
       </div>
        </div>
      </div>
      <div className='flex gap-2 h-full'>
      <div className='border bg-white w-80 h-full rounded-xl'> 
      <div className="relative justify-center text-center ">
       <img src={desktop5} alt="laptop" className="object-contain w-40 relative left-10 m-10 "/>
       <div className="border border-solid w-full m-0 divider"></div>
       <text className="text-black">Laserjet m50</text>
       </div>
        </div>
      <div className='border bg-white w-80 h-full rounded-xl'> 
      <div className="relative justify-center text-center">
       <img src={desktop6} alt="laptop" className="object-contain w-40 relative left-10 m-10 "/>
       <div className="border border-solid w-full m-0 divider"></div>
       <text className="text-black">Laserjet m50</text>
       </div>
        </div>
      <div className='border bg-white w-80 h-full rounded-xl'> 
      <div className="relative justify-center text-center ">
       <img src={desktop7} alt="laptop" className="object-contain w-40 relative left-10 m-10"/>
       <div className="border border-solid w-full m-0 divider"></div>
       <text className="text-black">Laserjet m50</text>
       </div>
        </div>
      </div>
      </Carousel>
    </div>
  )
}

export default Slider
