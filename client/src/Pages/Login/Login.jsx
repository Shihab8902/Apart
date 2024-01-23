import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { UserContext } from "../../context/AuthProvider";



const Login = () => {


    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const { logInUser } = useContext(UserContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser({ email, password });

    }


    return (
        <div className='p-3 md:p-6'>

            <div className='flex min-h-screen justify-center items-center container mx-auto'>


                <div className='rounded-lg md:p-10 md:border-2 w-full md:w-3/4 lg:w-1/2'>
                    <form onSubmit={handleSubmit} >

                        <div className='text-center mb-7'>
                            <Link to="/" className='font-bold text-3xl'>House Hunter<span className='text-blue-600'>.</span></Link>
                        </div>




                        <div className='my-5'>
                            <label className='font-bold block mb-2' htmlFor="name">Email</label>
                            <div className='flex items-center border-2 rounded-lg'>
                                <span className='ml-3 text-xl text-gray-400'><MdOutlineMail /></span>
                                <input className='w-full px-4 py-3 outline-none rounded-tr-lg rounded-br-lg font-bold text-black placeholder:font-normal' type="email" name="email" id="email" placeholder='Enter your email' required />
                            </div>

                        </div>

                        <div className='my-5'>
                            <label className='font-bold block mb-2' htmlFor="name">Password</label>
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
                            <button type='submit' className='w-full bg-blue-600 py-3 text-white font-semibold rounded-lg '>Login</button>
                        </div>

                        <p className='text-center mt-5 font-medium'>Don't have an account? <Link className='text-blue-500 hover:underline' to="/register">Register</Link></p>

                    </form>








                </div>


            </div>




        </div>
    )
}

export default Login