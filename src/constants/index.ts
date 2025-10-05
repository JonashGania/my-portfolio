const data = {
  name: "Jonash Gaña",
  profileUrl: "/images/avatar.jpg",
  pages: [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Experience",
      path: "/experience",
    },
  ],
  technologies: [
    {
      name: "JavaScript",
      path: "/icons/javascript.svg",
    },
    {
      name: "TypeScript",
      path: "/icons/typescript.svg",
    },
    {
      name: "React",
      path: "/icons/react.svg",
    },
    {
      name: "Node.js",
      path: "/icons/node.svg",
    },
    {
      name: "Express.js",
      path: "/icons/express.svg",
    },
    {
      name: "Next.js",
      path: "/icons/nextjs.svg",
    },
    {
      name: "Tailwind CSS",
      path: "/icons/tailwindcss.svg",
    },
    {
      name: "Python",
      path: "/icons/python.svg",
    },
    {
      name: "PostgreSQL",
      path: "/icons/postgresql.svg",
    },
    {
      name: "Firebase",
      path: "/icons/firebase.svg",
    },
    {
      name: "Supabase",
      path: "/icons/supabase.svg",
    },
    {
      name: "Prisma",
      path: "/icons/prisma.svg",
    },
    {
      name: "Postman",
      path: "/icons/postman.svg",
    },
    {
      name: "Git",
      path: "/icons/git.svg",
    },
    {
      name: "Vercel",
      path: "/icons/vercel.svg",
    },
    {
      name: "Figma",
      path: "/icons/figma.svg",
    },
  ],
  projects: [
    {
      title: "Resume Builder",
      description: `Quickly build a personalized resume that highlights your skills and experience in less than 5 minutes.`,
      tools: ["TypeScript", "React.js", "TailwindCSS"],
      link: "https://jonashgania.github.io/resume-builder/",
      imageUrl: "/images/resume-builder.png",
      deployed: true,
    },
    {
      title: "SaaS Landing Page",
      description:
        "A professional-grade SaaS landing page fully animated and responsive built using modern Frontend tools.",
      tools: ["TailwindCSS", "React.js", "TypeScript", "Framer Motion"],
      link: "https://jonashgania.github.io/saas-ai-landing-page/",
      imageUrl: "/images/saas-ai-landing.png",
      deployed: true,
    },
    {
      title: "Wrappify",
      description:
        "A Spotify Wrapped inspired where spotify users can check their top tracks, artists, genres, playlists anytime.",
      tools: ["TailwindCSS", "React.js", "TypeScript", "Spotify Web API"],
      link: "https://wrappedhits.vercel.app",
      imageUrl: "/images/wrappify.png",
      deployed: true,
    },
    {
      title: "Focusd",
      description: `A Pomodoro timer app that helps you stay focused and productive, with customizable timers and calming soundscapes.`,
      tools: ["Next.js", "Supabase", "TypeScript", "TailwindCSS"],
      link: "https://focusd.vercel.app",
      imageUrl: "/images/focusd.png",
      deployed: true,
    },
    {
      title: "Stashio",
      description:
        "File storage website where you can easily upload, manage and access your files.",
      tools: [
        "Next.js",
        "Neon",
        "Appwrite",
        "TypeScript",
        "TailwindCSS",
        "Prisma",
      ],
      link: "https://stashio.vercel.app",
      imageUrl: "/images/stashio.png",
      deployed: true,
    },
    {
      title: "TapUp",
      description: `TapUp streamlines networking by offering both digital and printable business cards. Customizable and connects card to a personalized website.`,
      tools: ["Next.js", "Firebase", "Xendit", "TailwindCSS", "Shadcn"],
      link: "https://www.tapup.tech",
      imageUrl: "/images/tapup.png",
      deployed: true,
    },
  ],
  certificates: [
    {
      title: "React",
      company: "TestDome",
      link: "https://www.testdome.com/certificates/69c98bb4fc464682afac22fbabe10fac",
      id: 0,
    },
    {
      title: "JavaScript",
      company: "TestDome",
      link: "https://www.testdome.com/certificates/9f091e1ed4a1479f83fcd869e6e71cbd",
      id: 1,
    },
    {
      title: "TypeScript",
      company: "TestDome",
      link: "https://www.testdome.com/certificates/f2d803151fd049909e6f1a1781918d65",
      id: 2,
    },
    {
      title: "Software Engineering",
      company: "TestDome",
      link: "https://www.testdome.com/certificates/bd81b7ec933041028f194ab3e29d91a4",
      id: 3,
    },
    {
      title: "SQL",
      company: "TestDome",
      link: "https://www.testdome.com/certificates/5932a94c680641429d53149c2b806d09",
      id: 4,
    },
    {
      title: "Introduction to Data Science",
      company: "Cisco",
      link: "/certificates/Introduction_to_Data_Science.pdf",
      id: 5,
    },
  ],
  experience: [
    {
      date: "May 2025 - Present",
      role: "Fullstack Developer Intern",
      company: "Codebility",
      description:
        "Joined a community of devs as an intern to build SaaS grade web products, upskill, and connect with other devs.",
    },
    {
      date: "Jan 2024 - Mar 2024",
      role: "Software Engineer Intern",
      company: "Hooli Software, Inc.",
      description:
        "Fixed bugs and improved existing components. Worked closely with other interns, collaborated in scrum meetings and gave reports to the team.",
    },
    {
      date: "2020 - 2024 (Graduated)",
      role: "Computer Engineering",
      company: "Holy Angel University",
      description:
        "Studied Bachelor of Science in Computer Engineering at Holy Angel University.",
    },
  ],
  socialLinks: {
    github: "https://github.com/JonashGania",
    linkedIn: "https://www.linkedin.com/in/jonash-gaña-74b1a12a7/",
    instagram: "",
    facebook: "https://www.facebook.com/jonashgania",
    email: "jonashtiglao@gmail.com",
  },
};

export default data;
