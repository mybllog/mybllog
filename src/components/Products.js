import React, { useState } from "react";
import Slider from "../components/Carousels";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faLongArrowRight,
   faLongArrowLeft
}from "@fortawesome/free-solid-svg-icons"
//import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Install Swiper modules
//SwiperCore.use([Navigation, Pagination, Autoplay]);
const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
 
    // Add more slides as needed
   

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
 

  
  const handleShowMore = () => {
    // Add your logic for "Show More" action here
    // It can be navigating to another page, expanding the slider, etc.
    // For demonstration purposes, let's log a message to the console
    console.log("Show More clicked");
  }

  return (
    <div
      className="flex  relative  border w-screen h-28 border-x-gray-500 bg-gray-200   transform  translate-y-60 right-0 mx-0 top-96 py-96 text-center  "
      style={{ color: "#F1F1F1" }}
    >
      <div
        className=" flex absolute font-bold w-11/12 top-16 left-40 text-center px-96 "
        style={{
          color: "#DD197B",
          fontSize: 16,
          fontFamily: "Roboto Slab",
          height: 20,
          width: 1102,
        }}
      >
        <text className="">Find the product you want.</text>
      </div>
      <div
        className=" flex absolute font-bold w-11/12  left-40 top-20  px-80  "
        style={{
          color: "#1E1D1D",
          fontSize: 36,
          fontFamily: "Roboto Slab",
          height: 41,
          width: 1100,
        }}
      >
        <text className="">Our Latest Products</text>
      </div>
      
      <Slider/>
    
    </div>
  );
};

export default Products;
