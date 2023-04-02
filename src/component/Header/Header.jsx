import React from 'react'
import { Link } from 'react-router-dom'
import Useauth from '../../context/Useauth'
export default function Header() {
  const {user,signout} = Useauth()
  return (
<div className="navbar bg-white-100 w-3/4 mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
     <Link to="/">  <li>Home</li></Link>
     <Link to="/about">    <li>About</li></Link>

     <Link to="/blog">    <li>Blog</li></Link>
     <Link to="/login"><li>Login</li></Link>
 
      
      </ul>
    </div>
a
    <a className="btn btn-ghost normal-case text-xl">Car Doctor</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className=""><a><Link to="/">Home</Link></a></li>
      <li className=""><a><Link to="/services">service</Link></a></li>

      <li className=""><a><Link to="/about">About</Link></a></li>
      <li className=""><a><Link to="/about1">About1</Link></a></li>
       {
        user?.email && user?.displayName ? <li>{user?.displayName}</li> :       <li className=""><a><Link to="/Login">Login</Link></a></li>
       }
    {
      user?.uid && user?.email && <button className='btn btn-primary' onClick={signout}>Log out</button>
    }

      
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-error">Appointment Now</button>

  </div>
</div>
  )
}
