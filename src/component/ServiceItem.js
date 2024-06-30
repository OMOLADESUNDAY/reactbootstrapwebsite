import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

import Col from 'react-bootstrap/Col';
import './serviceItem.css'

const ServiceItem = ({serviceDdata}) => {
      const {name,image,description}=serviceDdata
      const [isExpanded, setIsExpanded] = useState(false);

      const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
      };
    
  return (    
        <Col sm={12} md={6} lg={4} className='serviceItem'>
           <Card style={{ width: "90% ",margin:"auto",boxShadow:"1px 1px 2px rgb(16, 117, 218)", textOverflow: 'ellipsis'}} className='servicecard' >
      <Card.Img variant="top" src={image} className='ser'/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className={isExpanded ? '' : 'multi-line-truncate'} >
         {description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link  variant="link" className='show' onClick={toggleExpansion} > {isExpanded ? 'Show Less' : 'Show More'}</Card.Link>
      </Card.Body>
    </Card>
      
        </Col>
      
    
  
  )
}

export default ServiceItem