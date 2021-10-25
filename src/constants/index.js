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

// title, url, company, range
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
