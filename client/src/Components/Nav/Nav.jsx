import { Link } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';


const Nav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return <nav className='flex justify-between sticky top-0  bg-white items-center py-6'>

        <div>
            <Link className='text-3xl font-bold ' to="/">Apart<span className=' text-blue-500'>.</span></Link>
        </div>

        <ul className='hidden lg:flex gap-10' >
            <li className='font-bold text-lg hover:underline'><Link to="/">Home</Link></li>
            <li className='font-bold text-lg hover:underline'><Link to="/about">About</Link></li>
            <li className='font-bold text-lg hover:underline'><Link to="/houses">Houses</Link></li>
            <li className='font-bold text-lg hover:underline'><Link to="/login">Login</Link></li>
        </ul>


        <div className='lg:hidden '>
            <button className='text-3xl' onClick={handleMenuToggle}><IoMenuSharp /></button>

            <div className={`fixed top-0 right-0 bg-slate-700 transition-all duration-500 ${isMenuOpen ? " translate-x-0" : " translate-x-full"}  text-white h-screen  w-3/4 md:w-1/2 px-6 py-5 z-50`}>
                <div className='flex justify-end'>
                    <button className='text-2xl' onClick={handleMenuToggle}><RxCross1 /></button>
                </div>
                <ul className='mt-10'>
                    <li onClick={handleMenuToggle} className='mt-5 font-semibold'><Link to="/">Home</Link></li>
                    <li onClick={handleMenuToggle} className='mt-5 font-semibold'><Link to="/about">About</Link></li>
                    <li onClick={handleMenuToggle} className='mt-5 font-semibold'><Link to="/houses">Houses</Link></li>
                    <li onClick={handleMenuToggle} className='mt-5 font-semibold'><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>


    </nav>
}

export default Nav