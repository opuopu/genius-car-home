import React from 'react'
import img1 from '../../assets/images/homeCarousel/1.jpg'
import img2 from '../../assets/images/homeCarousel/2.jpg'
import img3 from '../../assets/images/homeCarousel/3.jpg'
import img4 from '../../assets/images/homeCarousel/4.jpg'
import Citem from './Citem'
export default function Carousel() {
    const slides =[
        {
          img:img1,
          id:1,
          prev:4,
          next:2
        },
        {
          img:img2,
          id:2,
          prev:1,
          next:3
        },
        {
          img:img3,
          id:3,
          prev:2,
          next:4
        },
        {
          img:img4,
          id:4,
          prev:3,
          next:1
        },
       
    ]
  return (
    <div className="carousel w-3/4  my-12 mx-auto">
{
    slides?.map(slide=><Citem slide={slide}></Citem>)
}
  </div>
  )
}
