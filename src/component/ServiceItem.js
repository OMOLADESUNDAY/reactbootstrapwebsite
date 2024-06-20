import React from 'react'
import { Card } from 'react-bootstrap'

import Col from 'react-bootstrap/Col';
import './serviceItem.css'

const ServiceItem = ({serviceDdata}) => {
      const {name,image,description}=serviceDdata
    
  return (    
        <Col sm={12} md={6} lg={4} className='serviceItem'>
           <Card style={{ width: "100% ",boxShadow:"2px 3px 4px 4px rgb(16, 117, 218) "}}>
      <Card.Img variant="top" src={image} className='ser'/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </Col>
      
    
  
  )
}

export default ServiceItem