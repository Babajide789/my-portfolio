"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiShadcnui, SiTailwindcss } from "react-icons/si";
import { useState } from "react";

const about = {
  title: "About Me",
  description: "Driven by creativity and precision. I craft web experiences that inspire and perform.",
  info: [
    { fieldName: "Name", fieldValue: "Babajide Mohammed Yahaya" },
    { fieldName: "Phone", fieldValue: "(+234) 703 016 8883" },
    { fieldName: "Experience", fieldValue: "4+ Years" },
    { fieldName: "Nationality", fieldValue: "Nigerian" },
    { fieldName: "Email", fieldValue: "yahayababajide@gmail.com" },
    { fieldName: "Language", fieldValue: "English, Yoruba" },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "Building functional, user-focused interfaces through real projects, collaborations, and continuous learning.",
  items: [
    {
      company: "Jayy Tech Solution",
      position: "Frontend Developer",
      duration: "2024 - Present",
      summary:
        "Developing production-level interfaces, optimizing user flows, and implementing reusable components for client-facing applications using React, Tailwind, and modern tooling.",
    },
    {
      company: "Hamtec Project",
      position: "Frontend Developer Intern",
      duration: "2023 - 2024",
      summary:
        "Assisted in building UI layouts, improving mobile responsiveness, and collaborating with senior developers to ship features efficiently while learning best practices.",
    },
    {
      company: "Freelance & Contract Projects",
      position: "Frontend Developer",
      duration: "2022 - Present",
      summary:
        "Delivered responsive landing pages, portfolio sites, and small web apps for individuals and SMEs, focusing on clean code, animations, and smooth user experiences.",
    },
    {
      company: "Open Source / GitHub Contributions",
      position: "Contributor",
      duration: "2023 - Present",
      summary:
        "Contributed to community-driven projects by enhancing UI components, improving accessibility, fixing bugs, and refining documentation for developer clarity.",
    },
    {
      company: "Personal Development Projects",
      position: "Project Developer",
      duration: "2022 - Present",
      summary:
        "Built hands-on projects including e-commerce pages, form wizards, API-based apps, and utility tools—strengthening skills in state management, API integration, and responsive design.",
    },
  ],
};

const education = {
  title: "My Education",
  description: "Learning never stops, every lesson fuels my craft and shapes my code.",
  items: [
    {
      institution: "NASFAT Activate Training Program in Tech",
      degree: "Frontend Developer",
      duration: "2024",
    },
    {
      institution: "UDEMY by Skillhub Academy",
      degree: "JavaScript Course",
      duration: "2024",
    },
    {
      institution: "Federal University of Technology, Akure",
      degree: "Quantity Surveying",
      duration: "2023",
    },
    {
      institution: "W3Schools",
      degree: "Frontend Beginners Training",
      duration: "2022",
    },
  ],
};


const skills = {
  title: "My Skills",
  description: "Building beautiful, responsive, and purposeful interfaces with the tools I have mastered.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiShadcnui />, name: "ShadCN" },

  ],
};


export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

   return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6, ease: "easeInOut" },
      }}
      className="min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 md:px-10 bg-[#1e1e22] text-white"
    >
      <div className="w-full max-w-6xl h-full mx-auto flex flex-col xl:flex-row gap-8 sm:gap-10">
        
        {/* Tabs Menu */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:flex xl:flex-col xl:w-1/4 xl:-mt-103 justify-center">
          {["experience", "education", "skills", "about"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 sm:px-4 sm:py-3 cursor-pointer rounded-xl font-semibold capitalize transition-all duration-300 text-xs sm:text-sm md:text-base
                ${activeTab === tab
                  ? "bg-black text-white shadow-md scale-105"
                  : "bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div className="flex-1 min-h-[70vh] space-y-6">
          {/* EXPERIENCE */}
          {activeTab === "experience" && (
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                {experience.title}
              </h3>
              <p className="text-neutral-400 mb-4 sm:mb-6 text-sm sm:text-base">
                {experience.description}
              </p>

              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                {experience.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-neutral-800 hover:bg-neutral-700 transition-colors p-4 sm:p-6 rounded-xl shadow-md"
                  >
                    <span className="text-accent font-semibold text-sm sm:text-base">
                      {item.duration}
                    </span>
                    <h4 className="text-lg sm:text-xl font-semibold mt-2">
                      {item.position}
                    </h4>
                    <p className="text-neutral-400 mt-1 text-sm sm:text-base">
                      {item.company}
                    </p>
                    <p className="text-neutral-400 mt-1 text-sm sm:text-base">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EDUCATION */}
          {activeTab === "education" && (
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                {education.title}
              </h3>
              <p className="text-neutral-400 mb-4 sm:mb-6 text-sm sm:text-base">
                {education.description}
              </p>
              
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                {education.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-neutral-800 hover:bg-neutral-700 transition-colors p-4 sm:p-6 rounded-xl shadow-md"
                  >
                    <span className="text-accent font-semibold text-sm sm:text-base">
                      {item.duration}
                    </span>
                    <h4 className="text-lg sm:text-xl font-semibold mt-2">
                      {item.degree}
                    </h4>
                    <p className="text-neutral-400 mt-1 text-sm sm:text-base">
                      {item.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SKILLS */}
          {activeTab === "skills" && (
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                {skills.title}
              </h3>
              <p className="text-neutral-400 mb-4 sm:mb-6 text-sm sm:text-base">
                {skills.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                {skills.skillList.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 flex flex-col justify-center items-center p-4 sm:p-6 rounded-xl shadow-md group cursor-pointer"
                  >
                    <div className="text-3xl sm:text-4xl md:text-5xl text-neutral-400 group-hover:text-accent transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <span className="mt-2 text-xs sm:text-sm md:text-base text-neutral-200 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ABOUT */}
          {activeTab === "about" && (
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                {about.title}
              </h3>
              <p className="text-neutral-400 mb-4 sm:mb-6 text-sm sm:text-base">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {about.info.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 bg-neutral-800 hover:bg-neutral-700 transition-colors p-3 sm:p-4 rounded-lg"
                  >
                    <span className="text-neutral-400 font-medium text-xs sm:text-sm md:text-base">
                      {item.fieldName}:
                    </span>
                    <span className="text-white text-sm sm:text-base">
                      {item.fieldValue}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}