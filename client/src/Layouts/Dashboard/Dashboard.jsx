import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import "./dashboard.css";
import { useContext } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { UserContext } from "../../context/AuthProvider";
const Dashboard = () => {

    const { user } = useContext(UserContext);

    return (


        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <div className="p-5">
                    <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden text-2xl"><RiMenu3Fill /></label>
                </div>

                <div className="overflow-x-auto container mx-auto px-5">
                    <Outlet />
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <div className='text-center mb-20'>
                        <Link to="/" className='font-bold text-3xl'>House Hunter<span className='text-blue-600'>.</span></Link>
                    </div>

                    {
                        user?.role === "House Owner" ?
                            <>
                                <NavLink className="flex items-center gap-2 bg-white border-2 w-full py-3 px-5 rounded font-semibold " to="/dashboard/ownerDashboard"><FaHouseChimneyWindow className="text-xl" /> My listed houses</NavLink>
                                <NavLink className="flex items-center gap-2 bg-white border-2 w-full py-3 px-5 rounded font-semibold  mt-5" to="/dashboard/new"><FaClipboardList className="text-xl" /> Add a new house</NavLink>
                            </>
                            : ""
                    }
                    <hr className="mt-20 border-b-2 border-black" />

                    <NavLink className="flex items-center gap-2 bg-white border-2 w-full py-3 px-5 rounded font-semibold mt-5" to="/"><TiHome className="text-xl" /> Home</NavLink>

                </ul>

            </div>
        </div>
    )
}

export default Dashboard