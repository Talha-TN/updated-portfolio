import dice from "../assets/images/dice.png"
import figma from "../assets/images/figma.png"
import portfolio from "../assets/images/portfolio.png"
// import positivius from "../assets/images/positivius.JPG"
import shopmate from "../assets/images/shomate.png"
import movies from "../assets/images/movies.png"
import todo from "../assets/images/todo.png"

const projectsData = [
  {
    image: movies,
    name: "cinemate",
    technologies: {
      first: "React Js",
      second: "Javascript",
      third: "Tailwind css",
    },
    github: "https://github.com/Talha-TN/cinemate",
    websitelink: "https://cinemate-talhanawaz.netlify.app",
    date:"2024"
  },
  {
    image: figma,
    name: "C-Consultation",
    technologies: {
      first: "HTML-CSS",
      second: "Javascript",
      third: "React Js",
    },
    github: "https://github.com/Talha-TN/Figma-layout",
    websitelink: "https://talha-tn.github.io/Figma-layout/",
    date:"2024"
  },
  {
    image:portfolio,
    name: "Old portfolio",
    technologies: {
      first: "HTML-CSS",
      second: "Javascript",
      third: "React Js",
    },
    github: "https://github.com/Talha-TN/My-portfolio",
    websitelink: "https://talha-tn.github.io/My-portfolio/",
    date:"2024"
  },
  // {
  //   image: positivius,
  //   name: "Positivius",
  //   technologies: {
  //     first: "React Js",
  //     second: "Tailwind css",
  //     third: "HTML-CSS",
  //   },
  //   github: "https://github.com/Talha-TN/figma-positivus",
  //   websitelink: "https://positivus-t.netlify.app",
  //   date:"2024"
  // },
  {
    image: todo,
    name: "Todo app",
    technologies: {
      first: "React js",
      second: "Redux",
      third: "Tailwind css",
    },
    github: "https://github.com/Talha-TN/todoTask",
    websitelink: "https://taskmate-talhanawaz.netlify.app",
    date:"2023"
  },
  {
    image: shopmate,
    name: "Shopmate",
    technologies: {
      first: "React Js",
      second: "Redux",
      third: "Tailwind css",
    },
    github: "https://github.com/Talha-TN/redux-shoppingCart",
    websitelink: "https://talha-redux.netlify.app",
    date:"2024"
  },
  {
    image: dice,
    name: "HTML-CSS",
    technologies: {
      first: "HTML-CSS",
      second: "Javascript",
      third: "tailwind css",
    },
    github: "https://github.com/Talha-TN/Dice-Rolling-Game",
    websitelink: "https://talha-tn.github.io/Dice-Rolling-Game/",
    date:"2024"
  },
];
export default projectsData;