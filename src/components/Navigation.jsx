import { Navigation as props } from "../props.json";
import { Navbar, Nav } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = () => {
  return (
    // <div>
    //   {" "}
    //   <Navbar
    //     className="navBar"
    //     style={{ backgroundColor: props.backgroundColor }}
    //   >
    //     <Navbar.Brand href="#top">
    //       <img
    //         src="../logo fixed.png"
    //         alt="Logo"
    //         height="50vh"
    //         className="d-inline-block align-top navTitle"
    //       />
    //       Weather Works
    //     </Navbar.Brand>
    //     <Nav className="mr-auto">
    //       <Nav.Link className="navButton" href="#top">
    //         Home
    //       </Nav.Link>
    //       <Nav.Link className="navButton" href="#">
    //         Today
    //       </Nav.Link>
    //       <Nav.Link className="navButton" href="#">
    //         Yesterday
    //       </Nav.Link>
    //       <Nav.Link className="navButton" href="#">
    //         Tomorrow
    //       </Nav.Link>
    //       <Nav.Link className="navButton" href="#weekly">
    //         Weekly
    //       </Nav.Link>
    //       <Nav.Link className="navButton" href="#">
    //         Monthly
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar>
    // </div>
    <div>
  <Navbar collapseOnSelect expand="lg" className="navBar" style={{ backgroundColor: props.backgroundColor }}>
  <Navbar.Brand href="#top" className="navName">
  <img
            src="../logo fixed.png"
            alt="Logo"
            height="50vh"
            className="d-inline-block align-top navTitle"
          />
          Weather Works
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features" className="navButton">Home</Nav.Link>
      <Nav.Link href="#pricing" className="navButton">Current</Nav.Link>
      <Nav.Link href="#pricing" className="navButton">Weekly</Nav.Link>
      <Nav.Link href="#pricing" className="navButton">Hourly</Nav.Link>
      <Nav.Link href="#pricing" className="navButton">About Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
  );
};

export default Navigation;
