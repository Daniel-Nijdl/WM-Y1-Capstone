import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'

export class Nav extends Component {
  render() {
    return (
      <>
<Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Weekly</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Monthly</Nav.Link>
  </Nav.Item>
</Nav>
</>
    )
  }
}

export default Nav
