import axios from "axios";
import React,{useEffect, useState} from "react";
import { Form, Button } from "react-bootstrap";
import { axiosInstance } from "../services/axiosClient";

const SearchBar = ({data , setData}) => {


const [query , setQuery]= useState("");
console.log(query)
useEffect(()=>{
    
if(query && data){
    const arrayData=data.filter((item)=> item.title==query)
    setQuery()
  
    console.log(arrayData,"search");
    if(
        arrayData.length>0
    ){
        setData(arrayData)
    }
}
},[query, data])

  return (
    <Form className="d-flex" >
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      onChange={(e)=>setQuery(e.target.value)}
      
    />
    <Button variant="outline-success">Search</Button>
  </Form>
  )
}

export default SearchBar;