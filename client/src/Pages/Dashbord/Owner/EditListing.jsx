import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom"
import useAxiosPublic, { axiosPublic } from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { UserContext } from "../../../context/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";


const EditListing = () => {
    const data = useLoaderData().data;
    const { name, city, address, bedrooms, bathrooms, availabilityDate, rentPerMonth, phoneNumber, description, _id } = data;

    const [isSaving, setIsSaving] = useState(false);
    const [picture, setPicture] = useState(data?.picture);
    const [roomSize, setRoomSize] = useState(data?.roomSize);
    const [isCurrentlyAvailable, setIsCurrentlyAvailable] = useState(false);
    const { user } = useContext(UserContext);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const imageHostingAPIKey = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const address = form.address.value;
        const city = form.city.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const availabilityDate = form.availability.value;
        const rentPerMonth = form.rent.value;
        const phoneNumber = form.phone.value;
        const email = user?.email;
        const description = form.description.value;
        setIsSaving(true);


        //Check for phone number
        if (!/^(01|\+8801|\+88017|\+88018|\+88019)\d{9}$/.test(phoneNumber)) {
            return toast.error("Please provide a valid Bangladeshi number!");
        }

        //Upload the image
        axiosPublic.post(`https://api.imgbb.com/1/upload?key=${imageHostingAPIKey}`, { image: picture }, {
            headers: {
                "content-Type": "multipart/form-data"
            }
        })
            .then(res => {
                if (res.data?.success) {
                    const imageURL = res.data?.data.display_url;
                    const data = { name, address, city, bedrooms, bathrooms, roomSize, picture: imageURL, availabilityDate: isCurrentlyAvailable ? "Currently Available" : availabilityDate, rentPerMonth, phoneNumber, email, description };
                    axiosSecure.put(`/api/house?id=${_id}`, data)
                        .then(res => {
                            if (res.data?.name) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "House information updated successfully!",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                setIsSaving(false);
                                navigate("/dashboard/ownerDashboard");
                            }
                        })

                }

            });



    }




    return <div>
        <div>
            <h3 className="text-center my-5 font-semibold text-3xl">Edit House Details</h3>
        </div>

        <form onSubmit={handleSubmit}>


            {/* row1 */}
            <div className="w-full">
                <div className="flex items-center gap-6 w-full">
                    <div className="w-full">
                        <label htmlFor="name" className="font-semibold mb-2 block">Name</label>
                        <input defaultValue={name} className="w-full py-3 outline-none border-2 px-5 rounded-lg" type="text" name="name" id="name" placeholder="Enter property name" required />
                    </div>

                    <div className="w-full">
                        <label htmlFor="name" className="font-semibold mb-2 block">City</label>
                        <input defaultValue={city} className="w-full py-3 outline-none border-2 px-5 rounded-lg" type="text" name="city" id="city" placeholder="Enter City" required />
                    </div>
                </div>
            </div>

            {/* row2 */}
            <div className="w-full mt-5">
                <div className="flex items-center gap-6 w-full">
                    <div className="w-full">
                        <label htmlFor="name" className="font-semibold mb-2 block">Address</label>
                        <input defaultValue={address} className="w-full py-3 outline-none border-2 px-5 rounded-lg" type="text" name="address" id="address" placeholder="Enter full address" required />
                    </div>

                    <div className="w-full">
                        <label htmlFor="name" className="font-semibold mb-2 block">Room Size</label>
                        <select onChange={(e) => setRoomSize(e.target.value)} className="w-full py-3 outline-none border-2 px-5 rounded-lg" name="roomSize" id="roomSize" defaultValue={roomSize} required>
                            <option value="" disabled>Select room size</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="extra-large">Extra-large</option>
                        </select>

                    </div>
                </div>
            </div>

            {/* row3 */}
            <div className="w-full mt-5">
                <div className="flex items-center gap-6 w-full">
                    <div className="w-full">
                        <label htmlFor="name" className="font-semibold mb-2 block">Bedrooms</label>
                        <input defaultValue={bedrooms} className="w-full py-3 outline-none border-2 px-5 rounded-lg" type="number" name="bedrooms" id="bedrooms" placeholder="How may bedrooms available?" required />
                    </div>

                    <div className="w-full">
                        <label htmlFor="name" className="font-semibold mb-2 block">Bathrooms</label>
                        <input defaultValue={bathrooms} className="w-full py-3 outline-none border-2 px-5 rounded-lg" type="number" name="bathrooms" id="bathrooms" placeholder="How may bathrooms available?" required />
                    </div>
                </div>
            </div>


            {/* row4 */}
            <div className="w-full mt-5">
                <div className="flex items-center gap-6 w-full">
                    <div className="w-full">
                        <label htmlFor="name" className="font-semibold mb-2 block">Availability Date</label>
                        <input defaultValue={!availabilityDate === "Currently Available" && availabilityDate} className="w-full py-3 outline-none border-2 px-5 rounded-lg" type="date" name="availability" id="availability" />
                        <div className="flex items-center gap-1">
                            <input checked={availabilityDate === "Currently Available"} className="w-4  h-4" onChange={(e) => e.target.checked && setIsCurrentlyAvailable(!isCurrentlyAvailable)} type="checkbox" name="" id="" /> <span className="text-sm font-semibold">Currently Available</span>
                        </div>
                    </div>

                    <div className="w-full">
                        <label htmlFor="name" className="font-semibold mb-2 block">Rent per month</label>
                        <input defaultValue={rentPerMonth} className="w-full py-3 outline-none border-2 px-5 rounded-lg" type="number" name="rent" id="rent" placeholder="How much is the rent for a month?" required />
                    </div>
                </div>
            </div>

            {/* row4 */}
            <div className="w-full mt-5">
                <div className="flex items-center gap-6 w-full">
                    <div className="w-full">
                        <label htmlFor="name" className="font-semibold mb-2 block">Picture</label>
                        <input type="file" onChange={(e) => setPicture(e.target.files)} className="file-input file-input-bordered w-full" name="picture" />

                    </div>

                    <div className="w-full">
                        <label htmlFor="name" className="font-semibold mb-2 block">Phone</label>
                        <input defaultValue={phoneNumber} className="w-full py-3 outline-none border-2 px-5 rounded-lg" type="text" name="phone" id="phone" defaultValue={user?.phone} placeholder="Enter your phone number" required />
                    </div>
                </div>
            </div>


            {/* row5 */}
            <div className="mt-5">
                <div>
                    <label htmlFor="name" className="font-semibold mb-2 block">Description</label>
                    <textarea defaultValue={description} className="textarea textarea-bordered w-full h-[120px]" name="description" placeholder="Write a brief description" required></textarea>
                </div>
            </div>


            {/* Submit */}
            <div className="mb-8">
                <button disabled={isSaving} className="w-full mt-5 btn btn-primary" type="submit" > {isSaving ? "Saving..." : "Save"}</button>
            </div>



        </form>

        <ToastContainer />
    </div>

}

export default EditListing