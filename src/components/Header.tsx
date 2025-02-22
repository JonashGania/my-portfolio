import { MapPin, Mail } from "lucide-react";
import Image from "next/image";
import data from "../constants";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <section className="flex justify-between items-start pt-14">
      <div className="flex gap-4 sm:gap-8 items-center animate-in">
        <Image
          src={"/images/avatar.jpg"}
          alt="avatar"
          height={160}
          width={160}
          priority
          className="rounded-md md:rounded-xl w-32 h-32 sm:w-40 sm:h-40 object-cover"
        />
        <div className="flex flex-col">
          <h1 className="text-zinc-700 dark:text-white text-xl sm:text-2xl font-bold">
            Jonash Gaña
          </h1>
          <div className="flex items-center gap-1">
            <MapPin size={15} className="text-zinc-700 dark:text-gray-200" />
            <span className="text-zinc-700 dark:text-gray-200 text-xs sm:text-sm">
              Pampanga, Philippines
            </span>
          </div>
          <h2 className="text-base sm:text-lg text-zinc-700 dark:text-gray-200 font-medium pt-2">
            Web Developer
          </h2>
          <a
            href={`mailto:${data.socialLinks.email}`}
            target="_blank"
            rel="noreferrer"
            className="bg-black dark:bg-white w-[150px] dark:text-black text-white text-sm outline-none py-2 mt-4 rounded-md flex items-center gap-2 justify-center"
          >
            <Mail size={18} className="text-white dark:text-black" />
            Contact me
          </a>
        </div>
      </div>
      <ThemeSwitch />
    </section>
  );
};

export default Header;
