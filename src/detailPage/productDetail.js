import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const ProductDetail=({data})=>{
  
  
    return(
        <>
     
          
          
        <Card style={{ width: '18rem' }}>
          
      <Card.Img variant="top" src={data?.image} />
      <Card.Body>
        <Card.Title>{data?.title}</Card.Title>
        <Card.Text>
          {data?.description}
        </Card.Text>
       
        <Button variant="primary">View Detail</Button>
       
      </Card.Body>
    </Card>
   
   
        </>
    )
}

export default ProductDetail;