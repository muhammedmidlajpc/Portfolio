import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  typeScript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from "../assets";

import softroniics from "../assets/company/softroniics.jpeg";
import ds from "../assets/company/ds.png";
import drube from "../assets/company/drube.jpeg";

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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Ui UX Designer",
  //   icon: creator
  // }
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
    icon: typeScript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Material Ui",
  //   icon: mui,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  // {
  //   name: "AWS",
  //   icon: aws,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "MySql",
  //   icon: mysql,
  // },

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "DayScholars Innovations Pvt. Ltd., Calicut",
    icon: ds,
    iconBg: "#383E56",
    date: "Jan 2026 - Present",
    points: [
      "Develop React and TypeScript features for IQED (e-learning management) and Highway Buddy (restaurant discovery).",
      "Build validated forms with React Hook Form and Zod, API integrations with TanStack Query, and data-driven admin tables with TanStack Table and nuqs.",
      "Extend Fastify and TypeScript REST APIs with request validation, Prisma data models, and access checks."
    ]
  },
  {
    title: "Web Developer",
    company_name: "D-Rube Labs, Kochi",
    icon: drube,
    iconBg: "#ffffff",
    date: "May 2025 - Dec 2025",
    points: [
      "Collaborated with design and development teams to create user-friendly interfaces.",
      "Optimized application performance and improved user experience.",
      "Debugged and resolved issues in existing applications.",
      "Collaborated with the team to ship production ready features and maintain scalable architecture.",
      "Built and maintained the company’s primary admin management dashboard using MERN stack and modern frontend tooling.",
      "Worked across both frontend and backend to improve performance, usability, and internal operations."
    ],
  },
    {
    title: "Full-Stack Developer Intern",
    company_name: "Softroniics, Perinthalmanna",
    icon: softroniics,
    iconBg: "#ffffff",
    date: "Aug 2024 - Feb 2025",
    points: [
      "Gained hands-on experience developing full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Collaborated with senior developers on both frontend and backend tasks to deliver high-quality features.",
      "Understood and applied the integration of technologies within the MERN stack through real-world projects.",
      "Assisted in building scalable and responsive web applications with a focus on user experience.",
      "Implemented new features and resolved bugs based on team input and user feedback.",
      "Participated in team coding sessions, adhering to best practices and improving code quality.",
      "Utilized Git for version control and collaborated effectively within a development team.",
    ],
  },
];

const projects = [
  {
    name: "SCROLL",
    description:
      "SCROLL is a web-based platform focused on movies, anime, series, and manhwa" +
      " where users can:" +
      " Browse and view ratings, reviews, and details of various titles," +
      " Post text and image-based tweets, reply to others' tweets, and engage in discussions," +
      " Submit personal ratings and detailed reviews for titles, with reply support on reviews," +
      " Participate in real-time chat with other users using Socket-io," +
      " Admin functionality includes moderation tools to delete inappropriate tweets and reviews",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "gray-text-gradient",
      },
      {
        name: "tailwind",
        color: "cyan-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/muhammedmidlajpc/SCROLL",
  },
];

export { services, technologies, experiences, projects };
