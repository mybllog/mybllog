import React from "react";
import CinzelDecorative from "typeface-cinzel-decorative";
import hearpod from "../Assests/img/hearpod.png";
import gamingpad from "../Assests/img/gamingpad.png";
import unnamed from "../Assests/img/unnamed.png";

const Pics = () => {
  return (
    <div
      className="flex  relative border  m-0 mx-7  top-96  my-96 left-11  rounded-2xl"
      style={{
        background: "linear-gradient(45deg, #CE048C, #4D0A8E)",
        height: 492.61,
        width: 1164,
      }}
    >
      <div
        className="absolute font-bold  top-20  left-14  ml-6"
        style={{
          fontFamily: "Cinzel Decorative",
          fontStyle: "bold",
          fontSize: 64,
          width: 279.62,
          height: 165.31,
          color: "#000000",
        }}
      >
        <span>CYBER</span>
        <div style={{ lineHeight: 0.5 }}>
          <span>LINIO</span>
        </div>
      </div>
      <div
        className="absolute font-bold top-64 left-3 "
        style={{
          fontFamily: "Cinzel Decorative",
          fontSize: 50,
          color: "#FFFFFF",
          width: 391,
          height: 119,
        }}
      >
        <div>
          <span>40% off in </span>
          <div>
            <span>accessories</span>
          </div>
          <div
            className=" w-36 h-5 rounded-lg bg-white left-20  mx-24 my-3 justify-center text-center"
            style={{ fontSize: 14, color: "#000000" }}
          >
            <button type="text" class="btn btn-block" onClick={{}}>
              free shipping
            </button>
          </div>
        </div>
      </div>
      <div
        className=" absolute left-60 top-0 my-0  mt-2 transform -translate-y-24"
        style={{
          width: 442.19,
          height: 449.63,
        }}
      >
        <img src={unnamed} alt="unnamed" />
      </div>
      <div
        className=" absolute left-96  top-60 my-0  mx-96 mt-8 transform "
        style={{
          width: 351.15,
          height: 284.33,
        }}
      >
        <img src={hearpod} alt="hearpod" />
      </div>
      <div
        className="  absolute left-80 top-0 my-0  mx-60 mt-2 transform -translate-y-32"
        style={{
          width: 500.15,
          height: 284.33,
        }}
      >
        <img src={gamingpad} alt="gamingpad" />
      </div>
      <div
        className="flex  transform translate-y-96 py-28  translate-x-52 font-bold"
        style={{ fontSize: 16, color: "#696969", width: 546.23 , fontFamily:'Cinzel Decorative'}}
      >
        <text>*Valid from 27/05 to 01/06 2023. Min stock: 1 unit</text>
      </div>
    </div>
  );
};

export default Pics;
