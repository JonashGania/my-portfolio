import data from "../constants/data.js"


export default function Experience(){
    return (
        <section className="w-full min-h-screen bg-midnight pt-24">
            <div className="max-w-[700px] mx-auto">
                <h1 className="text-white pt-32 font-bold text-[40px] mx-4">Experience</h1>
                <div className="w-full flex justify-center pt-12">
                    <div className="max-w-[512px] mx-4 ml-8 w-full flex flex-col items-center justify-center relative after:content-[''] after:absolute after:w-1 after:h-full after:bg-slate-500 after:-left-0 after:top-6">
                        {data.experience.map((exp, index) => (
                            <li 
                                key={index}
                                className="max-w-[400px] mx-8 pb-4"
                            >
                                <div className=" absolute bg-white h-5 w-5 rounded-[50%] -left-2 z-10"></div>
                                <h3 className="text-white text-lg">
                                    {exp.date}
                                </h3>
                                <div className="bg-white px-4 mt-4 py-4 rounded-lg">
                                    <h2 className="text-black text-lg font-semibold">{exp.role}</h2>
                                    <span className="text-gray-400">{exp.company}</span>
                                    <p className="text-gray-500 font-medium pt-4">
                                        {exp.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
 