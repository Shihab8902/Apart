import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const HouseCard = ({ house }) => {
    const { picture, name, availabilityDate, rentPerMonth, city, description } = house;
    const { user } = useContext(UserContext);

    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const handleHouseBook = (house) => {
        if (!user) {
            navigate("/login");
            return;
        }

        if (user?.role !== "House Renter") {
            toast.error("Only user group of house renters can book a house!");
            return;
        }

        //Get total bookings
        axiosPublic.get(`/api/bookings/total?email=${user?.email}`)
            .then(res => {
                if (res?.data?.total >= 2) {
                    toast.error("Maximum booking limit of two exceed!");
                    return;
                }
                //Check for duplicates
                axiosPublic.get(`/api/getBooked?id=${house?._id}`)
                    .then(res => {
                        if (res.data?.message) {
                            toast.error("The house is already booked!");
                            return;
                        } else {
                            const data = { ...house, renterEmail: user.email, renterPhone: user?.phone }

                            axiosSecure.post(`/api/bookings`, data)
                                .then(res => {
                                    if (res?.data?.name) {
                                        Swal.fire({
                                            title: "Booked!",
                                            text: "House booked successfully!",
                                            icon: "success"
                                        });
                                    }
                                })
                        }
                    })
            });






    }

    return <div>
        <div className="relative">
            <div className="overflow-hidden w-full h-60 rounded-lg">
                <img className="w-full h-full hover:scale-110 transition-all duration-500 rounded-lg" src={picture} alt="" />
            </div>

            <div className="bg-white p-3 absolute right-0 -bottom-8 w-11/12 rounded-tl-lg">
                <h3 className="font-bold text-lg">{name.length > 40 ? name.slice(0, 40) + "...." : name}</h3>
                <div className="flex justify-between items-center mt-1">
                    <p className="font-semibold text-xs">${rentPerMonth}/month</p>
                    <p className="font-semibold text-xs">{availabilityDate !== "Currently Available" ? `Available By: ${availabilityDate}` : <span className="flex items-center gap-1"><FaCheck className="text-green-500" /> {availabilityDate}</span>}</p>
                </div>

            </div>

        </div>

        <div className="mt-10">
            <p className="flex items-center font-semibold gap-1 text-sm"><FaLocationDot className="text-red-600" /> {city}</p>
            <p className="mt-3 font-medium text-sm text-gray-500">{description?.length > 60 ? description.slice(0, 60) + "...." : description}</p>
            <div>
                <button onClick={() => handleHouseBook(house)} className="w-full bg-blue-600 text-white py-3 mt-5 rounded-lg font-semibold cursor-pointer btn hover:text-black">Book House</button>
            </div>
        </div>

        <ToastContainer />
    </div>
}

export default HouseCard