




import React, { createContext } from 'react'
import Usefirebase from '../hooks/Usefirebase'

export const authContext = createContext()
 const Authprovider=({children}) =>{
    const firebase = Usefirebase()
  return (
   <authContext.Provider value={firebase}>
    {children}
   </authContext.Provider>
  )
}
export default Authprovider