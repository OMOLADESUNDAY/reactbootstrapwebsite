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
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div >
      <h1 className='majorTestimonyText'>Our Testimonials</h1>
    <Slider className='testimonySlider' {...settings}>
        {TestimonyData.map((singleTestimonyItem)=>{
        return <TestimonyItem  key={singleTestimonyItem.id} singleTestimonyItem={singleTestimonyItem} />
      })}
    </Slider>
    </div>
    
  )
}

export default Testimonies