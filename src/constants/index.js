import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    fsoft,
    hahalolo,
    appcore
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Social Media Manager",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "FPT Software",
      icon: fsoft,
      iconBg: "#383E56",
      date: "July 2021 - June 2023",
      points: [
        "Communicated with teammates to clarify requirements.",
        "Developed, implemented and maintained production code for client websites.",
        "Created unit tests and reported them.",
        "Wrote detailed designs for business flows.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Hahalolo LLC",
      icon: hahalolo,
      iconBg: "#E6DEDD",
      date: "Feb 2020 - Jul 2021",
      points: [
        "Mentored new member of the team.",
        "Collaborated with designers on projects to create brands, design systems, and websites for organizations.",
        "Implemented responsive design and ensuring cross-browser compatibility.",
        "Developed, maintained, and upgraded code for systems.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "AppCore Technologies Ltd.",
      icon: appcore,
      iconBg: "#383E56",
      date: "Jul 2019 - Dec 2019",
      points: [
        "Built a system that meets client's requirements.",
        "Translated design wireframes into functioning UI components.",
        "Integrated API and developed code.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Developer Portfolio",
      description:
        "The most impressive websites in the world use 3D graphics and animations to bring my content to life.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/yennhi26/3d_portfolio",
    },
    {
      name: "Crytocurrency App",
      description:
        "Web application that uses Redux Toolkit to bring crypto to life.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux toolkit",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Awesome Photo App",
      description:
        "An app features randomizing photos and storing photos using Redux.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux toolkit",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/yennhi26/photo-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };