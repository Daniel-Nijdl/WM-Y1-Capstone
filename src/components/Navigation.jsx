import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return(
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#top"><img src="#" alt="Logo" width="30" height="30" className="d-inline-block align-top" />Weather Works</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#top">Home</Nav.Link>
          <Nav.Link href="#">Today</Nav.Link>
          <Nav.Link href="#">Yesterday</Nav.Link>
          <Nav.Link href="#">Tomorrow</Nav.Link>
          <Nav.Link href="#">Weekly</Nav.Link>
          <Nav.Link href="#">Monthly</Nav.Link>
        </Nav>
      </Navbar>
    );
}

export default Navigation
