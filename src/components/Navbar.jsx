import { Link, NavLink } from "react-router-dom"

export default function Navbar(){
    return(
        <header className="w-full bg-midnight flex justify-center fixed z-20">
            <nav className="w-960 mx-4 flex items-center justify-between gap-4 h-24">
                <Link to="/" className="text-white text-xl px-2 py-1 border-2 border-white rounded-md">Nash.</Link>
                <ul className="flex items-center gap-14">
                    <li className="text-gray-400 text-lg">
                        <NavLink to="/about" className="py-2 px-3 rounded-md">About</NavLink>
                    </li>
                    <li className="text-gray-400 text-lg">
                        <NavLink to="/projects" className='py-2 px-3 rounded-md'>Projects</NavLink>
                    </li>
                    <li className="text-gray-400 text-lg py-1 px-3 rounded-md">
                        <NavLink to="/experience" className='py-2 px-3 rounded-md'>Experience</NavLink>
                    </li>
                </ul>
                <button className="bg-white outline-none px-3 py-2 font-medium rounded-md">Get in touch</button>
            </nav>
        </header>
    )
}