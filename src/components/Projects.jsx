import data from "../constants/data.js"

export default function Projects(){
    return (
        <section className="w-full min-h-screen bg-midnight pt-8 sm:pt-12 transition-all duration-300 ease-in">
            <div className="max-w-960 mx-auto px-4">
                <h1 className="text-white pt-32 font-bold text-[40px]">Projects</h1>
                <div className="flex flex-col pt-20 gap-20 pb-20">
                    {data.projects.map((proj, index) => (
                        <li key={index}>
                            <div className="grid grid-cols-1 md:grid-cols-8 gap-8 md:gap-4">
                                <div className="order-1 flex justify-center justify-items-center md:order-first col-span-1 md:col-span-3">
                                    <div className="w-[340px] md:w-full h-[200px] overflow-hidden rounded-lg border border-slate-500">
                                        <img 
                                            src={proj.imgUrl} 
                                            alt="Project image"
                                            className=" w-full h-full object-cover rounded-lg hover:scale-110 duration-300" 
                                        />
                                    </div>
                                </div>
                                <div className="col-span-1 md:col-span-5 flex flex-col pl-5 md:pl-10">
                                    <span className="text-2xl md:text-3xl text-white font-bold pb-2">{proj.title}</span>
                                    <div className="pb-2 flex items-center">
                                        <a href={proj.link} className="text-gray-500 font-medium flex items-center gap-2 hover:underline decoration-solid">
                                            Link
                                            <span>
                                                <svg 
                                                    width="18" 
                                                    height="18" 
                                                    viewBox="0 0 18 18" 
                                                    fill="none" 
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.67099 13.1034C9.7764 13.2089 9.83561 13.3519 9.83561 13.5011C9.83561 13.6502 9.7764 13.7932 9.67099 13.8987L8.97209 14.6018C8.23297 15.3405 7.2307 15.7552 6.18577 15.7549C5.14083 15.7546 4.13882 15.3392 3.40017 14.6C2.66152 13.8609 2.24674 12.8587 2.24707 11.8137C2.2474 10.7688 2.66282 9.76678 3.40193 9.02813L5.09787 7.3322C5.8078 6.62169 6.76242 6.20935 7.76638 6.17955C8.77034 6.14975 9.74774 6.50474 10.4986 7.17188C10.554 7.22101 10.5992 7.28056 10.6315 7.34714C10.6639 7.41373 10.6829 7.48604 10.6873 7.55995C10.6918 7.63386 10.6816 7.70792 10.6574 7.7779C10.6332 7.84789 10.5955 7.91242 10.5464 7.96782C10.4973 8.02322 10.4377 8.06841 10.3711 8.10079C10.3045 8.13318 10.2322 8.15213 10.1583 8.15657C10.0844 8.16101 10.0103 8.15085 9.94036 8.12667C9.87038 8.10249 9.80585 8.06476 9.75045 8.01563C9.21418 7.53941 8.51625 7.28604 7.79937 7.30735C7.0825 7.32865 6.40084 7.62302 5.89381 8.13024L4.19787 9.82407C3.67032 10.3516 3.37394 11.0671 3.37394 11.8132C3.37394 12.5593 3.67032 13.2748 4.19787 13.8024C4.72542 14.3299 5.44094 14.6263 6.18701 14.6263C6.93308 14.6263 7.6486 14.3299 8.17615 13.8024L8.87506 13.1034C8.9273 13.0511 8.98933 13.0097 9.05762 12.9813C9.12591 12.953 9.1991 12.9385 9.27302 12.9385C9.34695 12.9385 9.42014 12.953 9.48843 12.9813C9.55672 13.0097 9.61875 13.0511 9.67099 13.1034ZM14.5985 3.40032C13.8593 2.66276 12.8577 2.24854 11.8134 2.24854C10.7692 2.24854 9.76756 2.66276 9.02834 3.40032L8.32943 4.09993C8.22398 4.20548 8.16477 4.34859 8.16483 4.4978C8.1649 4.647 8.22423 4.79006 8.32978 4.89552C8.43533 5.00097 8.57845 5.06018 8.72765 5.06011C8.87685 5.06005 9.01991 5.00071 9.12537 4.89516L9.82427 4.19626C10.3518 3.66871 11.0673 3.37233 11.8134 3.37233C12.5595 3.37233 13.275 3.66871 13.8026 4.19626C14.3301 4.72381 14.6265 5.43933 14.6265 6.1854C14.6265 6.93147 14.3301 7.64699 13.8026 8.17454L12.1066 9.87188C11.5993 10.3788 10.9175 10.6728 10.2006 10.6937C9.48376 10.7146 8.78598 10.4609 8.24998 9.98438C8.13809 9.88518 7.99137 9.83448 7.84211 9.84344C7.69284 9.85241 7.55325 9.92031 7.45404 10.0322C7.35483 10.1441 7.30414 10.2908 7.3131 10.4401C7.32207 10.5893 7.38996 10.7289 7.50185 10.8281C8.25251 11.4955 9.2298 11.8507 10.2338 11.8212C11.2377 11.7916 12.1924 11.3795 12.9026 10.6692L14.5985 8.97329C15.3365 8.23401 15.751 7.2321 15.751 6.18751C15.751 5.14292 15.3365 4.14101 14.5985 3.40173V3.40032Z" fill="#6B7280"/>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                    <p className="text-gray-400 text-lg font-regular pb-6">
                                        {proj.description}
                                    </p>
                                    <div className="flex items-center gap-8 pt">
                                        {proj.tools.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="text-white bg-[#1E293B] px-3 py-1 rounded-xl"
                                            >
                                            {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </section>
    )
}
 