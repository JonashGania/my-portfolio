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
      name: "Postman",
      path: "/icons/postman.svg",
    },
    {
      name: "Git",
      path: "/icons/git.svg",
    },
    {
      name: "Prisma",
      path: "/icons/prisma.svg",
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
      title: "Game Haven",
      description: `A platform to browse and add to wishlist your favorite games.`,
      tools: ["React", "TailwindCSS", "Rawg API"],
      link: "https://jonashgania.github.io/game-haven/",
      imgUrl: "/images/game-haven.png",
      deployed: true,
    },
    {
      title: "Resume Builder",
      description: `Quickly build a personalized resume that highlights your skills and experience in less than 5 minutes.`,
      tools: ["TypeScript", "React", "TailwindCSS"],
      link: "https://jonashgania.github.io/resume-builder/",
      imgUrl: "/images/resume-builder.png",
      deployed: true,
    },
    {
      title: "Movie Collection Management",
      description: `Movie collection management website that has CRUD functionality.`,
      tools: ["React", "Express", "PostgreSQL", "Prisma", "TailwindCSS"],
      link: "https://github.com/JonashGania/movie-collection-management",
      imgUrl: "/images/movie-collection.png",
      deployed: true,
    },
    {
      title: "Wrappify",
      description:
        "A Spotify Wrapped inspired where spotify users can check their top tracks, artists, genres, playlists anytime.",
      tools: ["TailwindCSS", "React", "TypeScript", "Spotify Web API"],
      link: "https://wrappedhits.vercel.app",
      imgUrl: "/images/wrappify.png",
      deployed: true,
    },
    {
      title: "Stashio",
      description:
        "File storage website where you can easily upload, manage and access your files.",
      tools: [
        "NextJS",
        "Neon",
        "Appwrite",
        "TypeScript",
        "TailwindCSS",
        "Prisma",
      ],
      link: "https://stashio.vercel.app",
      imgUrl: "/images/stashio.png",
      deployed: true,
    },
  ],
  certificates: [
    {
      name: "IT Essentials",
      company: "Cisco",
      link: "/certificates/ITE CPHWFUND 2nd-certificate.pdf",
      id: 0,
    },
    {
      name: "Introduction to Networks",
      company: "Cisco",
      link: "/certificates/CCNAv7 ITN INCOM-certificate.pdf",
      id: 1,
    },
    {
      name: "Enterprise Networking, Security, and Automation",
      company: "Cisco",
      link: "/certificates/CCNAv7 ENSA INCO-certificate.pdf",
      id: 2,
    },
    {
      name: "Introduction to Data Science",
      company: "Cisco",
      link: "/certificates/Introduction_to_Data_Science.pdf",
      id: 3,
    },
    {
      name: "Introduction to IoT",
      company: "Cisco",
      link: "/certificates/Introduction_to_IoT.pdf",
      id: 4,
    },
    {
      name: "Data Analytics Essentials",
      company: "Cisco",
      link: "/certificates/Data_Analytics_Essentials.pdf",
      id: 5,
    },
  ],
  experience: [
    {
      date: "Jan 2024 - Mar 2024",
      role: "Software Engineer Intern",
      company: "Hooli Software, Inc.",
      description:
        "Fixed front-end bugs and improvements, gave solution ideas, collaborate in scrum meetings and gave reports to the team.",
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
    facebook: "https://www.facebook.com/nashhh.30/",
    email: "jonashtiglao@gmail.com",
  },
};

export default data;
