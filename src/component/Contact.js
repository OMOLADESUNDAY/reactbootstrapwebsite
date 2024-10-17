import React, { useRef, useState } from 'react'
import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contact.css'
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import Spinnner from './Spinner';

const Contact = () => {
  let firstnameRef=useRef('');
  let lastnameRef=useRef('');
  let emailnameRef=useRef('');
  let messageRef=useRef('');
  const [emailLoading,setEmailLoading]=useState(false)
  const submitHandler=(e)=>{
    e.preventDefault();
    setEmailLoading(true)
   const messageData={
      firstname:firstnameRef.current.value, 
      lastname:lastnameRef.current.value,
      email:emailnameRef.current.value,
      message:messageRef.current.value
  }   
   emailjs.send(
    'service_6vs06ms',     // Replace with your EmailJS Service ID
    'template_fgxjn09',    // Replace with your EmailJS Template ID
    messageData,                  // This is your data object
    'opM0rfM50zZzFPsCI'      // Replace with your EmailJS Public Key
  )
  .then((result) => {
    setEmailLoading(false)
    console.log('Email sent successfully:', result.text);
    alert('Email sent successfully!');
    
  })
  .catch((error) => {
    setEmailLoading(false)
    console.error('Error sending email:', error);
    alert('Failed to send email, please try again.');
  });


   console.log(messageData)
    firstnameRef.current.value=''
    lastnameRef.current.value=''
    emailnameRef.current.value=''
    messageRef.current.value=''
  }
  // if (emailLoading){
  //   return(
  //     <>
  //     <Spinner animation="border" variant="warning" />
  //     <Spinner animation="grow" variant="warning" />
  //   </>
  //   )
  // }
  // else{
    return (
      <section className='contactContainer' id='contact'>
        <h1 className='majorContactText primary'>Contact Us</h1>
        <Form onSubmit={submitHandler}>
          <Container fluid> 
        <Row>
          <Col sm={12} md={6}>
          <Form.Group className="mb-3" controlId="firstname">
            <Form.Label className='formlabel'>Firstname</Form.Label>
            <Form.Control type="text" placeholder="firstname" ref={firstnameRef} required/>
        </Form.Group>
        </Col>
        <Col xs={12} md={6}>
        <Form.Group className="mb-3" controlId="lastname">
            <Form.Label className='formlabel'>Lastname</Form.Label>
            <Form.Control type="text" placeholder="lastname" ref={lastnameRef} required/>
        </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} >
          <Form.Group className="mb-3" controlId="email">
            <Form.Label className='formlabel'>Email</Form.Label>
            <Form.Control type="email" placeholder="email" ref={emailnameRef} required/>
        </Form.Group>
        </Col>
      </Row>
      <Row>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className='formlabel'>Message</Form.Label>
          <Form.Control as="textarea" rows={5} ref={messageRef} />
        </Form.Group>
      </Row>
      <div className='submitbtn'>
      <Button  variant="primary" type='submit'>Submit</Button>{' '}
      <div>
      {emailLoading?<Spinnner/>:''}
      </div>
     
      </div>
      
    </Container>    
      </Form>
     
      </section>
    )
  // }
  
}

export default Contact