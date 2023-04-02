import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Useauth from '../../context/Useauth'

export default function Privateroute({children}) {
   const {user} = Useauth()
   const location = useLocation()
   console.log(location)
   if(user && user?.uid){
    return children
   }
   return <Navigate to='/login' state={{from:location}}replace ></Navigate>
}
