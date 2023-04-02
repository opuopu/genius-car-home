import { useContext } from "react"
import { authContext } from "./Authprovider"



const Useauth =() =>{
    return useContext(authContext)
}
export default Useauth