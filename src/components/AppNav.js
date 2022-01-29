import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import './AppNav.css'


function AppNav() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" className="justify-content-center">
      <Nav>
        <Nav.Link href="#homePage" className="navItems">HOME</Nav.Link>
        <Nav.Link href="#aboutPage" className="navItems">ABOUT</Nav.Link>
        <Nav.Link href="#projectPage" className="navItems">PROJECTS</Nav.Link>
        <Nav.Link href="mailto:lunayang820@gmail.com" className="navItems">CONTACT</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default AppNav
