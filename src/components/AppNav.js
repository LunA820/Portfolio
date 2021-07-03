import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


function AppNav() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" className="justify-content-center">
      <Nav>
        <Nav.Link href="#homePage">Home</Nav.Link>
        <Nav.Link href="#aboutPage">About</Nav.Link>
        <Nav.Link href="#projectPage">Projects</Nav.Link>
        <Nav.Link href="https://github.com/LunA820" target="_blank">Git</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default AppNav
