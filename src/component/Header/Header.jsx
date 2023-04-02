import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
<div className="navbar bg-white-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
     <Link to="/">    <li>Home</li></Link>
     <Link to="/about">    <li>About</li></Link>
     <Link to="/services">    <li>Services</li></Link>
     <Link to="/blog">    <li>Blog</li></Link>
     <Link to="/login">    <li>Login</li></Link>
       
      
      </ul>
    </div>

    <a className="btn btn-ghost normal-case text-xl">Car Doctor</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className=""><a><Link t="/">Home</Link></a></li>
      <li className=""><a><Link to="/services">Services</Link></a></li>
      <li className=""><a><Link to="/about">About</Link></a></li>
      <li className=""><a><Link to="/login">Login</Link></a></li>

      
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-error">Appointment Now</button>

  </div>
</div>
  )
}
