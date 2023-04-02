import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/images/login/login.svg'
import Useauth from '../../context/Useauth'
export default function Signup() {
    const {createUserWithEmail,updateprofile}  = Useauth()
    const signupnow =(e) =>{
        e.preventDefault()
     const name = e.target.name.value
     const email = e.target.email.value
     const password = e.target.password.value
     const displayName ={
        displayName:name
     }
      createUserWithEmail(email,password)
      .then(()=>{
         updatename(displayName)
      })
      .finally(()=>{
          from.e.reset()
      })
    }

    const updatename =(name) =>{
        updateprofile(name)
    .then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    }
  return (
    <div className="hero min-h-screen bg-white">
    <div className="hero-content flex-col justify-between lg:flex-row gap-8">
      <div className="text-center lg:text-left">
        <img src={img} alt="" />
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
        <div className="card-body">
           <form action="" onSubmit={signupnow}>
            <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="name" className="input input-bordered bg-white" />
          </div>
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
          <input type='submit' value='SignUp Now'  className="btn btn-primary"/>
          </div>
     </form>
          
        </div>
      </div>
    </div>
  </div>
  )
}
