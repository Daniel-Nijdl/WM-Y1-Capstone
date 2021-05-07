import { Navigation as props } from '../props.json'
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return(
    <Navbar className="navBar" style={ { backgroundColor: props.backgroundColor } }>
        <Navbar.Brand href="#top"><img src="../logo fixed.png" alt="Logo" width="50" height="50" className="d-inline-block align-top" />Weather Works</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="navButton" href="#top">Home</Nav.Link>
          <Nav.Link className="navButton" href="#">Today</Nav.Link>
          <Nav.Link className="navButton" href="#">Yesterday</Nav.Link>
          <Nav.Link className="navButton" href="#">Tomorrow</Nav.Link>
          <Nav.Link className="navButton" href="#">Weekly</Nav.Link>
          <Nav.Link className="navButton" href="#">Monthly</Nav.Link>
        </Nav>
      </Navbar>
    );
}

export default Navigation
