import React from 'react'
import img1 from '../../assets/images/homeCarousel/1.jpg'
import img2 from '../../assets/images/homeCarousel/2.jpg'
import img3 from '../../assets/images/homeCarousel/3.jpg'
import img4 from '../../assets/images/homeCarousel/4.jpg'

export default function Carousel() {
  return (
    <div className="carousel w-3/4  my-12 mx-auto">
    <div id="slide1" className="carousel-item relative w-full">
      <img src={img1} className="w-full rounded-box" />
      <div className="absolute flex flex-col justify-end transform -translate-y-1/2 left-20 top-1/3 ">
   <h1 className='text-6xl font-bold text-white'>
   Affordable <br />

     Price For Car <br />
     Servicing
   </h1>
   <p className='mt-3 text-white'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
   <div className='flex flex-row mt-3  '>
   <button className="btn mr-4 btn-active text-white bg-red-600 border-0">Discover More</button>
   <button className="btn btn-outline">Latest Project</button>

   </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
        <a href="#slide2" className="btn btn-circle bg-orange-600 border-0">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src={img2}className="w-full rounded-box" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src={img3} className="w-full rounded-box" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
      <img src={img4} className="w-full rounded-box" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  )
}
