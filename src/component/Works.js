import React from 'react'
import './works.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsChat } from "react-icons/bs";
import { PiDevicesLight } from "react-icons/pi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { MdOutlineImportantDevices } from "react-icons/md";

const Works = () => {
  return (
    <div className='worksContainer'>
        <h1>How It Works</h1>
        <h3>Unlock Astonishing Results with Just 3 Simple Steps!</h3>
        <Container >
      <Row>
        <Col sm={12} md={6} xs={12} lg={3} className='workline' >
        <div>
        <BsChat className='icon'/>
        <h3>Free detailed Consultations</h3>
        <p>Get a free detailed consultation with Webro! Our experts will assess your needs and provide tailored solutions to help you achieve your online goals.</p>
        <Button variant='light'>chat Now</Button>
        </div>
        
        </Col>
        <Col sm={12} md={6} xs={12} lg={3} className='workline' >
        <div>
        <PiDevicesLight  className='icon' />
        <h3>Discover the product</h3>
        <p>Discover our innovative products designed to elevate your business! Explore cutting-edge solutions tailored to meet your unique needs today!</p>
        <Button variant='light'>Learn more</Button>
        </div>
        
        </Col>
        <Col sm={12} md={6} xs={12} lg={3} className='workline' >
        <div>
        <HiOutlineSquare3Stack3D  className='icon' />
        <h3>Wireframe & Production</h3>
        <p>From wireframes to production, we transform your ideas into functional software, ensuring a seamless user experience every step of the way!</p>
        <Button variant='light'>Learn more</Button>
        </div>
        
        </Col>
        <Col sm={12} md={6} xs={12} lg={3} className='workline' >
        <div>
        <MdOutlineImportantDevices  className='icon' />
        <h3>Prototype Application</h3>
        <p>Our prototype applications bring your ideas to life, allowing you to visualize and test features before development for a better end product!</p>
        <Button variant='light'>Learn more</Button>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Works