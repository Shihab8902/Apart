import { FaCheck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const HouseCard = ({ house }) => {
    const { picture, name, availabilityDate, rentPerMonth, city, description } = house;

    return <div>
        <div className="relative">
            <div className="overflow-hidden w-full h-60">
                <img className="w-full h-full hover:scale-110 transition-all duration-500" src={picture} alt="" />
            </div>

            <div className="bg-white p-3 absolute right-0 -bottom-8 w-11/12">
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
                <button className="w-full bg-blue-600 text-white py-3 mt-5 rounded-lg font-semibold cursor-pointer btn hover:text-black">View Details</button>
            </div>
        </div>
    </div>
}

export default HouseCard