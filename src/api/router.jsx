import { createBrowserRouter } from "react-router-dom";
import About from "../component/About/About";
import Home from "../component/Home/Home";

import Checkout from "../component/Checkout";
import Login from "../component/login/Login";
import Privateroute from "../component/login/Privateroute";
import Services from "../component/services/Services";
import Signup from "../component/signup/Signup";
import Main from "../component/utilities/Main";

export const router = createBrowserRouter([
    {path:'/',element:<Main/>,children:[
 {path:"/",element:<Home/>},
 {path:'/login',element:<Login></Login>},
 {path:'/signup',element:<Signup/>},
 {path:'/about',element:<Privateroute><About></About></Privateroute>},
 {path:'/services',element:<Privateroute><Services></Services></Privateroute>},
 {path:'/checkout/:id',element:<Checkout></Checkout>,
loader:({params})=>fetch(`http://localhost:3000/service/${params.id}`)
}


    ]}
])