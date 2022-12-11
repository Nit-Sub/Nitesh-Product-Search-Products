import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const First=({data})=>{
  
  
    return(
        <>
     
          
          
        <Card style={{ width: '18rem' }}>
          
      <Card.Img variant="top" src={data?.image} />
      <Card.Body>
        <Card.Title>{data?.title}</Card.Title>
        <Card.Text>
          {data?.description}
        </Card.Text>
        <Link to="/detail">
        <Button variant="primary" >View Detail</Button>
        </Link>
      </Card.Body>
    </Card>
   
   
        </>
    )
}

export default First;