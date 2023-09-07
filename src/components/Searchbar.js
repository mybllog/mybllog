import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListSquares,
  faGamepad,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Slider from "react-slick";
import phone from "../Assests/img/phone.png";
import "typeface-cinzel-decorative";
import watch from "../Assests/img/watch.png";
import watch5 from "../Assests/img/watch5.png";
import watchxiomi from "../Assests/img/watch xiomi.png";

const Searchbar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const slides = [
    {
      id: 1,
      imageUrl: "https://picsum.photos/id/1002/300/200",
      caption: "Slide 1",
    },
    {
      id: 2,
      imageUrl: "https://picsum.photos/id/1003/300/200",
      caption: "Slide 2",
    },
    {
      id: 3,
      imageUrl: "https://picsum.photos/id/1004/300/200",
      caption: "Slide 3",
    },
    {
      id: 4,
      imageUrl: "https://picsum.photos/id/1005/300/200",
      caption: "Slide 4",
    },
  ];
  const handleClick = () => {
    console.log("i clicked on it");
  };
  return (
    <div className="  ">
      <div className="">
      <img src ={phone} alt='phone' className='w-screen left-0'></img>
      </div>
        
      </div>
    
  );
};

export default Searchbar;
