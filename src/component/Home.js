import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import caro1 from '../images/caro1.jpg'
import caro2 from '../images/caro2.jpg'
import caro3 from '../images/backend.jpg'
import './home.css'
import Button from 'react-bootstrap/Button';
const Home = () => {
  return (
    <Carousel className='carouselCon' id='home'>
        <Carousel.Item className='carouselitem'>
            <img alt="First slide" className='caroimg' src={caro1} />
        <Carousel.Caption className='carocaption'>
            <h1>Crafting Digital Experiences</h1>
            <h3>Unlock the potential of your online presence with tailored website development solutions.</h3>
            <Button variant="primary" href='#contact'>Get Started</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carouselitem'>
      <img alt="Second slide" className='caroimg carousel-img' src={caro2}/>
      <Carousel.Caption className='carocaption'>
        <h1 className='caro2text'>Custom Web Design</h1>
        <h3> We create unique designs that align with your brand’s identity.</h3>
        <Button variant="primary" href='#contact'>Get Started</Button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='carouselitem'>
      <img alt="Third slide" className='caroimg' src={caro3} />
      <Carousel.Caption className='carocaption'>
        <h1>Fast & Secure</h1>
        <h3>
        We focus on speed, security, and performance for an optimal user experience.
        </h3>
        <Button variant="primary" href='#contact'>Get Started</Button>
      </Carousel.Caption>
    </Carousel.Item>
        
    
  </Carousel>
  )
}

export default Home