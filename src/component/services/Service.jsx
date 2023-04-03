import React from 'react'
import { Link } from 'react-router-dom'

export default function Service({service}) {
    const {title,img,price,description,facility} = service
  return (
    <div className="card card-compact w-96 bg-white-100 shadow-lg">
    <figure><img src={img} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
  
      <div className="card-actions justify-between items-center">
        <h5 className='text-red-600 text-lg font-bold'>price: ${price}</h5>
       <Link to={`/checkout/${service?._id}`}> <button className="btn btn-primary">Buy Now</button></Link>
      </div>
    </div>
  </div>
  )
}
