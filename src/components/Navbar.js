import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
//import Register from './Register';
import "typeface-cinzel-decorative";
import Manifold from "../Assests/img/Manifold.jpeg";

const Navbar = () => {
  const [touched, touchedSet] = useState(false);
  const handleShutdown = () => {
    touchedSet(false);
  };

  return (
    <ul className="flex border w-screen sticky top-0  header">
      <div className=" left-6  w-28 " style={{ fontSize: 20 }}>
        <img src={Manifold} alt="Manifold" className=" top-0 " />
      </div>

      <div className=" ">
        <div
          className="absolute ml-56  mx-9 top-4 left-40 font-sans  font-bold"
          style={{
            fontSize: 10,
            fontFamily: "Cinzel Decorative",
            fontStyle: "Bold",
          }}
        >
          <a href="#">HOME</a>
        </div>
        <div
          className="absolute ml-60  mx-9 top-4  left-52 font-bold"
          style={{ fontFamily: "Cinzel Decorative", fontSize: 10 }}
        >
          <a href="#">ABOUT US</a>
        </div>
        <div
          className="absolute  ml-72 mx-9 top-4   left-64 font-bold"
          style={{ fontFamily: "Cinzel Decorative", fontSize: 10 }}
        >
          <a href="#">SERVICES</a>
        </div>
        <div
          className="absolute ml-80 mx-9  left-80 top-4 font-bold"
          style={{ fontFamily: "Cinzel Decorative", fontSize: 10 }}
        >
          <a href="#">PAGE</a>
        </div>
        <div
          className="absolute ml-96 mx-9 align-middle left-80 top-4 font-bold"
          style={{ fontFamily: "Cinzel Decorative", fontSize: 10 }}
        >
          <a href="#">CONTACT US</a>
        </div>
      </div>

      <div
        style={{
          transition: "opacity 300ms ease",
          opacity: touched ? 0.5 : 1,
        }}
        onMouseDown={() => touchedSet(true)}
        onMouseUp={() => touchedSet(false)}
      >
        <FontAwesomeIcon
          icon={faUserAlt}
          name="Accounts"
          style={{
            fontSize: 18,
            color: "black",
            paddingRight: 15,
            paddingLeft: 1000,
            borderRadius: 100,
            padding: "absolute",
            borderColor: "gray",
            cursor: "pointer",
          }}
        />

        {touched && (
          <button
            onClick={handleShutdown}
            className="absolute top-0 right-0 text-gray-500 hover:text-gray-900"
            style={{ marginTop: "-1rem", marginRight: "-1rem" }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </ul>
  );
};

export default Navbar;
