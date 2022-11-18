import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Dashbord from "../../Pages/Dashbord/Dashbord/Dashbord";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Registration from "../../Pages/Registration/Registration/Registration";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Registration></Registration>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
        ]
    },
    {
        path:'/dashbord',
        element:<PrivateRoute><Dashbord></Dashbord></PrivateRoute>
    }
])