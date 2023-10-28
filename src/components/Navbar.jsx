import { Link, NavLink } from "react-router-dom"
import { FaBars, FaXmark } from "react-icons/fa6"
import { useState } from "react"
import data from "../constants/data.js"

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return(
        <header className="w-full bg-midnight border-b-[1px] border-slate-600 flex justify-center sticky top-0 z-20">
            <nav className="w-960 mx-4 flex items-center justify-between gap-4 min-h-[80px]">
                <Link 
                    to="/" 
                    className="text-white text-xl px-2 py-1 border-2 border-white rounded-md"
                    onClick={closeMenu}
                >
                Nash.
                </Link>
                <ul 
                    className={`md:flex md:items-center gap-10 text-center opacity-0 md:opacity-100 transition-all duration-300 ease-in absolute md:static bg-midnight md:bg-none w-full md:w-auto left-0 py-8 md:py-0 ${
                        isMenuOpen ? "top-[81px] opacity-100" : "top-[-490px]" 
                    }`}
                >
                    <li className="text-gray-400 text-lg py-4 ">
                        <NavLink 
                            to="/about" 
                            className="py-2 px-3 rounded-md w-full md:w-auto uppercase md:normal-case"
                            onClick={closeMenu}
                        >
                        About
                        </NavLink>
                    </li>
                    <li className="text-gray-400 text-lg py-4">
                        <NavLink 
                            to="/projects" 
                            className='py-2 px-3 rounded-md uppercase md:normal-case'
                            onClick={closeMenu}
                        >
                        Projects
                        </NavLink>
                    </li>
                    <li className="text-gray-400 text-lg py-4 mb-4 md:mb-0">
                        <NavLink 
                            to="/experience" 
                            className='py-2 px-3 rounded-md uppercase md:normal-case'
                            onClick={closeMenu}
                        >
                        Experience
                        </NavLink>
                    </li>
                    <a 
                        href={`mailto:${data.socialLinks.email}`}
                        target="_blank"
                        rel="noreferrer"
                        className="md:block bg-white outline-none px-3 py-2 font-medium rounded-md"
                    >
                        Get in touch
                    </a>
                </ul>
                <div className= "absolute right-8 block md:hidden">
                    {isMenuOpen ? (
                        <FaXmark 
                            color="white"
                            size="1.75rem"
                            className="cursor-pointer"
                            onClick={openMenu}
                        />
                    ) : (
                        <FaBars 
                            color="white" 
                            size="1.75rem" 
                            className="cursor-pointer"
                            onClick={openMenu}
                        />
                    )}
                </div>
            </nav>
        </header>
    )
}

