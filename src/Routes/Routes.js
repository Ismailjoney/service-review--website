import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import AllServiceCardInfo from "../Pages/Home/OurService/AllServiceCardInfo/AllServiceCardInfo";
import ShowAllServices from "../Pages/Home/OurService/ShowAllServices/ShowAllServices";
import Service from "../Pages/Services/Service";
 

export const router = createBrowserRouter([
    {
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/blog',
            element: <Blog></Blog>
        },
        {
            path:'/service',
            element:<Service></Service>
        },
        {
            path:'/showallservices',
            element:<ShowAllServices></ShowAllServices>,
            loader:()=>(fetch('http://localhost:5000/allservice'))  
        },
        {
            path:'/allservicecardinfo/:id',
            element:<AllServiceCardInfo></AllServiceCardInfo>,
            loader:({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        }
         
    ]
    }
])