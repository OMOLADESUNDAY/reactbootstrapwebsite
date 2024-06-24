import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import caro1 from '../images/istockphoto-1341853306-612x612.jpg'
import caro2 from '../images/istockphoto-1356554393-612x612.jpg'
import caro3 from '../images/istockphoto-1471444483-612x612.jpg'
import './home.css'
import Button from 'react-bootstrap/Button';
const Home = () => {
  return (
    <Carousel className='carouselCon'>
       
        <Carousel.Item className='carouselitem'>
            
            <img alt="First slide" className='caroimg' src={caro1} />
        <Carousel.Caption className='carocaption'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="primary">Get Started</Button>
      </Carousel.Caption>
            
      
    </Carousel.Item>
    <Carousel.Item className='carouselitem'>
      <img alt="Second slide" className='caroimg' src={caro2}/>
      <Carousel.Caption className='carocaption'>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button variant="primary">Get Started</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carouselitem'>
      <img alt="Third slide" className='caroimg' src={caro3} />
      <Carousel.Caption className='carocaption'>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
        <Button variant="primary">Get Started</Button>
      </Carousel.Caption>
    </Carousel.Item>
        
    
  </Carousel>
  )
}

export default Home