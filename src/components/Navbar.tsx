"use client";

import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from 'next/link'
import Image from "next/image";
import data from "../data";
import Drawer from "./Drawer";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (link: string) => {
    return pathname.startsWith(link);
  }

  return (
    <header className="w-full bg-midnight flex justify-center z-20">
      <nav className="w-960 mx-4 flex items-center justify-between gap-4 min-h-[80px] py-4">
        <Link href={"/"} onClick={closeMenu}>
          <Image 
            src={"/icons/logo.svg"} 
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
        <ul className="md:flex items-center hidden gap-8">
          {data.pages.map((link, index) => (
            <li
              key={index}
              className="text-gray-400 py-4 hover:text-slate-300 transition-all duration-200 ease-in"
            >
              <Link
                href={link.path}
                className={`py-2 px-3 rounded-md w-full md:w-auto uppercase md:normal-case text-base ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${data.socialLinks.email}`}
          target="_blank"
          rel="noreferrer"
          className="bg-white outline-none px-3 py-2 font-medium rounded-md hidden md:block"
        >
          Get in touch
        </a>
        <Drawer onClose={closeMenu} onOpen={isMenuOpen} />
        <div className="absolute right-8 block md:hidden">
          <FaBars
            color="white"
            size="1.75rem"
            className="cursor-pointer"
            onClick={openMenu}
          />
        </div>
      </nav>
    </header>
  );
}
