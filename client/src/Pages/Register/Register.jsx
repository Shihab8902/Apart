import { useContext, useState } from 'react';
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/AuthProvider';
const Register = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [role, setRole] = useState('');

    const { registerUser } = useContext(UserContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;


        //Check for phone number
        if (!/^(01|\+8801|\+88017|\+88018|\+88019)\d{9}$/.test(phone)) {
            return toast.error("Please provide a valid Bangladeshi number!");
        }

        //Check for password
        if (password.length < 6) {
            return toast.error("Password should be at least 6 character long!");
        }

        const user = { name, email, phone, role, password };
        registerUser(user);


    }

    return (
        <div className='p-3 md:p-6'>


            <div className='flex min-h-screen justify-center items-center container mx-auto'>
                <form onSubmit={handleSubmit} className='rounded-lg md:p-10 md:border-2 w-full md:w-3/4 lg:w-1/2'>

                    <div className='text-center mb-7'>
                        <Link to="/" className='font-bold text-3xl'>House Hunter<span className='text-blue-600'>.</span></Link>
                    </div>

                    <div>
                        <label className='font-bold block mb-2' htmlFor="name">Name</label>
                        <div className='flex items-center border-2 rounded-lg'>
                            <span className='ml-3 text-xl text-gray-400'><FiUser /></span>
                            <input className='w-full px-4 py-3 outline-none rounded-tr-lg rounded-br-lg font-bold text-black placeholder:font-normal' type="text" name="name" id="name" placeholder='Enter your name' required />
                        </div>
                    </div>


                    <div className='my-5'>
                        <label className='font-bold block mb-2' htmlFor="email">Email</label>
                        <div className='flex items-center border-2 rounded-lg'>
                            <span className='ml-3 text-xl text-gray-400'><MdOutlineMail /></span>
                            <input className='w-full px-4 py-3 outline-none rounded-tr-lg rounded-br-lg font-bold text-black placeholder:font-normal' type="email" name="email" id="email" placeholder='Enter your email' required />
                        </div>
                    </div>

                    <div className='my-5'>
                        <label className='font-bold block mb-2' htmlFor="phone">Phone</label>
                        <div className='flex items-center border-2 rounded-lg'>
                            <span className='ml-3 text-xl text-gray-400'><FaPhoneAlt /></span>
                            <input className='w-full px-4 py-3 outline-none rounded-tr-lg rounded-br-lg font-bold text-black placeholder:font-normal' type="string" name="phone" id="phone" placeholder='Enter your phone number' required />
                        </div>
                    </div>

                    <div className='my-5'>
                        <label className='font-bold block mb-2' htmlFor="phone">Role</label>
                        <div className='flex items-center border-2 rounded-lg'>
                            <span className='ml-3 text-xl text-gray-400'><FaRegUser /></span>
                            <select onChange={(e) => setRole(e.target.value)} defaultValue="" className='w-full px-4 py-3 outline-none rounded-tr-lg rounded-br-lg font-bold text-black placeholder:font-normal' name="role" id="role" required>
                                <option value="">Select a user role</option>
                                <option value="House Owner">House Owner</option>
                                <option value="House Renter">House Renter</option>
                            </select>
                        </div>
                    </div>

                    <div className='my-5'>
                        <label className='font-bold block mb-2' htmlFor="password">Password</label>
                        <div className='flex items-center border-2 rounded-lg'>
                            <span className='ml-3 text-xl text-gray-400'><IoIosLock /></span>
                            <input className='w-full px-4 py-3 outline-none rounded-tr-lg rounded-br-lg font-bold text-black placeholder:font-normal' type={isPasswordVisible ? "text" : "password"} name="password" id="password" placeholder='Enter your password' required />
                            <span onClick={() => setIsPasswordVisible(!isPasswordVisible)} className='text-xl text-gray-400 cursor-pointer mr-3'>
                                {
                                    isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />
                                }
                            </span>
                        </div>

                    </div>

                    <div>
                        <button type='submit' className='w-full bg-blue-600 py-3 text-white font-semibold rounded-lg '>Register</button>
                    </div>

                    <p className='text-center mt-5 font-medium'>Already have an account? <Link className='text-blue-500 hover:underline' to="/login">Login</Link></p>

                </form>


            </div>

            <ToastContainer />
        </div>
    )
}

export default Register