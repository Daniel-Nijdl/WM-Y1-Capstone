import React from 'react'
import * as ReactBootStrap from "react-bootstrap";

const Navbar = () => {
  return(
    <>
      <ReactBootStrap.Navbar bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="#home">Navbar</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Form inline>
          <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <ReactBootStrap.Button variant="outline-info">Search</ReactBootStrap.Button>
        </ReactBootStrap.Form>
      </ReactBootStrap.Navbar>
    </>
    );
}

export default Navbar
