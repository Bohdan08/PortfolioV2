/* Constats that are shared across the app */

export const NAV_LINKS = [
  {
    name: "About",
    url: "/#about",
  },
  {
    name: "Experience",
    url: "/#experience",
  },
  {
    name: "Projects",
    url: "/#projects",
  },
  {
    name: "Contact",
    url: "/#contact",
  },
];

export const DAILY_SKILLS = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Redux",
  "HTML",
  "CSS/SCSS",
];

export const EXPERIENCE_LIST = [
  {
    company: "BMO",
    title: "Frontend Developer",
    url: "https://www.bmo.com/main/personal",
    timeLine: "July 2021 - Present",
    workDone: [
      "Built web pages that are responsive and performant for BMO.com and BMO Harris.com public sites that serve millions of users on a daily basis",
      "Remediated web pages to make them accessible for all types of users following WCAG 2.0 AA Accessibility guidelines, AODA (Accessibility for Ontarians with Disabilities Act) and SEO best practices",
      "Helped QAs by implementing Accessibility testing on multiple devices",
      "Worked in a team of more than 15 developers in an Agile environment",
    ],
  },

  {
    company: "MPAC",
    title: "Software Developer",
    url: "https://www.mpac.ca/en",
    timeLine: "April 2019 - July 2021",
    workDone: [
      "Developed analytics dynamic dashboards and applications using JavaScript/TypeScript, React, and Redux that helped business stakeholders to check and compare data in real time",
      "Worked on an assessment-related React web application that is called 'Municipal Connect' for Ontario municipal stuff utilizing micro frontend architecture that significantly saved costs for the company",
      "Was responsible for leading a team of 3 people tasked with creating a fast and responsive data visualization React app",
      "Built, extended, and optimized API endpoints using Python that serve thousands of Web clients",
      "Implemented mock-ups and cooperated with UI/UX designers",
      "Performed code review",
    ],
  },
];

export const PROJECTS_TECHNOLOGIES = ["React", "React Native", "Vue"];

export const PROJECTS_INFO = [
  {
    project: "English With Love",
    description:
      "An interactive language learn application for advanced learners.",

    url: "https://ewl-staging.web.app",

    mainTechnology: "React",
    features: [
      "Unique lessons crafted by professional and experienced coaches",
      "Different categories such as Reading, Watching and Vocabulary",
      "Users can save their current progress",
      "A user profile with settings and statistic",
    ],
    technologies: [
      "JavaScript (ES6+)",
      "React",
      "Redux",
      "Redux-Persist",
      "Firebase",
      "HTML",
      "CSS/SCSS",
    ],
    github: "https://gitlab.com/Bohdan881/in_english_with__love",
    imgSrc:
      "https://res.cloudinary.com/koruja/image/upload/v1609723617/portfolio/ewl/main_jcjc7m.png",
  },
  {
    project: "KORUJA",
    description:
      "React Landing Page for a wholesale company based in South Korea",
    url: "https://koruja-shop.ru",
    mainTechnology: "React",
    features: [
      "A Company info",
      "Detailed products information",
      "A responsive landing page divided into 4 different sections",
      "Bilingual",
    ],
    imgSrc:
      "https://res.cloudinary.com/koruja/image/upload/v1636132454/portfolio/koruja/kmain_yhe2ny_1_qpglpl_reduced.png",
    // "https://res.cloudinary.com/koruja/image/upload/v1609727249/portfolio/koruja/kmain_yhe2ny.png",
    technologies: [
      "JavaScript (ES6+)",
      "HTML",
      "React",
      "CSS/SCCS",
      "Semantic UI",
    ],
    github: "https://gitlab.com/Bohdan881/in_english_with__love",
  },

  {
    project: "Reviewer",
    description: "Dr. Wilderman Patient Review Form",
    url: "https://reviewclever.com/#/home",
    mainTechnology: "React",
    features: [
      "A three-phase application",
      "A rate component with a clinic's contact info",
    ],
    imgSrc:
      "https://res.cloudinary.com/koruja/image/upload/v1636132198/portfolio/reviewer/ReviwerReduced_mksyha.png",
    technologies: ["JavaScript (ES6+)", "HTML", "React", "CSS", "AWS/EC2"],
    github: "https://github.com/Bohdan08/repman-ui",
  },
  // Vue
  {
    project: "Portfolio",
    description: "My first online portfolio",

    url: "https://portfolio-49bce.firebaseapp.com",

    mainTechnology: "Vue",
    features: [
      "A web-page that divided into 3 main categories such as Portfolio, My Offer and Contact me",
    ],
    technologies: [
      "JavaScript (ES6+)",
      "Vue",
      "Firebase",
      "HTML",
      "Bootstrap",
      "CSS/SCSS",
    ],
    github: "https://gitlab.com/Bohdan881/portfolio",
    imgSrc:
      "https://res.cloudinary.com/koruja/image/upload/v1636133666/portfolio/old_portfolio/Portfolio__.png",
    // "https://res.cloudinary.com/koruja/image/upload/v1636133465/portfolio/old_portfolio/Portfolio_a7mits.png",
  },

  // React Native

  {
    project: "English With Love (mobile)",
    description:
      "An interactive language learn mobile application for advanced learners",
    url: null,

    mainTechnology: "React Native",
    features: [
      "Unique lessons crafted by professional and experienced coaches",
      "Different categories such as Reading, Watching and Vocabulary",
      "Users can save their current progress",
      "A user profile with settings and statistic",
    ],
    technologies: [
      "JavaScript (ES6+)",
      "React Native",
      "Redux",
      "HTML",
      "Reanimated",
      "NativeBase",
      "CSS/SCSS",
    ],
    github: "https://gitlab.com/Bohdan881/ewl_react_native",
    imgSrc:
      "https://res.cloudinary.com/koruja/image/upload/v1609906565/portfolio/ewl-native/lesson_sljo9n.png",
  },
];

export const KEY_CODES = {
  ARROW_LEFT: "ArrowLeft",
  ARROW_LEFT_IE11: "Left",
  ARROW_RIGHT: "ArrowRight",
  ARROW_RIGHT_IE11: "Right",
  ARROW_UP: "ArrowUp",
  ARROW_UP_IE11: "Up",
  ARROW_DOWN: "ArrowDown",
  ARROW_DOWN_IE11: "Down",
  ESCAPE: "Escape",
  ESCAPE_IE11: "Esc",
  TAB: "Tab",
  SPACE: " ",
  SPACE_IE11: "Spacebar",
  ENTER: "Enter",
};
