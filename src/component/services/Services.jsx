import React, { useEffect, useState } from 'react'
import Service from './Service'

export default function Services() {
    const [services,setservices] = useState([])
    useEffect(()=>{
fetch('http://localhost:3000/services')
.then(res=>res.json()
.then(data=>setservices(data))
)


    },[])
  return (
    <div className='w-3/4 mx-auto mb-10'>
   <p className='text-1xl font-bold text-center text-red-600'>About Us</p>
   <h1 className="text-5xl text-center py-2 font-bold">Our Service Area</h1>
   <p className="py-2 text-neutral-600 text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
<div className='grid grid-cols-3 gap-8'>
{
    services?.map(service=> <Service service={service} key={service?._id}/>)
   }
</div>
    </div>
  )
}
