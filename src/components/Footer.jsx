import data from "../constants/data"
import { FaGithub, FaLinkedin, FaFacebook  } from "react-icons/fa6";

export default function Footer(){
    const socials = [
        {
            href: data.socialLinks.github, 
            icon: <FaGithub style={{ color: 'white', fontSize: '1.5rem' }}/>
        },
        {
            href: data.socialLinks.facebook, 
            icon: <FaFacebook style={{ color: 'white', fontSize: '1.5rem' }}/>
        },
        {
            href: data.socialLinks.linkedIn, 
            icon: <FaLinkedin style={{ color: 'white', fontSize: '1.5rem' }}/>
        },
    ]

    return (
        <footer className="w-full pt-20 bg-midnight flex justify-center">
            <div className="w-960 h-[100px] mx-4 border-t border-t-zinc-500">
                <div className="pt-6 flex items-center justify-between">
                    <span className="text-white text-lg font-semibold">{data.name}</span>
                    <div className="flex items-center gap-3">
                        {socials.map((item, index) => (
                            <a 
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}