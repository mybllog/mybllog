import React,{useState,useEffect} from "react";

import Searchbar from "../components/Searchbar";
import "../Home.css";

import Products from "../components/Products";
import Pics from "../components/Pics";
import Images from "../components/Images";
import Footers from "../components/Footer"
import { MapComponent } from "../components/Map";
import {InfinitySpin,MutatingDots,Grid} from "react-loader-spinner"


const Home = () => {
  const [ loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    <div className="">
      <div>
        {
          loading?
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' , position:'relative', top:200 }}>
            <Grid color={'pink'} loading={loading} size={150} margin={9} radius={12.5} width={80} height={80} ariaLabel='grid-loading' />
          </div>
          :
          <>
          <div className="">
          <Searchbar />
        </div>
  
        <div>
          <Products />
        </div>
       
        <Pics />
        <div>
        <Images />
        </div>
  
      
        
      

          </>
          
        }
      </div>

      
  
    
    </div>
  );
};

export default Home;
