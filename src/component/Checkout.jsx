import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Useauth from '../context/Useauth'

export default function Checkout() {
    const checkoutdata  = useLoaderData()
    const {user} = Useauth()
    const {title,_id,img,price} = checkoutdata
    const orderNow =(e) =>{
e.preventDefault()
const fname =e.target.first.value
const lname = e.target.last.value 
const email =e.target.email.value 
const number =e.target.number.value 
const orderobj ={

  email,
  number,
  title,
  img,
  price,
  service:_id

}
 fetch('http://localhost:3000/ordernow',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(orderobj)

 })
 .then(res=>res.json())
 .then(data=>console.log(data))
 .catch(err=>console.log(err))
 console.log(orderobj)
    }
  return (
    <div className='w-3/4 mx-auto'>
      <div className='my-10'>
        <img src={img} alt="" />
      </div>
      <div className='mb-8'>
      <form action="" onSubmit={orderNow}>
      <div className='grid grid-cols-2  ms-10 gap-8'>
      <input type="text" name='first' placeholder="first name" className="input input-bordered w-full max-w-xs bg-white border-4" />
      <input type="text" name='last' placeholder="last name" className="input input-bordered w-full max-w-xs bg-white border-4" />
      <input type="text" defaultValue={user?.email} name='email' placeholder="email" className="input input-bordered w-full max-w-xs bg-white border-4" readOnly />
      <input type="number" name='number' placeholder="number" className="input input-bordered w-full max-w-xs bg-white border-4" />
      </div>
      <input  type="submit"value="order now" className='btn btn-primary flex mx-auto mt-4' name="" id="" />
      </form>
      </div>
    </div>
  )
}
