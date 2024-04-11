"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium text-[#40C2FF] dark:text-[#b545ff]">
          Software Engineering
        </span>
        , I decided to pursue my passion for programming. I learned full-stack
        development. After learning full-stack, I decided to specialize in{" "}
        <span className="font-medium text-[#40C2FF]  dark:text-[#b545ff]">
          Front-End Development
        </span>
        . My focus in front-end web development is{" "}
        <span className="font-medium text-[#40C2FF]  dark:text-[#b545ff]">
          React(Next.js)
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies.
      </p>

      <p>
        During my <span className="italic">non-coding</span> hours, I enjoy playing
        video games, watching tv shows, and maintaining my physical fitness
        through gym workouts. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>.
      </p>
    </motion.section>
  );
}
