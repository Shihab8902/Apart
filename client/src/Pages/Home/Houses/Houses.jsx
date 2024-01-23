import { useState } from "react";
import { IoFunnelSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import './houses.css';


const Houses = () => {

    //Rent range
    const [minRent, setMinRent] = useState(400);
    const [maxRent, setMaxRent] = useState(12000);

    //Menu control
    const [isFilterVisible, setIsFilterVisible] = useState(false);




    return <div className="my-10 container mx-auto px-5 relative">
        <div className="mb-10">
            <h3 className="text-center text-4xl font-medium tracking-wide">Browse Houses</h3>
            <p className="text-center mt-5 mx-auto text-gray-600 text-sm md:text-base md:w-5/12">Explore our collection of beautifully crafted houses and find your dream home. </p>
        </div>


        {/* For mobile devices */}
        <div className="flex items-center gap-2 m-5  overflow-x-hidden">
            <div className={`lg:hidden ${isFilterVisible ? "block" : "hidden"} relative `}>
                <aside className={`mt-10 bg-white transition-all duration-300 w-full px-5 min-h-screen top-0 left-0 ${isFilterVisible ? "translate-x-0" : "-translate-x-full"}   bg-white  border-r-2  py-5`}>
                    <h4 className="flex items-center gap-1 text-2xl border-b-2 border-primary pb-2 font-semibold"><IoFunnelSharp /> Filter by</h4>

                    {/* Availability */}
                    <div className="flex gap-1 font-semibold items-center my-10 ">
                        <input className="w-4 h-4 cursor-pointer" type="checkbox" name="availability" id="availability" />  <span>Currently Available Only</span>
                    </div>

                    {/* City */}
                    <select name="city" id="city" defaultValue="" className=" border w-full cursor-pointer outline-none border-primary px-3 py-2 rounded">
                        <option value="" disabled>City</option>
                        <option value="Any" >Any</option>
                        <option value="Dhaka"  >Dhaka</option>
                        <option value="Chittagong" >Chittagong</option>
                        <option value="Sylhet" >Sylhet</option>
                        <option value="Chandpur" >Chandpur</option>
                    </select>


                    {/* Room sizes */}
                    <div className="my-10">
                        <label className="font-semibold block text-lg border-b-2 border-primary pb-1" htmlFor="size">Room Size-</label>
                        <div>

                            <div className="flex gap-1 items-center mt-3">
                                <input type="radio" name="size" className="radio radio-primary" />
                                <span className="font-semibold">Any</span>
                            </div>


                            <div className="flex gap-1 items-center mt-3">
                                <input type="radio" name="size" className="radio radio-primary" />
                                <span className="font-semibold">Small</span>
                            </div>

                            <div className="flex gap-1 items-center mt-3">
                                <input type="radio" name="size" className="radio radio-primary" />
                                <span className="font-semibold">Medium</span>
                            </div>


                            <div className="flex gap-1 items-center mt-3">
                                <input type="radio" name="size" className="radio radio-primary" />
                                <span className="font-semibold">Large</span>
                            </div>


                            <div className="flex gap-1 items-center mt-3">
                                <input type="radio" name="size" className="radio radio-primary" />
                                <span className="font-semibold">Extra Large</span>
                            </div>
                        </div>
                    </div>


                    {/* Bedrooms */}
                    <div className="my-10">
                        <label className="font-semibold text-lg border-b-2 border-primary pb-1 block" htmlFor="size">Bedrooms-</label>
                        <div>

                            <div className="flex gap-1 items-center mt-3">
                                <input type="radio" name="bedrooms" className="radio radio-primary" />
                                <span className="font-semibold tracking-widest">Any</span>
                            </div>


                            <div className="flex gap-1 items-center mt-3">
                                <input type="radio" name="bedrooms" className="radio radio-primary" />
                                <span className="font-semibold tracking-widest">0-2</span>
                            </div>

                            <div className="flex gap-1 items-center mt-3">
                                <input type="radio" name="bedrooms" className="radio radio-primary" />
                                <span className="font-semibold tracking-widest">3-5</span>
                            </div>


                            <div className="flex gap-1 items-center mt-3">
                                <input type="radio" name="bedrooms" className="radio radio-primary" />
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

            </div>

            <button className={`lg:hidden  text-gray-500 flex text-2xl ${isFilterVisible ? "justify-end" : "justify-start filter-control"}`} onClick={() => setIsFilterVisible(!isFilterVisible)}><IoIosArrowForward /></button>
        </div>


        {/* For desktop and laptop computer */}
        <aside className="mt-10 w-72 border-r-2 hidden lg:block py-5">
            <h4 className="flex items-center gap-1 text-2xl border-b-2 border-primary pb-2 font-semibold"><IoFunnelSharp /> Filter by</h4>

            {/* Availability */}
            <div className="flex gap-1 font-semibold items-center my-10 ">
                <input className="w-4 h-4 cursor-pointer" type="checkbox" name="availability" id="availability" />  <span>Currently Available Only</span>
            </div>

            {/* City */}
            <select name="city" id="city" defaultValue="" className=" border w-full cursor-pointer outline-none border-primary px-3 py-2 rounded">
                <option value="" disabled>City</option>
                <option value="Any" >Any</option>
                <option value="Dhaka"  >Dhaka</option>
                <option value="Chittagong" >Chittagong</option>
                <option value="Sylhet" >Sylhet</option>
                <option value="Chandpur" >Chandpur</option>
            </select>


            {/* Room sizes */}
            <div className="my-10">
                <label className="font-semibold block text-lg border-b-2 border-primary pb-1" htmlFor="size">Room Size-</label>
                <div>

                    <div className="flex gap-1 items-center mt-3">
                        <input type="radio" name="size" className="radio radio-primary" />
                        <span className="font-semibold">Any</span>
                    </div>


                    <div className="flex gap-1 items-center mt-3">
                        <input type="radio" name="size" className="radio radio-primary" />
                        <span className="font-semibold">Small</span>
                    </div>

                    <div className="flex gap-1 items-center mt-3">
                        <input type="radio" name="size" className="radio radio-primary" />
                        <span className="font-semibold">Medium</span>
                    </div>


                    <div className="flex gap-1 items-center mt-3">
                        <input type="radio" name="size" className="radio radio-primary" />
                        <span className="font-semibold">Large</span>
                    </div>


                    <div className="flex gap-1 items-center mt-3">
                        <input type="radio" name="size" className="radio radio-primary" />
                        <span className="font-semibold">Extra Large</span>
                    </div>
                </div>
            </div>


            {/* Bedrooms */}
            <div className="my-10">
                <label className="font-semibold text-lg border-b-2 border-primary pb-1 block" htmlFor="size">Bedrooms-</label>
                <div>

                    <div className="flex gap-1 items-center mt-3">
                        <input type="radio" name="bedrooms" className="radio radio-primary" />
                        <span className="font-semibold tracking-widest">Any</span>
                    </div>


                    <div className="flex gap-1 items-center mt-3">
                        <input type="radio" name="bedrooms" className="radio radio-primary" />
                        <span className="font-semibold tracking-widest">0-2</span>
                    </div>

                    <div className="flex gap-1 items-center mt-3">
                        <input type="radio" name="bedrooms" className="radio radio-primary" />
                        <span className="font-semibold tracking-widest">3-5</span>
                    </div>


                    <div className="flex gap-1 items-center mt-3">
                        <input type="radio" name="bedrooms" className="radio radio-primary" />
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



    </div >
}

export default Houses