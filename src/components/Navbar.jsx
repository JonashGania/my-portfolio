import { Link, NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa6"

export default function Navbar(){
    return(
        <header className="w-full bg-midnight border-b-[1px] border-slate-600 flex justify-center sticky top-0 z-20">
            <nav className="w-960 mx-4 flex items-center justify-between gap-4 min-h-[80px]">
                <Link to="/" className="text-white text-xl px-2 py-1 border-2 border-white rounded-md">Nash.</Link>
                <ul className=" hidden md:flex md:items-center gap-10 md:gap-14 transition-all duration-200 ease-in ">
                    <li className="text-gray-400 text-lg">
                        <NavLink to="/about" className="py-2 px-3 rounded-md">About</NavLink>
                    </li>
                    <li className="text-gray-400 text-lg">
                        <NavLink to="/projects" className='py-2 px-3 rounded-md'>Projects</NavLink>
                    </li>
                    <li className="text-gray-400 text-lg">
                        <NavLink to="/experience" className='py-2 px-3 rounded-md'>Experience</NavLink>
                    </li>
                </ul>
                <button className="hidden md:block bg-white outline-none px-3 py-2 font-medium rounded-md">Get in touch</button>
                <div className= "block md:hidden">
                    <FaBars color="white" size="1.75rem" className="cursor-pointer"/>
                </div>
            </nav>
        </header>
    )
}

