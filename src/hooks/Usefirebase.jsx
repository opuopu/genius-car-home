
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import Initialization from '../config/Init';
Initialization()
const Usefirebase =() =>{
const [user,setuser] = useState({})
const auth = getAuth()
// createuser with email password
const createUserWithEmail =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

// LOGIN USER WITH EMAIL AND PASSWORD
const LoginWithEmail =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }
//    updatename
 const updateprofile = (object) =>{
   return updateProfile(auth.currentUser,object)
 }


   useEffect(()=>{
    const unsubscribe =   onAuthStateChanged(auth,user=>{
           if(user){
               setuser(user)
           
           }
           else{
               setuser({})
           }
       })
       return ()=> unsubscribe()
   },[])

// signOut
const signout  = ()=>{
    return signOut(auth)
}
return {createUserWithEmail,signout,LoginWithEmail,updateprofile,user}
}

export default Usefirebase