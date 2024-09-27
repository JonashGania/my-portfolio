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
        <p className="text-gray-400 text-lg pb-8">
          Hi, I&apos;m Jonash Gaña, an aspiring Software Developer fueled with
          curiosity who loves to bring ideas to life through code. During the
          Covid-19 pandemic, I got interested in building web applications and
          made the decision to learn web development. I started watching Youtube
          tutorials, followed web development roadmaps, read online free
          courses, and started building small projects. I would spend 8 hours a
          day coding, learning, and honing my skills.
        </p>
        <p className="text-gray-400 text-lg">
          These days, my main focus is to grow my knowledge and improve my
          skills in building web and mobile applications. I also love learning
          new things. When I&apos;m not at my desk I am probably lifting weights
          or playing games during free time.
        </p>
        <div className="pt-28 text-center">
          <span className="px-10 py-4 text-xl font-bold rounded-lg bg-white text-black">
            Technology Stacks
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
