import React, {useState, useEffect } from 'react';
import {redirect} from "react-router-dom"

const Confirm = () => {
  const [showRedirect,setShowRedirect] = useState()

  // Use useEffect to add a delay before redirecting to the login page
  useEffect(() => {
    const delay= setTimeout (() => {
     setShowRedirect(true)
     },3000);
    return()=> clearTimeout(delay)
   },)

   if(showRedirect)
   return redirect('/login')
  return <div>User Confirmed Successfully</div>;
};

export default Confirm;

