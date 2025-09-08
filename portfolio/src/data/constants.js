
import htmlLogo from "../images/logos/html5.png";
import cssLogo from "../images/logos/CSS3.png";
import jsLogo from "../images/logos/JavaScript.png";
import reactLogo from "../images/logos/reactJs.png";
import tailwindLogo from "../images/logos/tailwindCss.png";
import shadcnLogo from "../images/logos/shadCn.jpeg";

import nodeLogo from "../images/logos/node-Js.png";
import expressLogo from "../images/logos/express.png";
import springBootLogo from "../images/logos/spring-boot.png";
import djangoLogo from "../images/logos/django.png";
import mysqlLogo from "../images/logos/mysql.jpg";
import mongoLogo from "../images/logos/mongoDb.png";

import cLogo from "../images/logos/c.png";
import cppLogo from "../images/logos/cpp.jpg";
import javaLogo from "../images/logos/java.jpeg";
import pythonLogo from "../images/logos/python.png";
import jupytelogo from "../images/logos/jupterNb.png"
import gitLogo from "../images/logos/git.png";
import githubLogo from "../images/logos/github.png";
import vscodeLogo from "../images/logos/vscode.png";
import postmanLogo from "../images/logos/api.png";

import weatherAppImg from "../images/weather_app.png";
import hostelImg from "../images/hms1.png";   
import gsapImg from "../images/gsap.png";  
import corsImg from "../images/cors1.png"

export const Bio = {
  name: "Vardhan",
  roles: [
    "Full Stack Developer",
    "Web Developer",
    "Tech Explorer",
    "Problem Solver"
  ],
  description:
    "I’m a full-stack developer passionate about building clean, user-friendly web applications. I enjoy turning ideas into scalable solutions and continuously improving my skills. Excited to contribute to meaningful projects and grow as a developer.",
  gmail: "vardhanmalyala@gmail.com",
  resume:
    "https://drive.google.com/file/d/1VfPX4sCIwqHBo2zvkvx0PLl-f8uaXWLS/view?usp=sharing",
  linkedin: "https://linkedin.com/in/vardhan-malyala-b82606294/",
  github:"https://github.com/Vardhan09-web",
  leetcode:"https://leetcode.com/u/Vardhan_malyala/"
};
export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", image: htmlLogo },
      { name: "CSS", image: cssLogo },
      { name: "JavaScript", image: jsLogo },
      { name: "React Js", image: reactLogo },
      { name: "Tailwind CSS", image: tailwindLogo },
      { name: "Shadcn UI", image: shadcnLogo },
    ],
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "Node Js", image: nodeLogo },
      { name: "Express Js", image: expressLogo },
      { name: "Spring Boot", image: springBootLogo },
      { name: "Django", image: djangoLogo },
      { name: "MySQL", image: mysqlLogo },
      { name: "MongoDB", image: mongoLogo },
    ],
  },

  {
    title: "Programming Languages",
    skills: [
      { name: "C", image:cLogo},
      { name: "C++", image: cppLogo },
      { name: "Java", image: javaLogo },
      { name: "Python", image: pythonLogo },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", image: gitLogo },
      { name: "GitHub", image: githubLogo },
      { name: "Postman", image: postmanLogo }, 
      { name: "VS Code", image: vscodeLogo },
      {name: "Jupyter", image: jupytelogo}
    ],
  },
];




export const education = [
  {
    id: 0,
    school: "GOVT Polytechnic College Siddipet",
    date: "SEP 2020 - JUNE 2023",
    grade: "9.32 CGPA",
    desc: "I completed my diploma with a focus on core computer science concepts. My coursework included Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Computer Networks.",
    degree: "Diploma in Engineering, Computer Science",
  },
  {
    id: 1,
    school: "JNTUH-UCEJ Jagityala",
    date: "SEP 2023 - JUNE 2026",
    grade: "8.28 CGPA",
    desc: "Currently pursuing my Final Year Bachelor of Technology degree. My studies are focused on advanced topics in software development and engineering, with a strong emphasis on practical application.",
    degree: "Bachelor of Technology - BTech, Computer Science And Engineering",
  },
];

export const projects = [
  {
    id: 11,
    title: "Hostel Management System",
    description:
      "Built a HMS app with Django, allowing users and hostel incharges to efficiently manage hostel operations.",
    image: hostelImg, 
    tags: ["HTML5", "CSS", "Django", "MySql"],
    category: "web app",
    github: "https://github.com/Vardhan09-web/Hostel-Management-System",
    webapp: "https://github.com/Vardhan09-web/Hostel-Management-System",
  },
  {
    id: 12,
    title: "Gsap Project",
    description:
      "Cocktail Gsap Animation project which shows my frontend skills.",
    image: gsapImg, 
    tags: ["React Js", "GSAP", "Tailwind CSS", "Javascript"],
    category: "web app",
    github: "https://github.com/Vardhan09-web/GSAP-Project-Animations",
    webapp: "https://gsap-sip-and-scroll.vercel.app/",
  },
    {
    id: 14,
    title: "Career Opportunity Recommender System",
    description:
      "A full-stack career guidance platform built with React, Tailwind CSS, and Spring Boot. It helps students discover suitable career paths by analyzing their subjects, skills, interests, and personality traits.",
    image: corsImg, 
    tags: ["React Js", "Tailwind CSS", "Spring Boot", "MySql"],
    category: "web app",
    github: "https://github.com/saiabhiram3754/CORS-Frontend-",
    webapp: "https://github.com/Vardhan09-web/cors-backend",
  },
  {
    id: 13,
    title: "Weather App",
    description:
      "A responsive and modern weather application built using React and Vite. This app fetches real-time weather data for any city using a public weather API and displays it in an easy-to-read format.",
    image: weatherAppImg, 
    tags: ["React Js", "Javascript", "WeatherAPI", "CSS3"],
    category: "web app",
    github: "https://github.com/Vardhan09-web/Weather-App",
    webapp: "https://weather-app-mu-gold-50.vercel.app/",
  },
];


