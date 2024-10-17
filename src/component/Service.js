import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./service.css"
import { serviceData } from './data';
import ServiceItem from './ServiceItem';
const Service = () => {
  return (
    <Container fluid className='serviceContainer' id='service'>
          <h1>Services</h1>
          <p className='servicetexty'>Webro offers a comprehensive range of web development services to 
            help you build a strong online presence. Our offerings include custom website development which include both frontend and backend development, 
            e-commerce solutions, content management systems (like WordPress), network programming, cyber security and user-friendly UI/UX design. 
            We also provide ongoing website maintenance and support to ensure your site runs smoothly, 
            along with search engine optimization (SEO) to enhance your visibility on search engines. 
            Whether you're launching a new project or improving an existing one, our team is here to 
            help you succeed online!</p>
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