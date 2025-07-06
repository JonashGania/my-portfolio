import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import data from "../constants";

const SocialLinks = () => {
  const socials = [
    {
      name: "GitHub",
      href: data.socialLinks.github,
      icon: (
        <FaGithub
          className="text-white dark:text-black"
          style={{ fontSize: "1.2rem" }}
        />
      ),
    },
    {
      name: "Facebook",
      href: data.socialLinks.facebook,
      icon: (
        <FaFacebook
          className="text-white dark:text-black"
          style={{ fontSize: "1.2rem" }}
        />
      ),
    },
    {
      name: "LinkedIn",
      href: data.socialLinks.linkedIn,
      icon: (
        <FaLinkedin
          className="text-white dark:text-black"
          style={{ fontSize: "1.2rem" }}
        />
      ),
    },
  ];
  return (
    <div className="flex-1 px-4 py-2 border border-gray-200 dark:bg-neutral-900/70 dark:border-[#333] rounded-lg text-center">
      <h2 className="text-lg font-semibold">Social Links</h2>
      <div className="flex justify-center gap-4 pt-4 flex-wrap">
        {socials.map((item, index) => (
          <a
            href={item.href}
            key={index}
            className="flex items-center gap-2 bg-black dark:bg-white py-2 px-5 rounded-md"
          >
            {item.icon}
            <span className="text-white dark:text-black text-sm">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
