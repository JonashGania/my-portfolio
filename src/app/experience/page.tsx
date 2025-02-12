import data from "@/src/data"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Jonash Gaña",
};

const Experience = () => {
  return (
    <section className="w-full min-h-screen bg-midnight pt-8 sm:pt-12 transition-all duration-300 ease-in">
      <div className="max-w-[700px] mx-auto px-4">
          <h1 className="text-white pt-32 font-bold text-[40px]">Experience</h1>
          <div className="w-full flex justify-center pt-12">
              <div className="max-w-[512px] mx-auto ml-4 pr-2 md:ml-8 w-full flex flex-col items-center justify-center relative after:content-[''] after:absolute after:w-1 after:h-full after:bg-slate-500 after:-left-0 after:top-6">
                  {data.experience.map((exp, index) => (
                      <li 
                          key={index}
                          className="max-w-[400px] ml-8 sm:mx-8 pb-4"
                      >
                          <div className="absolute bg-white h-5 w-5 rounded-full -left-2 z-10 circle pulse"></div>
                          <div className="flex items-start sm:items-center gap-3">
                              <h3 className="text-white text-sm sm:text-lg">
                                  {exp.date}
                              </h3>
                              <span className="text-gray-400 text-sm sm:text-base">{exp.job}</span>
                          </div>
                          
                          <div className="bg-white px-4 mt-4 py-4 w-full rounded-lg">
                              <h2 className="text-black text-lg font-semibold leading-5">{exp.role}</h2>
                              <span className="text-zinc-600 font-medium">{exp.company}</span>
                              <p className="text-zinc-500 font-medium pt-4">
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

export default Experience