import React from "react";

const About = () => {
  return (
    <div className="flex-1 ">
      <h2 className="text-lg font-semibold">About</h2>
      <p className="text-sm text-zinc-700 dark:text-zinc-300">
        Hello there! I&apos;m Jonash Gaña a Computer Engineering graduate from
        Pampanga, Philippines.
      </p>
      <p className="text-zinc-700 dark:text-zinc-300 text-sm pt-4">
        My curiosity for computers started in childhood, and during the Covid-19
        pandemic, I developed a keen interest in software development, which
        inspired me to pursue my tech career. I immersed myself in learning
        through Youtube tutorials, online courses, and documentations, and while
        building various projects.
      </p>
      <p className="text-zinc-700 dark:text-zinc-300 text-sm pt-4">
        {" "}
        Besides from coding, I enjoy learning how to cook and experimenting with
        new dishes that I find good. When I&apos;m not at my desk, you can find
        me lifting weights at the gym, biking around the city, or playing video
        games during my free time.
      </p>
    </div>
  );
};

export default About;
