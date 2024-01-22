import house from '../../../assets/images/house.jpg';

const Banner = () => {
    return <div style={{ backgroundImage: `url(${house})` }} className='bg-center bg-cover h-screen relative'>

        <div className='w-full h-full bg-black bg-opacity-70 absolute top-0 left-0'>

            <div className='flex flex-col h-full justify-center items-center'>
                <h3 className='text-white uppercase text-5xl font-bold text-center leading-normal'>Excellent space for <br /> your next home</h3>
                <form className='mt-10 w-full px-5  lg:w-1/2 mx-auto flex '>
                    <input className=' w-full rounded-tl-lg font-bold placeholder:font-normal px-3 py-2 outline-none bg-opacity-90 focus:bg-opacity-100 bg-white' type="search" name="search" id="search" placeholder='Search for houses...' required />
                    <button type='submit' className='bg-blue-600 px-5 py-3 rounded-br-lg text-white font-semibold '>Search</button>
                </form>
            </div>

        </div>
    </div>
}

export default Banner