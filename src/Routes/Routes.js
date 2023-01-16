import { createBrowserRouter } from "react-router-dom";
import Login from "../FormInfo/LogIn/Login";
import Registration from "../FormInfo/Registration/Registration";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import AllServiceCardInfo from "../Pages/Home/OurService/AllServiceCardInfo/AllServiceCardInfo";
import ShowAllServices from "../Pages/Home/OurService/ShowAllServices/ShowAllServices";
import MyReview from "../Pages/MyReview/MyReview";
import Service from "../Pages/Services/Service";
import PrivetRoute from "./privetRoute/PrivetRoute";
 

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
            element:<PrivetRoute><AllServiceCardInfo></AllServiceCardInfo></PrivetRoute>,
            loader:({params}) => fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path: '/reg',
            element:<Registration></Registration>
        },
        {
            path:'/review',
            element: <MyReview></MyReview>
        }
         
    ]
    }
])