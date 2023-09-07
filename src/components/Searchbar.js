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
    <div className=" flex ">
      <div className="flex">
      <img src ={phone} alt='phone' className='w-screen left-0'></img>
      <div
            className=" absolute   left-5   top-96"
            style={{
              fontFamily: "Cinzel Decorative, serif",
              fontStyle: "bold",
            }}
          >
             <div
              className=""
              style={{ fontSize: 30, color: "#000000,#DD197B" }}
            >
              Samsung <span style={{ color: "#DD197B" }}> Galaxy</span> Fold
            </div>
            <div className="">Upgrade to Greatness</div>
            <div className="">starting at $1799.99</div>
            <div className="py-8">
              <button
                onClick={handleClick}
                className=" rounded-full bg-pink-600  "
                style={{width:200, height:70,  }}
              >
                {" "}
                <div>
                <span style={{fontSize:16,fontFamily:'Cinzel Decorative',color:'white',fontStyle:'bold'}}>order now</span> 
                </div>
             
              </button>
            </div>

          </div>
            
     
      </div>
      <div className="grid grid-cols-3 absolute   sm:20  top-36 py-96  rounded-full ">
          <div
            className="flex absolute z-auto border  m-32 p-10  rounded-xl  bg-zinc-200 bottom-80    ml-5  w-80 h-56 top-full left-20"
            style={{ borderColor: "#F6F6F6" }}
          >
            {" "}
            <img src={watch} alt="watch" />
            <span
              className=" font-bold"
              style={{
                fontFamily: " serif",
                fontStyle: "bold",
                marginLeft: 20,
              }}
            >
              APPLE
              <div
                className=""
                style={{
                  color: "#8B8E99",
                  fontFamily: "serif",
                  fontSize: 20,
                  lineHeight: 1.0,
                }}
              >
                Apple is one of the most
                <div>famous smart</div>
                <div>watches providing company</div>{" "}
              </div>
            </span>
          </div>
          <div className="flex absolute z-auto border  m-32  p-10  rounded-xl  bg-zinc-200  bottom-80  ml-72 w-80 h-56  top-full left-36">
            <img
              src={watchxiomi}
              alt="watchxiomi"
              style={{ marginRight:30}}
              className="flex relative  mt-2 -mx-8 m-3"
            />
            <span
              className="font-bold -mx-8"
              style={{
                fontFamily: " serif",
                fontStyle: "bold",
              }}
            >
              XIOMI
              <div  className=" flex  items-center"
              style={{
                color: "#8B8E99",
                fontFamily: "serif",
                fontSize: 20,
                lineHeight: 1.0,
                marginLeft:'auto',
              }}>Xiaomi smart watches are produced by MI company.</div>
            </span>
          </div>
          <div className="flex absolute z-auto border  m-32   p-10  rounded-xl bg-zinc-200  bottom-80  ml-96 w-80 h-56  top-full  left-96">
            <img src={watch5} alt="watch" />
            <span
              className=" font-bold"
              style={{
                fontFamily: " serif",
                fontStyle: "bold",
                marginLeft: 20,
              }}
            >
              FITBIT
              <div
                className=""
                style={{
                  color: "#8B8E99",
                  fontFamily: "serif",
                  fontSize: 20,
                  lineHeight: 1.0,
                }}
              >
                <span>
                  FitBit smart watches are best for there health and fitness
                  features.
                </span>
              </div>
            </span>
          </div>
                </div>
        
      </div>
    
  );
};

export default Searchbar;
