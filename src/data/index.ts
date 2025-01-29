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
      "/icons/html.svg",
      "/icons/css.svg",
      "/icons/javascript.svg",
      "/icons/typescript.svg",
      "/icons/react.svg",
      "/icons/express.svg",
      "/icons/tailwindcss.svg",
      "/icons/postgresql.svg",
      "/icons/python.svg",
      "/icons/git.svg",
      "/icons/postman.svg",
      "/icons/vercel.svg"
    ],
    projects: [
      {
        title: "Game Haven",
        description: `Immerse yourself in a vast collection of meticulously curated games, offering a diverse tapestry of genres to suit every player's taste. Craft your personalized wishlist, and navigate through search and filter features.`,
        tools: ["React", "TailwindCSS", "Rawg API"],
        link: "https://jonashgania.github.io/game-haven/",
        imgUrl: "/images/gameHaven.png",
        deployed: true,
      },
      {
        title: "Resume Builder",
        description: `Quickly craft a professional resume with this fast and user-friendly resume builder. In less than 5 minutes, build a personalized resume that highlights your skills and experience.`,
        tools: ["TypeScript", "React", "TailwindCSS"],
        link: "https://jonashgania.github.io/resume-builder/",
        imgUrl: "/images/resume-builder.jpg",
        deployed: true,
      },
      {
        title: "Wrappify",
        description:
          "A Spotify Wrapped inspired where spotify users can check their top tracks, artists, genres, playlists anytime.",
        tools: ["TailwindCSS", "React", "TypeScript", "Spotify Web API"],
        link: "https://wrappedhits.vercel.app",
        imgUrl: "/images/wrappify.jpg",
        deployed: true,
      },
      {
        title: "Movie Collection Management",
        description: `Collections of movies where users can add, delete, update their movies. Browse movies by genres and add your favorite movies on your watchlist.`,
        tools: ["React", "Express", "PostgreSQL", "Prisma", "TailwindCSS"],
        link: "https://github.com/JonashGania/movie-collection-management",
        imgUrl: "/images/movie-collection.jpg",
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
        date: "2020 - 2024",
        job: "(Graduated)",
        role: "Computer Engineering",
        company: "Holy Angel University",
        description:
          "Studied Bachelor of Science in Computer Engineering at Holy Angel University.",
      },
      {
        date: "Jan 2024 - Mar 2024",
        job: "Internship",
        role: "Software Engineer Intern",
        company: "Hooli Software, Inc.",
        description:
          "Fixed front-end bugs and improvements, gave solution ideas, collaborate in scrum meetings and gave reports to the team.",
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
  