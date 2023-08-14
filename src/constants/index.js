import {
    swift,
    C,
    Cpp,
    Python,
    gcp,
    aws,
    mobile,
    backend,
    creator,
    web,
    javascript,
    reactjs,
    tailwind,
    mongodb,
    docker,
    jobit,
    tripguide,
    threejs,
    Infosys,
    cncf,
    layer5,
    hacktoberfest,
    Firebase,
    SQL,
    Wanderly,
    TalkingSigns
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
      title: "Full-stack Developer",
      icon: web,
    },
    {
      title: "Open Source Developer",
      icon: mobile,
    },
    {
      title: "iOS App Developer",
      icon: backend,
    },
    {
      title: "Cloud Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C/Cpp",
      icon: Cpp,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Firebase",
      icon: Firebase,
    },
    {
      name: "SQL",
      icon: SQL,
    },
    {
      name: "GCP",
      icon: gcp,
    },
  ];
  
  const experiences = [
    {
      title: "Open Source Contributions",
      company_name: "Layer5",
      icon: layer5,
      iconBg: "#383E56",
      date: "September 2022",
      points: [
        "Made upstream contributions to Kubernetes SIG Docs, enhancing the quality and accuracy of the official Kubernetes Documentation.",
        "Collaborated on the development of the upstream Kubernetes website, implementing new features and resolving bugs to optimize its performance and usability.",
        "Recognized as an official contributor to the Kubernetes repository, standing out among a diverse community of over 3,000 contributors.",
      ],
    },
    {
      title: "Open Source Contributions",
      company_name: "CNCF",
      icon: cncf,
      iconBg: "#E6DEDD",
      date: "October 2022",
      points: [
        "Made upstream contributions to Kubernetes SIG Docs, enhancing the quality and accuracy of the official Kubernetes Documentation.",
        "Collaborated on the development of the upstream Kubernetes website, implementing new features and resolving bugs to optimize its performance and usability.",
        "Recognized as an official contributor to the Kubernetes repository, standing out among a diverse community of over 3,000 contributors.",
      ],
    },
    {
      title: "Hacktoberfest 2022",
      company_name: "Organized by Multiple Companies",
      icon: hacktoberfest,
      iconBg: "#383E56",
      date: "October 2022",
      points: [
        "Made upstream contributions to Kubernetes SIG Docs, enhancing the quality and accuracy of the official Kubernetes Documentation.",
        "Collaborated on the development of the upstream Kubernetes website, implementing new features and resolving bugs to optimize its performance and usability.",
        "Recognized as an official contributor to the Kubernetes repository, standing out among a diverse community of over 3,000 contributors.",
      ],
    },
    {
      title: "iOS Application Developer",
      company_name: "Infosys",
      icon: Infosys,
      iconBg: "#383E56",
      date: "April 2023 - May 2023",
      points: [
        "Followed Agile methodology to develop a native iOS hospital management system app from scratch.",
        "Created 3 user scenarios for the app: Patient, Staff and Admin.",
        "Each user scenario had 5 functionalities inter-related to each other and dynamic.",
        "Tech Stack: SwiftUI, Firebase, Jira.",
      ],
    },
  ];
  
  const testimonials = [
    {
      // testimonial:
      //   "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      // name: "Sara Lee",
      // designation: "CFO",
      // company: "Acme Co",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      // testimonial:
      //   "I've never met a web developer who truly cares about their clients' success like Rick does.",
      // name: "Chris Brown",
      // designation: "COO",
      // company: "DEF Corp",
      // image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      // testimonial:
      //   "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      // name: "Lisa Wang",
      // designation: "CTO",
      // company: "456 Enterprises",
      // image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Wanderly",
      description:
        "Utilizing OpenAI GPT-3, this project crafts travel itineraries based on user-inputted destination, duration, budget, activities, offering personalized trip plans via Wanderly.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Node JS",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI API",
          color: "pink-text-gradient",
        },
      ],
      image: Wanderly,
      source_code_link: "https://github.com/K0more/Wanderly",
    },
    {
      name: "Talking Signs",
      description:
        "Talking Sings is a text to sign language conversion app which also supports backwards compatibility of Sign language to text",
      tags: [
        {
          name: "Swift",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Xcode",
          color: "pink-text-gradient",
        },
      ],
      image: TalkingSigns,
      source_code_link: "https://github.com/K0more/TalkingSigns",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };