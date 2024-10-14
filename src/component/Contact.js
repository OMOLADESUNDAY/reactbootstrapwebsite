import React from 'react'
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contact.css'
const Contact = () => {
  return (
    <section className='contactContainer'>
      <h2 className='majorTestimonyText'>Contact Us</h2>
      <Form>
        <Container fluid> 
    <Row>
      <Col>
        <Form.Group className="mb-3" controlId="firstname">
          <Form.Label>Firstname</Form.Label>
          <Form.Control type="text" placeholder="firstname" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control type="text" placeholder="lastname" />
      </Form.Group>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6} >
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="email" />
      </Form.Group>
      </Col>
    </Row>
    <Row>
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Row>
  </Container>    
    </Form>
    </section>
    
    
   
  )
}

export default Contact