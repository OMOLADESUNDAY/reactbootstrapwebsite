import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image, ProgressBar } from 'react-bootstrap';
import experienceimage from '../images/4574122-removebg-preview.png'
import "./experience.css"

const Experience = () => {
  return (
    <div className='experienceContainer' id='experience'>
        <Container >
      <Row>
        <Col sm={12} md={12} xs={12} lg={6} className='eximgcon' >
            <Image src={experienceimage} className='experienceimg'/>
        </Col>
        <Col sm={12} md={12} xs={12} lg={6}>
            <h1 className='expbgtext'>Experience the magic of Online awareness. Contact us to discuss your project.</h1>
            <p className='exptext'> Webro specializes in web development, delivering innovative solutions across industries
               like e-commerce and healthcare. Our skilled team focuses on creating custom, user-centered 
               websites and applications while collaborating closely with clients to turn their visions into 
               reality.</p>
            <div>
                <p>Design & Branding</p>
                <ProgressBar striped variant="primary" now={89} />
                <p>Web & App Developer</p>
                <ProgressBar striped variant="primary" now={96} />
                <p>Cyber Security</p>
                <ProgressBar striped variant="primary" now={93} />
                <p>Social Media Manegement</p>
                <ProgressBar striped variant="primary" now={89} />
            </div>
        </Col>
      </Row>
    </Container>
    </div>
    
  )
}

export default Experience