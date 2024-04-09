import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { SiAdobe } from "react-icons/si";
import { SiMulesoft } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import wordanalyticsImg from "@/public/wordanalytics.png";
import movie from '@/public/movie-finder.png';
import portfolio from '@/public/portfolio.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  // {
  //   name: "Skills",
  //   hash: "#skills",
  // },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Web Developer",
    location: "Sydney, Australia",
    description:
      "Worked as a front-end web developer at Adobe, using AEM to produce webpages",
    icon: React.createElement(SiAdobe, { style: { color: "#ff0000" } }),
    date: "Apr 2022 - Oct 2022",
  },
  {
    title: "Professional Services Engineer",
    location: "Sydney, Australia",
    description:
      "Worked as a Professional Services Engineer at MuleSoft, developing a Cloud migration tool for users",
    icon: React.createElement(SiMulesoft, { style: { color: "#00A3E0" } }),
    date: "Nov 2022 - Feb 2023",
  },
  {
    title: "Graduated from UNSW",
    location: "Sydney, Australia",
    description:
      "Bachelor of Computer Science/Commerce (Finance)",
    icon: React.createElement(LuGraduationCap),
    date: " 2019 - 2023",
  },
  {
    title: "Software Engineer",
    location: "Sydney, Australia",
    description:
      "Working as a Software Engineer at Optus, using technologies such as React, Typescript, Node.js, PostgreSQL, AWS, GCP & NICE CXOne",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Optus - Training Module",
    description:
      "Led the development of a highly scalable React microservice, streamlining the process from > 10 hours to minutes",
    tags: ["React", "Typescript", "Node.js", "Express", "PostgreSQL"],
    imageUrl: wordanalyticsImg,
    link: ""
  },
  {
    title: "Movie Finder",
    description:
      "Developed a movie finder web application with friends. It has features like account creation, ML algorithm suggestions based on saved movies, reviews and ratings.",
    tags: ["React", "Tailwind", "Java", "Spring Boot", "PostgreSQL"],
    imageUrl: movie,
    link: "https://github.com/sschye21/Movie-Finder"
  },
  {
    title: "Personal Portfolio",
    description:
      "Personal Portfolio website to showcase projects, skills and who I am!",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: portfolio,
    link: "https://github.com/sschye21/Portfolio-V3"
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Java",
  "Framer Motion",
  "GCP",
  "AWS"
] as const;
