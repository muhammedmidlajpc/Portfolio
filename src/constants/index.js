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
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial
} from "../assets";

// Import Softroniics separately
import softroniics from "../assets/company/softroniics.jpeg";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web
  },
  {
    title: "Frontend Developer",
    icon: mobile
  },
  {
    title: "Backend Developer",
    icon: backend
  },
  // {
  //   title: "Ui UX Designer",
  //   icon: creator
  // }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "figma",
    icon: figma
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  // {
  //   name: "Material Ui",
  //   icon: mui,
  // },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "Express Js",
    icon: express
  },
  // {
  //   name: "AWS",
  //   icon: aws,
  // },
  {
    name: "MongoDB",
    icon: mongodb
  },
  // {
  //   name: "MySql",
  //   icon: mysql,
  // },

  {
    name: "git",
    icon: git
  }
];

const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company_name: "Softroniics",
    icon: softroniics,
    iconBg: "#383E56",
    date: "Aug 2024 - Feb 2025",
    points: [
      "Gained hands-on experience developing full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Collaborated with senior developers on both frontend and backend tasks to deliver high-quality features.",
      "Understood and applied the integration of technologies within the MERN stack through real-world projects.",
      "Assisted in building scalable and responsive web applications with a focus on user experience.",
      "Implemented new features and resolved bugs based on team input and user feedback.",
      "Participated in team coding sessions, adhering to best practices and improving code quality.",
      "Utilized Git for version control and collaborated effectively within a development team."
    ]
  }
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
        color: "blue-text-gradient"
      },
      {
        name: "express.js",
        color: "gray-text-gradient"
      },
      {
        name: "tailwind",
        color: "cyan-text-gradient"
      },
      {
        name: "node",
        color: "green-text-gradient"
      },
      {
        name: "mongodb",
        color: "green-text-gradient"
      }      
    ],
    image: project2,
    source_code_link: "https://github.com/muhammedmidlajpc/SCROLL"
  }
];

export { services, technologies, experiences, projects };
