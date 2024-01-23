import { Link } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useContext, useState } from 'react';
import { UserContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';


const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { user, logOutUser } = useContext(UserContext);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    //Handle log out
    const handleLogOut = () => {
        Swal.fire({
            title: "Logout?",
            text: "Are you sure want to log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "red",
            cancelButtonColor: "green",
            confirmButtonText: "Logout"
        }).then((result) => {
            if (result.isConfirmed) {
                logOutUser();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully logged out!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }


    return <nav className='flex justify-between container mx-auto px-5  items-center py-6'>

        <div>
            <Link className='text-3xl font-bold text-white' to="/">House Hunter<span className=' text-blue-500'>.</span></Link>
        </div>

        <ul className='hidden lg:flex gap-10 text-white items-center' >
            <li className='font-bold text-lg hover:underline'><Link to="/">Home</Link></li>
            <li className='font-bold text-lg hover:underline'><Link to="/houses">Houses</Link></li>
            {
                user ? <div className='text-black'>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="User" src="https://i.ibb.co/FKyGxmB/gray-photo-placeholder-icon-design-ui-vector-35850819.webp" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <div>
                                <p className='text-center font-semibold mt-2 text-xs'>{user?.name}</p>
                                <p className='text-center font-semibold text-xs'>{user?.email}</p>
                                <p className='text-primary font-semibold my-3 text-sm hover:underline text-center'><Link to="/dashboard">Dashboard</Link></p>
                                <button onClick={handleLogOut} className='w-full bg-red-600 text-white font-semibold py-2 rounded-lg'>Logout</button>
                            </div>
                        </ul>
                    </div>
                </div>
                    : <li className='font-bold text-lg hover:underline'><Link to="/login">Login</Link></li>
            }
        </ul>


        <div className='flex items-center gap-1 lg:hidden '>
            {
                user ? <div className='text-black'>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="User" src="https://i.ibb.co/FKyGxmB/gray-photo-placeholder-icon-design-ui-vector-35850819.webp" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <div>
                                <p className='text-center font-semibold mt-2 text-xs'>{user?.name}</p>
                                <p className='text-center font-semibold text-xs'>{user?.email}</p>
                                <p className='text-primary font-semibold my-3 text-sm hover:underline text-center'><Link to="/dashboard">Dashboard</Link></p>
                                <button onClick={handleLogOut} className='w-full bg-red-600 text-white font-semibold py-2 rounded-lg'>Logout</button>
                            </div>
                        </ul>
                    </div>
                </div>
                    : ""
            }
            <button className='text-3xl text-white' onClick={handleMenuToggle}><IoMenuSharp /></button>

            <div className={`fixed top-0 right-0 bg-slate-700 transition-all duration-500 ${isMenuOpen ? " translate-x-0" : " translate-x-full"}  text-white h-screen  w-3/4 md:w-1/2 px-6 py-5 z-50`}>
                <div className='flex justify-end'>
                    <button className='text-2xl' onClick={handleMenuToggle}><RxCross1 /></button>
                </div>
                <ul className='mt-10'>
                    <li onClick={handleMenuToggle} className='mt-5 font-semibold'><Link to="/">Home</Link></li>
                    <li onClick={handleMenuToggle} className='mt-5 font-semibold'><Link to="/houses">Houses</Link></li>
                    {
                        user ? "" : <li onClick={handleMenuToggle} className='mt-5 font-semibold'><Link to="/login">Login</Link></li>
                    }
                </ul>
            </div>
        </div>


    </nav>
}

export default Nav