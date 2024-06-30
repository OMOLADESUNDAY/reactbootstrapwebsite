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
        <h2>HOW IT WORKS</h2>
        <h1>Unlock Astonishing Results with Just 3 Simple Steps!</h1>
        <Container >
      <Row>
        <Col sm={12} md={6} xs={12} lg={3} className='workline' >
        <div>
        <BsChat className='icon'/>
        <h3>Free detailed Consultations</h3>
        <p>Id aliquet quis metus penatibus mi mollis adipiscing consequat euismod</p>
        <Button variant='light'>chat Now</Button>
        </div>
        
        </Col>
        <Col sm={12} md={6} xs={12} lg={3} className='workline' >
        <div>
        <PiDevicesLight  className='icon' />
        <h3>Discover the product</h3>
        <p>Id aliquet quis metus penatibus mi mollis adipiscing consequat euismod</p>
        <Button variant='light'>Learn more</Button>
        </div>
        
        </Col>
        <Col sm={12} md={6} xs={12} lg={3} className='workline' >
        <div>
        <HiOutlineSquare3Stack3D  className='icon' />
        <h3>Wireframe & Production</h3>
        <p>Id aliquet quis metus penatibus mi mollis adipiscing consequat euismod</p>
        <Button variant='light'>Learn more</Button>
        </div>
        
        </Col>
        <Col sm={12} md={6} xs={12} lg={3} className='workline' >
        <div>
        <MdOutlineImportantDevices  className='icon' />
        <h3>Prototype Application</h3>
        <p>Id aliquet quis metus penatibus mi mollis adipiscing consequat euismod</p>
        <Button variant='light'>Learn more</Button>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Works