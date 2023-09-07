import React, { useState } from "react";
import Axios from 'axios'
import { NavLink, Navigate, useSearchParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";

const Signin = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')


  const onchangeemailhandler = (e) => setEmail(e.target.value)
  const onchangepasswordhandler = (e) => setPassword(e.target.value)

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }
  return (
    <ul>
      <div>
        <button type="button" onClick={() => setShowModal(true)}>
          <h3>Login</h3>
        </button>
      </div>
      {showModal ? (
        <>
          <div className="flex fixed  m-0 px-10 justify-center items-center  -mx-96 overflow-x-hidden z-50 overflow-y-auto transform translate-x-6 translate-y-9 outline-none focus:outline-none ">
            <div className=" relative w-auto my-4 mx-auto max-w-xl ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-around  mt-1 rounded-t">
                  <div className="flex-initial w-96  justify-center">
                    <h3 className=" mb-1 justify-center text-center">
                      {" "}
                      signin{" "}
                    </h3>
                  </div>

                  <button
                    onClick={() => setShowModal(false)}
                    type="button"
                    className=" rounded-md p-1 inline-flex items-center justify-center text-pink-300 hover:text-pink-500  bg-pink-500 hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
                  >
                    <span className="sr-only">close menu</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <div className="my-4">
                    <table className="block">email</table>
                    <input
                      className="w-full bg-gray-100 border border-gray-300 rounded p-2"
                      type="text"
                      name="email"
                      placeholder="email"
                      value={onchangeemailhandler}
                    />
                  </div>
                  <div className="my-4">
                   
                   <table className="block">password</table>
                   <div className="flex absolute right-0 text-gray-600 items-center pr-5 pb-4 top-10 h-full cursor-pointer">
                  <button onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon
                      icon={showPassword ? faEye : faEyeSlash}
                      style={{ fontSize: 20, color: "pink" }}
                    />
                  </button>

                </div>

                    <input
                      className="w-full bg-gray-100 border border-gray-300 rounded p-2"
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="password"
                      value={onchangepasswordhandler}
                    />
                     <div className="flex relative text-pink-500"><button onclick ={()=>{}}>forgotten password ?</button></div>
                  </div>
                 
                  <div className="flex relative border  bg-pink-600 mx-20  w-52 h-14 justify-center rounded-full ">
                    {" "}
                    <button
                      type="button"
                      className=" flex text-center py-4"
                      onClick={{}}
                    >
                      send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </ul>
  );
};
export default Signin;
