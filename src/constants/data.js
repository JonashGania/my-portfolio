const data = {
    name: "Jonash Gaña",
    profileUrl: "/profile.png",
    pages: [
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Projects',
            path: '/projects'
        },
        {
            name: 'Experience',
            path: '/experience'
        }
    ],
    technologies: [
        '/html.svg',
        '/css.svg',
        '/javascript.svg',
        '/react.svg',
        '/nodejs.svg',
        '/tailwindcss.svg',
        '/postgresql.svg',
        '/python.svg',
        '/git.svg',
        '/figma.svg',
    ],
    projects: [
        {
            title: 'PomoTask',
            description: 'PomoTask is a dynamic task management web application, which revolutionizes the way you approach productivity. Integrated with Pomodoro timers, bringing a time-tested technique to boost your focus.',
            tools: ['React', 'TailwindCSS', 'Firebase'],
            link: '',
            imgUrl: '/pomoTask.png'
        },
    ],
    certificates: [
        {
            name: 'IT Essentials',
            company: 'Cisco',
            link: 'src/certificates/ITE CPHWFUND 2nd-certificate.pdf',
            id: 0
        },{
            name: 'Introduction to Networks',
            company: 'Cisco',
            link: 'src/certificates/CCNAv7 ITN INCOM-certificate.pdf',
            id: 1
        }, {
            name: 'Enterprise Networking, Security, and Automation',
            company: 'Cisco',
            link: 'src/certificates/CCNAv7 ENSA INCO-certificate.pdf',
            id: 2
        }
    ],
    experience: [
        {
            date: '2020 - 2024',
            job: '(Graduating)',
            role: 'Computer Engineering',
            company: 'Holy Angel University',
            description: 'Studied Bachelor of Science in Computer Engineering at Holy Angel University.'
        },
    ],
    socialLinks: {
        github: 'https://github.com/JonashGania',
        linkedIn: '',
        instagram: '',
        facebook: 'https://www.facebook.com/nashhh.30/',
        email: 'jonashtiglao@gmail.com'
    }
}

export default data