import React from "react";

import Searchbar from "../components/Searchbar";
import "../Home.css";
import Searchable from "../components/Searchable";
import Products from "../components/Products";
import Pics from "../components/Pics";

const Home = () => {
  return (
    <div className="">
      <div>
        
      </div>

      <Searchable />
      <div className="">
        <Searchbar />
      </div>

      <div >
       
          <Products />
    
      </div>
      <div
        className="flex  border top-96 w-9/12 py-28 m-0 mx-7 my-36 left-10 h-96 rounded-2xl"
        style={{
          background: "linear-gradient(45deg, #CE048C, #4D0A8E)",
        }}
      >
        <Pics />
      </div>

     
    </div>
  );
};

export default Home;
