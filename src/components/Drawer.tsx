import data from "../constants";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";

interface DrawerProps {
  onClose: () => void;
  onOpen: boolean;
}

export default function Drawer({ onClose, onOpen }: DrawerProps) {
  return (
    <div
      className={`w-full h-screen fixed top-0 left-0  z-30 ${
        onOpen
          ? "visible opacity-100 bg-[rgba(0,0,0,0.5)]"
          : "invisible opacity-0"
      }`}
    >
      <div
        className={`h-screen bg-midnight flex flex-col gap-8 transition-transform duration-300 ease-linear w-[60%] ${
          onOpen ? " translate-x-0" : " -translate-x-[100px]"
        }`}
      >
        <ul className="flex flex-col gap-4 pt-4">
          {data.pages.map((link, index) => (
            <li
              key={index}
              className="text-gray-500 text-xl w-full hover:text-slate-300 hover:bg-[rgba(60,60,60,0.6)] transition-all duration-200 ease-in"
            >
              <Link
                href={link.path}
                className="py-2 px-4 w-full flex"
                onClick={onClose}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="px-4 py-3">
            <a
              href={`mailto:${data.socialLinks.email}`}
              target="_blank"
              rel="noreferrer"
              className="bg-white outline-none px-3 py-2 font-medium rounded-md"
            >
              Get in touch
            </a>
          </div>
        </ul>
        <div className="fixed top-4 left-[105%] px-1 py-1 border border-gray-500 rounded-md hover:bg-[rgba(255,255,255,0.1)]">
          <FaXmark
            color="white"
            size="1.75rem"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
}
