import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import "./header.css";

export default function Headers(){
return(
<div>
{/* hii */}
<Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#ff4747"}}>
  <Navbar.Brand href="#home" style={{color:"#05024F"}}>Education</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={{color:"#ffffff"}}  href="/">Home</Nav.Link>
      <Nav.Link style={{color:"#ffffff"}} href="/course">Courses</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link style={{color:"#ffffff"}}  href="#deets">Hi Albert!</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

</div>





);
}