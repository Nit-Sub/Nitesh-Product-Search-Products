import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from "./SearchBar";

const Second=({data, setData})=>{

    return(
        <>
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Nitesh Product</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            </Nav>

        <SearchBar data={data}  setData={setData}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default Second;