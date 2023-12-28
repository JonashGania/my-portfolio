import data from "../constants/data.js"
import { Link } from "react-router-dom"

export default function Home(){
    return (
        <section className="w-full min-h-screen bg-midnight pt-16">
            <div className="max-w-960 mx-auto">
                <div className="w-full flex justify-center pt-20">
                    <img 
                        src={data.profileUrl}
                        alt="Profile"
                        className="w-48 rounded-circle" 
                    />
                </div>
                <div className="mx-4">
                    <p className="font-extrabold text-2xl sm:text-4xl text-center mx-auto pt-10 max-w-3xl text-transparent bg-clip-text bg-gradient-to-r from-slate-50 to-gradientBlue transition-all duration-300 ease-in">
                        Explore my portfolio, where every project tells a story of passion, 
                        creativity, and impactful solutions.
                    </p>
                </div>
                <div className="pt-40 pb-20 mx-4">
                    <h1 className="text-4xl text-white font-bold">Recent <br />Projects </h1>
                    <div className="flex items-center justify-center flex-col pt-20 gap-20">
                        <div className="max-w-[700px] overflow-hidden rounded-lg border border-slate-500 relative">
                            <h2 className="text-white bg-black absolute top-2 left-2 z-10 px-3 sm:px-5 py-2 rounded-sm text-base sm:text-xl font-bold">PomoTask</h2>
                            <img 
                                src="/pomoTask.png" 
                                alt="taskflow image" 
                                className="w-full object-cover rounded-lg hover:scale-110 duration-500"
                            />
                           
                        </div>
                        <div className="max-w-[700px] overflow-hidden rounded-lg border border-slate-500 relative">
                            <h2 className="text-white bg-black absolute top-2 left-2 z-10 px-3 sm:px-5 py-2 rounded-sm text-base sm:text-xl font-bold">Game Haven</h2>
                            <img 
                                src="/gameHaven.png" 
                                alt="taskflow image" 
                                className="w-full object-cover rounded-lg hover:scale-110 duration-500"
                            />
                        </div>
                    </div>
                    <div className=" pt-24">
                        <Link to="/projects" className="bg-white flex items-center justify-center gap-2 rounded-md w-32 mx-auto py-3 ">
                            <p className="text-black text-lg font-medium">View All</p>
                            <svg 
                                width="20" 
                                height="20" 
                                viewBox="0 0 20 20" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5.125 3.25C4.62772 3.25 4.15081 3.44754 3.79917 3.79917C3.44754 4.15081 3.25 4.62772 3.25 5.125V13.875C3.25 14.3723 3.44754 14.8492 3.79917 15.2008C4.15081 15.5525 4.62772 15.75 5.125 15.75H13.875C14.3723 15.75 14.8492 15.5525 15.2008 15.2008C15.5525 14.8492 15.75 14.3723 15.75 13.875V11.0875C15.75 10.9217 15.8158 10.7628 15.9331 10.6456C16.0503 10.5283 16.2092 10.4625 16.375 10.4625C16.5408 10.4625 16.6997 10.5283 16.8169 10.6456C16.9342 10.7628 17 10.9217 17 11.0875V13.875C17 14.7038 16.6708 15.4987 16.0847 16.0847C15.4987 16.6708 14.7038 17 13.875 17H5.125C4.2962 17 3.50134 16.6708 2.91529 16.0847C2.32924 15.4987 2 14.7038 2 13.875V5.125C2 4.2962 2.32924 3.50134 2.91529 2.91529C3.50134 2.32924 4.2962 2 5.125 2H7.9125C8.07826 2 8.23723 2.06585 8.35444 2.18306C8.47165 2.30027 8.5375 2.45924 8.5375 2.625C8.5375 2.79076 8.47165 2.94973 8.35444 3.06694C8.23723 3.18415 8.07826 3.25 7.9125 3.25H5.125ZM10.4625 2.625C10.4625 2.45924 10.5283 2.30027 10.6456 2.18306C10.7628 2.06585 10.9217 2 11.0875 2H16.375C16.5408 2 16.6997 2.06585 16.8169 2.18306C16.9342 2.30027 17 2.45924 17 2.625V7.9125C17 8.07826 16.9342 8.23723 16.8169 8.35444C16.6997 8.47165 16.5408 8.5375 16.375 8.5375C16.2092 8.5375 16.0503 8.47165 15.9331 8.35444C15.8158 8.23723 15.75 8.07826 15.75 7.9125V4.135L11.5288 8.355C11.4711 8.41469 11.4021 8.46231 11.3259 8.49506C11.2496 8.52782 11.1676 8.54506 11.0846 8.54578C11.0016 8.5465 10.9193 8.53069 10.8425 8.49926C10.7657 8.46784 10.6959 8.42143 10.6373 8.36275C10.5786 8.30406 10.5322 8.23428 10.5007 8.15747C10.4693 8.08066 10.4535 7.99836 10.4542 7.91537C10.4549 7.83239 10.4722 7.75037 10.5049 7.67412C10.5377 7.59787 10.5853 7.5289 10.645 7.47125L14.8663 3.25H11.0863C10.9205 3.25 10.7615 3.18415 10.6443 3.06694C10.5271 2.94973 10.4613 2.79076 10.4613 2.625H10.4625Z" fill="black"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
 