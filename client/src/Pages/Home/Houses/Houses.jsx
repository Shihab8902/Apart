import { useEffect, useState } from "react";
import { IoFunnelSharp } from "react-icons/io5";
import './houses.css';
import useGetPublic from "../../../hooks/useGetPublic";
import HouseCard from "./HouseCard";
import { BsFunnel } from "react-icons/bs";
import NoDataLoader from "../../../Components/Loader/NoDataLoader";


const Houses = () => {

    //Rent range
    const [minRent, setMinRent] = useState(400);
    const [maxRent, setMaxRent] = useState(12000);

    //Filter logics
    const [availableOnly, setAvailableOnly] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const [roomSize, setRoomSize] = useState('');
    const [bedRooms, setBedRooms] = useState(null);


    //Pagination
    const dataPerPage = 8;
    const { data: total } = useGetPublic(["totalData"], `/api/houses/total`) || 0;
    const totalPages = Math.ceil(total?.total / dataPerPage) || 0;
    const pages = [...Array(totalPages).keys()];
    const [currentPage, setCurrentPage] = useState(0);


    //Get House Data
    const { data: houses, isPending, refetch } = useGetPublic(["houses"], `/api/houses?page=${currentPage}&limit=${dataPerPage}&availability=${availableOnly}&city=${selectedCity}&size=${roomSize}&bedRooms=${bedRooms}`);

    //Refetch data after certain filter
    useEffect(() => {
        refetch();
    }, [currentPage, availableOnly, selectedCity, roomSize, bedRooms]);





    return <div className="my-10 container mx-auto px-5 ">
        <div className="mb-10">
            <h3 className="text-center text-4xl font-medium tracking-wide">Browse Houses</h3>
            <p className="text-center mt-5 mx-auto text-gray-600 text-sm md:text-base md:w-5/12">Explore our collection of beautifully crafted houses and find your dream home. </p>
        </div>

        <div >

            {/* Filter menus */}
            <div className="drawer z-50  mb-5 overflow-y-auto">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className="flex justify-end  lg:mb-5">

                        <label htmlFor="my-drawer" className="drawer-button text-2xl flex items-center cursor-pointer"><BsFunnel /> <span className="text-sm font-semibold">Filter</span></label>

                    </div>
                </div>
                <div className="drawer-side w-fit custom-thumb">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <aside >
                            <h4 className="flex  items-center gap-1 text-2xl border-b-2 border-primary pb-2 font-semibold"><IoFunnelSharp /> Filter by</h4>

                            {/* Availability */}
                            <div className="flex gap-1 font-semibold items-center my-10 ">
                                <input onChange={(e) => setAvailableOnly(e.target.checked)} className="w-4 h-4 cursor-pointer" type="checkbox" name="availability" id="availability" />  <span>Currently Available Only</span>
                            </div>

                            {/* City */}
                            <select onChange={(e) => setSelectedCity(e.target.value)} name="city" id="city" defaultValue="" className=" border w-full cursor-pointer outline-none border-primary px-3 py-2 rounded">
                                <option value="" disabled>City</option>
                                <option value="any" >Any</option>
                                <option value="dhaka"  >Dhaka</option>
                                <option value="chittagong" >Chittagong</option>
                                <option value="sylhet" >Sylhet</option>
                                <option value="chandpur" >Chandpur</option>
                            </select>


                            {/* Room sizes */}
                            <div className="my-10">
                                <label className="font-semibold block text-lg border-b-2 border-primary pb-1" htmlFor="size">Room Size-</label>
                                <div>

                                    <div className="flex gap-1 items-center mt-3">
                                        <input onChange={() => setRoomSize('any')} type="radio" name="size" className="radio radio-primary" />
                                        <span className="font-semibold">Any</span>
                                    </div>


                                    <div className="flex gap-1 items-center mt-3">
                                        <input onChange={() => setRoomSize("small")} type="radio" name="size" className="radio radio-primary" />
                                        <span className="font-semibold">Small</span>
                                    </div>

                                    <div className="flex gap-1 items-center mt-3">
                                        <input onChange={() => setRoomSize("medium")} type="radio" name="size" className="radio radio-primary" />
                                        <span className="font-semibold">Medium</span>
                                    </div>


                                    <div className="flex gap-1 items-center mt-3">
                                        <input onChange={() => setRoomSize("large")} type="radio" name="size" className="radio radio-primary" />
                                        <span className="font-semibold">Large</span>
                                    </div>


                                    <div className="flex gap-1 items-center mt-3">
                                        <input onChange={() => setRoomSize("extra-large")} type="radio" name="size" className="radio radio-primary" />
                                        <span className="font-semibold">Extra Large</span>
                                    </div>
                                </div>
                            </div>


                            {/* Bedrooms */}
                            <div className="my-10">
                                <label className="font-semibold text-lg border-b-2 border-primary pb-1 block" htmlFor="size">Bedrooms-</label>
                                <div>

                                    <div className="flex gap-1 items-center mt-3">
                                        <input type="radio" onChange={() => setBedRooms("any")} name="bedrooms" className="radio radio-primary" />
                                        <span className="font-semibold tracking-widest">Any</span>
                                    </div>


                                    <div className="flex gap-1 items-center mt-3">
                                        <input onChange={() => setBedRooms("0, 2")} type="radio" name="bedrooms" className="radio radio-primary" />
                                        <span className="font-semibold tracking-widest">0-2</span>
                                    </div>

                                    <div className="flex gap-1 items-center mt-3">
                                        <input onChange={() => setBedRooms("3, 5")} type="radio" name="bedrooms" className="radio radio-primary" />
                                        <span className="font-semibold tracking-widest">3-5</span>
                                    </div>


                                    <div className="flex gap-1 items-center mt-3">
                                        <input onChange={() => setBedRooms("5")} type="radio" name="bedrooms" className="radio radio-primary" />
                                        <span className="font-semibold tracking-widest">5+</span>
                                    </div>


                                </div>
                            </div>


                            {/* Bathrooms */}
                            <div className="my-10">
                                <label className="font-semibold text-lg border-b-2 border-primary pb-1 block" htmlFor="size">Bathrooms-</label>
                                <div>

                                    <div className="flex gap-1 items-center mt-3">
                                        <input type="radio" name="bathrooms" className="radio radio-primary" />
                                        <span className="font-semibold tracking-widest">Any</span>
                                    </div>


                                    <div className="flex gap-1 items-center mt-3">
                                        <input type="radio" name="bathrooms" className="radio radio-primary" />
                                        <span className="font-semibold tracking-widest">0-2</span>
                                    </div>

                                    <div className="flex gap-1 items-center mt-3">
                                        <input type="radio" name="bathrooms" className="radio radio-primary" />
                                        <span className="font-semibold tracking-widest">3-5</span>
                                    </div>


                                    <div className="flex gap-1 items-center mt-3">
                                        <input type="radio" name="bathrooms" className="radio radio-primary" />
                                        <span className="font-semibold tracking-widest">5+</span>
                                    </div>


                                </div>
                            </div>


                            {/* Rent */}
                            <div>
                                <label className="font-semibold text-lg border-b-2 border-primary pb-1 block" htmlFor="size">Rent per month-</label>
                                <div className="pr-5">
                                    <div className="mt-3 flex items-center gap-1">
                                        <span className="font-semibold">(Min)</span>
                                        <p className="font-bold">${minRent}</p>
                                        <input type="range" min={400} max={12000} value={minRent} onChange={(e) => setMinRent(e.target.value)} className="cursor-pointer w-full" />
                                    </div>

                                    <div className="mt-5 flex items-center gap-1 ">
                                        <span className="font-semibold">(Max)</span>
                                        <p className="font-bold">${maxRent}</p>
                                        <input type="range" min={400} max={12000} value={maxRent} onChange={(e) => setMaxRent(e.target.value)} className="cursor-pointer w-full" />
                                    </div>
                                    <button className="mt-5 w-full py-2 bg-blue-600 text-xs text-white font-semibold rounded-full">Filter by selected range</button>
                                </div>
                            </div>







                        </aside >
                    </ul>
                </div>
            </div>





            {/* House cards */}
            <div>
                {
                    isPending ? <NoDataLoader /> :
                        houses?.length > 0 ? <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {
                                houses?.map(house => <HouseCard key={house._id} house={house} />)
                            }
                        </div> :
                            <div>
                                <h3 className="text-center my-20 text-3xl font-semibold text-gray-500">No data found!</h3>
                            </div>
                }
            </div>


            {/* Pagination */}
            <div className="flex justify-center mt-20">
                <div className="join">
                    <button onClick={() => {
                        currentPage > 0 && setCurrentPage(currentPage - 1);
                    }}
                        className="join-item btn">«</button>
                    {pages?.map(page => {
                        return <button key={page} onClick={() => setCurrentPage(page)} className={`join-item btn ${currentPage === page && "bg-blue-600 text-white hover:text-black"}`}>{page}</button>
                    })}
                    <button onClick={() => {
                        currentPage < pages?.length - 1 && setCurrentPage(currentPage + 1);
                    }}
                        className="join-item btn">»</button>
                </div>
            </div>


        </div>


    </div >
}

export default Houses