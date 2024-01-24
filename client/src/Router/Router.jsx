import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import OwnerDashboard from "../Pages/Dashbord/Owner/OwnerDashboard";
import AddNewHouse from "../Pages/Dashbord/Owner/AddNewHouse";
import EditListing from "../Pages/Dashbord/Owner/EditListing";
import axios from "axios";
import RenterDashboard from "../Pages/Dashbord/Renter/RenterDashboard";
import OwnerBookings from "../Pages/Dashbord/Owner/OwnerBookings";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard/ownerDashboard",
                element: <OwnerDashboard />
            },
            {
                path: "/dashboard/new",
                element: <AddNewHouse />
            },
            {
                path: "/dashboard/edit/:id",
                element: <EditListing />,
                loader: ({ params }) => axios.get(`http://localhost:9000/api/house/${params.id}`)
            },
            {
                path: "/dashboard/renterDashboard",
                element: <RenterDashboard />
            },
            {
                path: "/dashboard/ownerBookings",
                element: <OwnerBookings />
            }
        ]
    }
]);

