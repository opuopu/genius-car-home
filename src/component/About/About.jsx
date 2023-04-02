import React from 'react'
import img2 from '../../assets/images/about_us/parts.jpg'
import img1 from '../../assets/images/about_us/person.jpg'

export default function About() {
  return (

    <div className="hero min-h-screen bg-white-200 my-10 w-3/4 mx-auto" >
  <div className="hero-content flex-col lg:flex-row">
  <div className='w-1/2 relative'>
    <img src={img1} alt="" className='w-4/5 h-full' />
    <img className='absolute  border-t-8 border-s-8 border-white w-3/5 right-10 top-1/2' src={img2} alt="" />
  </div>
    <div className='w-1/2'>
        <p className='text-1xl font-bold text-red-600'>About Us</p>
      <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
      <p className="py-6 text-neutral-600	">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="py-2 text-neutral-600">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn bg-red-600 text-white text-bold border-0">Get More Info</button>
    </div>
  </div>
</div>
  )
}
