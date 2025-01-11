import { useState } from "react";
import data from "../constants/data.js";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  const displayedItems = showMore
    ? data.certificates
    : data.certificates.slice(0, 4);

  return (
    <section className="w-full min-h-screen bg-midnight pt-8 sm:pt-12 transition-all duration-300 ease-in">
      <div className="max-w-[700px] mx-auto px-4">
        <h1 className="text-white pt-32 pb-10 font-bold text-[40px]">
          About Me
        </h1>
        <p className="text-gray-300 text-lg pb-8">
          Hello there! I&apos;m Jonash Gaña a Computer Engineering graduate from Pampanga, Philippines.
          My curiosity for computers started in childhood, and during the Covid-19 pandemic, I developed
          a keen interest in software development, which inspired me to pursue my tech career. I immersed
          myself in learning through Youtube tutorials, online courses, and documentations, and while 
          building various projects.
        </p>
        <p className="text-gray-300 text-lg">
          Besides from coding, I enjoy learning how to cook and experimenting with new dishes that I find good.  
          When I&apos;m not at my desk, you can find me lifting weights at the gym, biking around the city,
          or playing video games during my free time. 
        </p>
        <div className="pt-28 text-center">
          <span className="px-10 py-4 text-xl font-bold rounded-lg bg-white text-black">
            Tools & Tech Stacks
          </span>
          <div className="grid grid-cols-auto-fill w-full pt-20 gap-5 justify-center justify-items-center">
            {data.technologies.map((tech, index) => (
              <div
                key={index}
                className="w-[100px] h-[100px] bg-[rgba(60,60,60,0.6)] flex items-center justify-center relative rounded-md"
              >
                <img src={tech} alt="technology" />
              </div>
            ))}
          </div>
        </div>
        <div className="pt-36 pb-20">
          <h1 className="text-3xl text-white font-semibold pb-10">
            Certificates
          </h1>
          <div className="flex items-center justify-center sm:justify-between flex-wrap gap-x-4 gap-y-6">
            {displayedItems.map((cert) => (
              <CertificationCard
                key={cert.id}
                name={cert.name}
                company={cert.company}
                link={cert.link}
              />
            ))}
          </div>
          <div className="w-full flex justify-center pt-12">
            <button
              className="text-black bg-white py-2 px-8 rounded-md"
              onClick={toggleShowMore}
            >
              <span className=" text-lg font-medium">
                {showMore ? "Show Less" : "Show More"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const CertificationCard = ({ name, company, link }) => {
  return (
    <div className="bg-[rgba(60,60,60,0.6)] flex flex-col w-[320px] py-2 px-3 rounded-lg">
      <span className="text-white text-lg font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
        {name}
      </span>
      <span className="text-gray-300 text-">{company}</span>
      <div className="pt-4">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center"
        >
          <span className="text-white text-sm pr-2 ">View Certificate</span>
          <div className="text-white group-hover:translate-x-2 transition duration-300">
            &rarr;
          </div>
        </a>
      </div>
    </div>
  );
};
