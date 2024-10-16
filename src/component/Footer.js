import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from "../images/webro logo.png"
import './footer.css'
const Footer = () => {
  return (
    <div className='footerContainer'>
        <Container>
            <Row>
                <Col lg={3} className='footerlogo'>
                <Navbar expand="lg" className="bg-body-tertiary navbarBrand">
                      <Navbar.Brand  href="#home"><img className='logoimg' src={Logo} alt="logo" /></Navbar.Brand>
                </Navbar>                
                </Col>
                <Col lg={9}>
                <Row className='footernavlink'>
                    <Col> 
                      <Nav.Link  href="#home">Home</Nav.Link>
                      <Nav.Link  href="#link">Link</Nav.Link>
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Link</Nav.Link>
                    </Col>
                    <Col>
                    <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Link</Nav.Link>
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Link</Nav.Link>
                    </Col>
                    <Col>
                    <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Link</Nav.Link>
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Link</Nav.Link>
                    </Col>
                    <Col>
                    <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Link</Nav.Link>
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Link</Nav.Link>
                    </Col>
                </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer