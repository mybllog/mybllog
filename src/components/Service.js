import React,{useState} from 'react'

 export const  DropdownModal =()=>{
    return (
        // ithem in the toogledropdown help session
        <div className=" flex absolute top-14 left-96 mx-40  w-56  bg-white border text-sm whitespace-break-spaces  rounded shadow-lg z-10">
          <ul className="justify-between block">
            <li>
              <a
                href="#"
                className="flex font-normal hover:bg-gray-100 text-left"
                style={{ paddingRight: 50, WebkitTextSizeAdjust: 100 }}
              >
                Products
              </a>
            </li>
            <li className="py-2">
              <a
                href="#"
                className="flex font-normal hover:bg-gray-100"
                style={{ paddingRight: 50 }}
              >
                place and track order
              </a>
            </li>
          
          </ul>
        </div>
      );
}

