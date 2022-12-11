import React,{useEffect, useState} from "react";
import {axiosInstance} from "../services/axiosClient";


import { useQuery } from "react-query";

import First from "./first";
import Second from "./second";





const LandingPage=()=>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


function fetchProductData(){
    return axiosInstance.get("products");
}    

const {data:productdata , loading:product}=useQuery(['ProductData'],fetchProductData)
useEffect(()=>{
if(productdata?.data?.length>0){
    setData(productdata?.data);
}
},[productdata?.data])  
  return(
        <>
        
        <Second  data={data}  setData={setData}/>
        <div style={{
            display: 'flex',
            flexDirection:'row',
            width:"1200px",
            minWidth:"300px",
            justifyContent:"center",
            alignItems:"center",
            flexWrap:"wrap"
        }}>
            
        {data.map(item=>{
        
        return <First data={item}/>
        })}
        </div>

        </>
    )

}


export default LandingPage;