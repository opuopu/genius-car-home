import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Main from "../component/utilities/Main";

export const router = createBrowserRouter([
    {path:'/',element:<Main/>,children:[
 {path:"/",element:<Home/>},
 

    ]}
])