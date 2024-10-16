import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../images/webro logo.png"
import './navbar.css'
const Nnavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="d-flex justify-content-between navbarCon">
        <Navbar.Brand href="#home" className='logo'><img className='logoimg' src={Logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu' />
        <Navbar.Collapse id="basic-navbar-nav" className='' >
          <Nav className="me-auto k">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#home">Service</Nav.Link>
            <Nav.Link href="#link">Testimony</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" >
              <div className='dropdownn'>
              <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </div>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nnavbar