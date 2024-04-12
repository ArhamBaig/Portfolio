import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { GoBook } from "react-icons/go";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },

] as const;

export const experiencesData = [
  {
    title: "Aga Khan Higher Secondary School",
    location: "Karachi, Pakistan",
    description:
      "I graduated after 2 years of studying Pre-Engineering.",
    icon: React.createElement(GoBook),
    date: "2017 - 2019",
  },
  {
    title: "Usman Institute of Technology",
    location: "Karachi, Pakistan",
    description:
      "I successfully completed my Bachelor's in Software Engineering. I immediately got a job offer as a Front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Front-End Developer",
    location: "Karachi, Pakistan",
    description:
      "I'm now a front-end developer working in a reputable company. My stack includes React, Next.js, Javascript, TypeScript, Tailwind Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PPV Live Streaming Platform",
    description:
      "Users can upload exclusive content that can be accessed through cryptocurrency. They can live stream too.",
    tags: [
      "/html.png",
      "/css.png",
      "/bootstrap.png",
      "/js.png",
      "/node.png",
      "/express.png",
      "/mongodb.png",
     
      "/ejs.png"
    ],
    imageUrl: "/ppv-streaming-platform.png",
    github:"https://github.com/ArhamBaig/Pay-per-view-streaming-platform"
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  { name: "JavaScript", image: "/js.png" },
  { name: "TypeScript", image: "/ts.png" },
  { name: "React", image: "/react.svg" },
  { name: "Next.js", image: "/next.png" },
  { name: "Node.js", image: "/node.png" },
  { name: "Git", image: "/git.png" },
  { name: "Tailwind", image: "/tailwind.png" },
  { name: "MongoDB", image: "/mongodb.png" },
  { name: "Redux", image: "/redux.png" },
  { name: "Express", image: "/express.png" },
  { name: "shadcn", image: "/shadcn.png" },
] as const;
