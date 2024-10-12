import React from 'react'
import './testimonies.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { TestimonyData } from './data'
import TestimonyItem from './TestimonyItem';


const Testimonies = () => {
  var settings = {
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div >
      <h2>Our Testimonials</h2>
    <Slider className='testimonySlider' {...settings}>
        {TestimonyData.map((singleTestimonyItem)=>{
        return <TestimonyItem  key={singleTestimonyItem.id} singleTestimonyItem={singleTestimonyItem} />
      })}
    </Slider>
    </div>
    
  )
}

export default Testimonies