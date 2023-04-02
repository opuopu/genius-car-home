import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import img from '../../assets/images/login/login.svg'
import Useauth from '../../context/Useauth'
export default function Login() {
  const {LoginWithEmail} = Useauth()
const location = useLocation()
console.log(location)
const navigate = useNavigate()
let from =location?.state?.from.pathname || '/'
console.log(from)


  const [error,seterror] = useState('')
  const handleLogin =e=>{
    e.preventDefault()
    const email = e.target.email.value 
    const password = e.target.password.value 
        LoginWithEmail(email,password)
        .then((result)=>{
          const user = result.user
          navigate(from,{replace:true})
        })
        .catch((error)=>{
           seterror(error.message)
        })
        .finally(()=>{
          
        })
  }
  return (
<div className="hero min-h-screen bg-white">
  <div className="hero-content flex-col justify-between lg:flex-row gap-8">
    <div className="text-center lg:text-left">
      <img src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
      <div className="card-body">
      <form action="" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" name='email' placeholder="email" className="input input-bordered bg-white" />
          </div>
          <div className="form-control">
          <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" name='password' placeholder="password" className="input input-bordered bg-white" />
          
           <p className='text-sm mt-2 text-neutral-400'>already have account?<Link className='bg-red' to='/login'>Login</Link></p>
          </div>
          <div className="form-control mt-6">
          <input type='submit' value="LOGIN"  className="btn btn-primary"/>
          </div>
     </form>
      </div>
    </div>
  </div>
</div>
  )
}
