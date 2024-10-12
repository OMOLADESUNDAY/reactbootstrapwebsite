import React from 'react'
import './testimonyItem.css'

const TestimonyItem = ({singleTestimonyItem}) => {
    const {image,name,testimony}=singleTestimonyItem
  return (
    <div className='testimonyItemContainer' >
        <div className='testimonyimgcontainer' >
        <img src={image} alt={name} className='testimonyimg' />
        </div>
        <h2  className='testimonyName'>{name}</h2>
        <p className='testimonytxt'>{testimony}</p>
    </div>
  )
}

export default TestimonyItem