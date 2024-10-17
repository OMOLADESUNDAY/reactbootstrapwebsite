import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from "../images/webro logo.png"
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footerContainer' id='footer'>
        <Container>
            <Row>
                <Col lg={3} className='footerlogo'>
                <Navbar expand="lg" className="bg-body-tertiary navbarBrand">
                      <Navbar.Brand  href="#home"><img className='logoimg' src={Logo} alt="logo" /></Navbar.Brand>
                </Navbar>                
                </Col>
                <Col lg={9}>
                <Row className='footernavlink'>
                    <Col lg={4}  xs={12}>
                    <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#about">About</Nav.Link>
                      <Nav.Link href="#service">Service</Nav.Link>
                      <Nav.Link href="#works">Works</Nav.Link>
                    </Col>
                    <Col  lg={4} xs={12}>
                    <Nav.Link href="#works">Consultation</Nav.Link>
                      <Nav.Link href="#contact">Contact us</Nav.Link>
                      <Nav.Link href="#experience">Experience</Nav.Link>
                      <Nav.Link href="#contact">live Chat</Nav.Link>
                    </Col>
                    <Col  lg={4} xs={12} className='socialIcons'>
                      <Nav.Link target='_blank' href="https://web.facebook.com/omolade.sunday.75"><FaFacebook /></Nav.Link>
                      <Nav.Link target='_blank' href="https://wa.me/2347069258526"><IoLogoWhatsapp /></Nav.Link>
                      <Nav.Link target='_blank' href="https://www.linkedin.com/in/omolade-sunday-6b6a69227/"><FaLinkedin /></Nav.Link>
                      <Nav.Link target='_blank' href="https://www.instagram.com/d_active_guy"><FaSquareInstagram /></Nav.Link>
                      
                    </Col>
                </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer