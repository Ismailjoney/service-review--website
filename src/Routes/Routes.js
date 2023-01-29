import { createBrowserRouter } from "react-router-dom";
import Login from "../FormInfo/LogIn/Login";
import Registration from "../FormInfo/Registration/Registration";
import Main from "../Layout/Main";
import NotFound from "../notFound/NotFound";
import AddService from "../Pages/AddService/AddService";
import MyAddServices from "../Pages/AddService/MyAddService/MyAddServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import AllServiceCardInfo from "../Pages/Home/OurService/AllServiceCardInfo/AllServiceCardInfo";
import ShowAllServices from "../Pages/Home/OurService/ShowAllServices/ShowAllServices";
import MyReview from "../Pages/MyReview/MyReview";
import PrivetRoute from "./privetRoute/PrivetRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/showallservices',
                element: <ShowAllServices></ShowAllServices>,
                loader: () => (fetch('https://service-review-website-server-jade.vercel.app/allservice'))
            },
            {
                path: '/allservicecardinfo/:id',
                element: <PrivetRoute><AllServiceCardInfo></AllServiceCardInfo></PrivetRoute>,
                loader: ({ params }) => fetch(`https://service-review-website-server-jade.vercel.app/service/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/reg',
                element: <Registration></Registration>
            },
            {
                path: '/review',
                element: <PrivetRoute><MyReview></MyReview></PrivetRoute>,

            },
            {
                path: '/myaddservice',
                element: <PrivetRoute><MyAddServices></MyAddServices></PrivetRoute>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }

        ]
    }
])