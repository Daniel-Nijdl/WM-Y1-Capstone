import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Temp from './components/Temp';

function App() {
  return (
    <div>
      <ReactBootStrap.Navbar bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="#home">
          <Image src="" rounded />
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#features">
            Week
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#pricing">
            Month
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#pricing"></ReactBootStrap.Nav.Link>

          <ReactBootStrap.NavDropdown title="III" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item href="#action/3.1">
              Action
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.2">
              Another action
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.3">
              Something
            </ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="#action/3.4">
              Separated link
            </ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
        {/* <ReactBootStrap.Form inline>
      <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactBootStrap.Button variant="outline-info">Search</ReactBootStrap.Button>
    </ReactBootStrap.Form> */}
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default App;
