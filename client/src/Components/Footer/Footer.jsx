import { Link } from 'react-router-dom';


const Footer = () => {
    return <div className="bg-slate-700  pb-2 pt-10">
        <p className="text-white text-center font-semibold ">Copyright &copy; 2023, house hunter corporation.</p>

        <p className='text-right text-white text-sm font-medium '>Made by <Link className='hover:underline' to="https:webdevshihab.netlify.app" target="_blank">@Shihab Hasan</Link></p>
    </div>
}

export default Footer