import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image1 from '../images/about24 (2).jpg'
import "./about.css"
import Accordion from 'react-bootstrap/Accordion';


const About = () => {
  return (
    <Container fluid className='aboutCon' id='about'>
      <h1>About Us</h1>
      <p className='abouttext'>At Webro, we specialize in building beautiful, functional websites that help businesses thrive online. Our team of skilled developers and designers is passionate about creating custom web solutions that meet your unique needs. From sleek and modern designs to seamless user experiences, we bring your vision to life with the latest web technologies. Whether you’re starting from scratch or looking to revamp your existing site, we’re here to help you succeed online.</p>
    <Row className='ghfg'>
      <Col sm={12} md={6} className='ghf' >
            <Image src={image1} className='image1'/>
      </Col>
      <Col sm={12} md={6}  className='accordionContainer'>
      <Accordion defaultActiveKey="0" className='accordion'>
      <Accordion.Item eventKey="0" >
        <Accordion.Header className='accordionItem'>UI/UX design</Accordion.Header>
        <Accordion.Body >
          At Webro, we specialize in creating intuitive and visually stunning digital experiences 
          through our focus on UI/UX design. Our UI design ensures that every interface is visually 
          engaging and consistent with your brand, while our UX design focuses on crafting smooth and 
          user-friendly journeys that keep users engaged. By combining aesthetics with a deep understanding 
          of user behavior, we deliver websites and apps that are not only beautiful but also easy to use, 
          ensuring a seamless experience on every device.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Frontend Development</Accordion.Header>
        <Accordion.Body>
        Frontend development is all about creating the parts of a website or app that 
        users interact with directly. It focuses on the design, layout, and functionality
         that make a site engaging and easy to use. Our frontend developers use HTML for structure, 
         CSS for styling, and JavaScript to add interactivity, ensuring that every element is both 
         visually appealing and functional. They work to make sure that the website looks great on any 
         device, whether it’s a desktop, tablet, or smartphone, providing a seamless experience across
          all platforms. This includes everything from responsive design, animations, and user-friendly 
          interfaces to ensuring fast load times and smooth navigation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Backend Development</Accordion.Header>
        <Accordion.Body>
        Backend development is the backbone of any digital product, responsible for managing data,
         server-side logic, and connecting to databases. It handles everything that goes on behind
          the scenes to ensure the website functions smoothly and efficiently. Our backend developers 
          build the core architecture using technologies like Node.js, Python, and PHP, along with
           databases such as MySQL, MongoDB, and PostgreSQL. They focus on building secure, scalable,
            and high-performing systems that process requests, store data, and serve content quickly
             to the frontend. This makes sure that your website or app is not only powerful but 
             also reliable, with capabilities to grow as your needs evolve.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Col>
    </Row>
  </Container>
  )
}

export default About