import { MapPin, Mail } from "lucide-react";
import { getProfile } from "../lib/queries";
import Image from "next/image";
import data from "../constants";
import ThemeSwitch from "./ThemeSwitch";
import DownloadResume from "./DownloadResume";

const Header = async () => {
  const profile = await getProfile();
  console.log(profile);
  return (
    <section className="pt-14">
      <div className="flex gap-4 sm:gap-8 items-center animate-in">
        <Image
          src={"/images/avatar.jpg"}
          alt="avatar"
          height={160}
          width={160}
          priority
          className="rounded-md md:rounded-xl w-40 sm:h-40 object-cover"
        />
        <div className="flex flex-col flex-1 w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-zinc-700 dark:text-white text-xl duration-100 transition-color ease-in-out sm:text-2xl font-bold">
              {profile.name}
            </h1>
            <ThemeSwitch />
          </div>

          <div className="flex items-center gap-1">
            <MapPin
              size={15}
              className="text-zinc-700 dark:text-gray-200 duration-100 transition-color ease-in-out"
            />
            <span className="text-zinc-700 dark:text-gray-200 text-xs sm:text-sm duration-100 transition-color ease-in-out">
              {profile.location}
            </span>
          </div>
          <h2 className="text-sm min-[500px]:text-base text-zinc-700 dark:text-gray-200 font-medium pt-2 duration-100 transition-color ease-in-out">
            {profile.position}
          </h2>
          <div className="flex sm:items-center flex-col min-[500px]:flex-row gap-1 min-[500px]:gap-4 mt-2 min-[500px]:mt-6">
            <a
              href={`mailto:${data.socialLinks.email}`}
              target="_blank"
              rel="noreferrer"
              className="bg-black dark:bg-white dark:hover:bg-white/90 border px-5 dark:text-black text-white text-xs outline-none py-2 rounded-lg flex items-center gap-2 hover:-translate-y-[2px] justify-center duration-100 transition-all ease-in-out"
            >
              <Mail
                size={15}
                className="text-white dark:text-black duration-100 transition-color ease-in-out"
              />
              Contact me
            </a>
            <DownloadResume resumeUrl={profile.resumeUrl} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
