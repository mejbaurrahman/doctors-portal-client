import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/Main/DashbordLayout/DashboardLayout";
import Main from "../../Layouts/Main/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddADoctor from "../../Pages/Dashbord/AddADoctor/AddADoctor";
import AllUsers from "../../Pages/Dashbord/AllUsers/AllUsers";
import Dashbord from "../../Pages/Dashbord/Dashbord/Dashbord";
import ManageDoctor from "../../Pages/Dashbord/ManageDoctor/ManageDoctor";
import MyAppointments from "../../Pages/Dashbord/MyAppointment/MyAppointments";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Registration from "../../Pages/Registration/Registration/Registration";
import AdminRoute from "../AdminRoute/AdminRoute";
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
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashbord',
                element:<MyAppointments></MyAppointments>
            },
            {
                path:'/dashbord/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
            ,
            {
                path:'/dashbord/adddoctor',
                element:<AdminRoute><AddADoctor></AddADoctor></AdminRoute>
            }
            ,
            {
                path:'/dashbord/managedoctor',
                element:<AdminRoute><ManageDoctor></ManageDoctor></AdminRoute>
            }
        ]
    }
])