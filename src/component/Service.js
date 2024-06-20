import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./service.css"
import { Card, ListGroup } from 'react-bootstrap';
import { serviceData } from './data';
import ServiceItem from './ServiceItem';
const Service = () => {
  return (
    <Container fluid className='serviceContainer'>
          <h1>Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum nostrum corrupti a iste ipsa quae consequuntur illum placeat nesciunt, enim quisquam dolores veniam quibusdam rerum possimus? Possimus, vitae mollitia.</p>
         <Row>
         {serviceData.map((servicedata)=>{
            return(
                    <ServiceItem key={servicedata.id} serviceDdata={servicedata}/>
            )})}  
         </Row>
        
    </Container>
  )
}

export default Service