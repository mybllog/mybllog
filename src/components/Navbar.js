import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import Register from "../components/Register";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "typeface-cinzel-decorative";
import Manifold from "../Assests/img/Manifold.jpeg";
import {
  faCircleQuestion,
  faShoppingCart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";


const DropdownModal = () => {
  return (
    // ithem in the toogledropdown help session
    <div className=" flex relative  top-12 divide-x-8 right-36 w-56 h-40  bg-white border  px-4 text-sm whitespace-break-spaces  space-x-8 rounded shadow-lg z-10">
      <ul className="justify-between block">
        <li>
          <a
            href="#"
            className="flex font-normal hover:bg-gray-100 text-left"
            style={{ paddingRight: 50, WebkitTextSizeAdjust: 100 }}
          >
            Help Center
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
        <li className="py-2">
          <a
            href="#"
            className="flex hover:bg-gray-1000 text-sm"
            style={{ paddingRight: 50 }}
          >
            order cancellation
          </a>
        </li>
        <li className="border w-full"></li>
        <li className="">
          <button type="text" name="live chat" className="bg-blue-800 relative">
            Live chat
          </button>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  //toggle down where the dropdown help session is shown
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  //Navigation bar

  const location = useLocation

  return (
    <div className=" sm:flex w-full sm:w-screen  sticky top-0  bg-white shadow-lg z-50">
      <div className=" left-20 mx-10 my-2  w-28  " style={{ fontSize: 20 }}>
        <img src={Manifold} alt="Manifold" className=" top-0 " />
      </div>
     
      <div className="absolute hidden sm:block  left-48 my-3" style={{fontFamily:'serif'}}>
        <NavLink to="/business">business account</NavLink>
      </div>
      <div className="  sm:block">
        <div
          className="absolute ml-56  mx-9 top-4 left-40 font-sans  font-bold  hover:bg-pink-300"
          style={{
            fontSize: 10,
            fontFamily: "sans-serif",
            fontStyle: "Bold",
          }}
        >
          <NavLink to="/">HOME</NavLink>
        </div>
        <div
          className="absolute ml-60  mx-9 top-4  left-52 font-bold  hover:bg-pink-300"
          style={{ fontFamily: "sans-serif", fontSize: 10 }}
        >
          <NavLink to="/about">ABOUT US</NavLink>
        </div>
        <div
          className="absolute  ml-72 mx-9 top-4   left-64 font-bold  hover:bg-pink-300 hover:underline active:bg-pink-300 focus:outline-none focus:ring"
          style={{ fontFamily: "sans-serif", fontSize: 10 }}
        >
          <NavLink to = '/services'>SERVICES</NavLink>
        </div>
        <div
          className="absolute ml-80 mx-9  left-80 top-4 font-bold"
          style={{ fontFamily: "sans-serif", fontSize: 10 }}
        >
          <a href="#">PAGE</a>
        </div>
        <div
          className="absolute ml-96 mx-9 align-middle left-80 top-4 font-bold  hover:bg-pink-300"
          style={{ fontFamily: "sans-serif", fontSize: 10 }}
        >
          <NavLink to="/contact">CONTACT US</NavLink>
        </div>
      </div>

      <div className=" sm:flex ml-2  sm:absolute  left-3/4 transform translate-x-52 translate-y-3  hover:bg-pink-300 ">
        <FontAwesomeIcon
          icon={faCircleQuestion}
          style={{ fontSize: 20, color: "black" }}
          aria-label="Help"
          role="button"
          onClick={toggleDropdown}
        />
        {showDropdown && <DropdownModal />}
      </div>
      <div className=" sm:flex sm:absolute  left-3/4   mx-44 my-3  hover:bg-pink-300 ">
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="text-black"
          style={{ fontSize: 20 }}
        />
      </div>

       <div className=" absolute   sm:block sm:left-80 transform sm:translate-x-96   sm:mx-28 top-3 items-center  justify-center ">
        <div className="  absolute transform  translate-x-52">
          <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className=" pl-6  pr-8   border  focus:outline-none focus:ring-12 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div><Register /></div>
      
      
    </div>
  );
};

  export default Navbar;
