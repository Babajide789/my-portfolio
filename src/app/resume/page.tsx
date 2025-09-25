"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { useState } from "react";

const about = {
  title: "About Me",
  description: "I work for growth and inspiration.",
  info: [
    { fieldName: "Name", fieldValue: "Babajide Yahaya" },
    { fieldName: "Phone", fieldValue: "(+234) 703 016 8883" },
    { fieldName: "Experience", fieldValue: "5+ Years" },
    { fieldName: "Nationality", fieldValue: "Nigerian" },
    { fieldName: "Email", fieldValue: "yahayababajide@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English, Yoruba" },
  ],
};

const experience = {
  title: "My Experience",
  description: "Always working for growth.",
  items: [
    {
      company: "OCIMS Tech Solution",
      position: "Frontend Developer",
      duration: "2022 - Present",
    },
    {
      company: "Hamtec Project",
      position: "Frontend Developer Intern",
      duration: "2021",
    },
  ],
};

const education = {
  title: "My Education",
  description: "Always studying and improving.",
  items: [
    {
      institution: "Federal University of Technology, Akure",
      degree: "Quantity Surveying",
      duration: "2023",
    },
    {
      institution: "W3Schools",
      degree: "Frontend Web Developer",
      duration: "2022",
    },
    {
      institution: "NASFAT Activate 1.0",
      degree: "Frontend Developer",
      duration: "2024",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Always upskilling.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaFigma />, name: "Figma" },
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
      className="min-h-[80vh] flex items-center justify-center py-12 px-4 md:px-8"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col xl:flex-row gap-10">
        {/* Tabs Menu */}
        <div className="flex xl:flex-col gap-4 xl:w-1/4 justify-center">
          {["experience", "education", "skills", "about"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-accent text-white shadow-lg scale-105"
                  : "bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 min-h-[70vh]">
          {/* EXPERIENCE */}
          {activeTab === "experience" && (
            <div>
              <h3 className="text-3xl font-bold mb-4">{experience.title}</h3>
              <p className="text-neutral-400 mb-6">{experience.description}</p>
              <div className="grid gap-6 md:grid-cols-2">
                {experience.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-neutral-800 hover:bg-neutral-700 transition-colors p-6 rounded-xl shadow-md"
                  >
                    <span className="text-accent">{item.duration}</span>
                    <h4 className="text-xl font-semibold mt-2">
                      {item.position}
                    </h4>
                    <p className="text-neutral-400 mt-1">{item.company}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EDUCATION */}
          {activeTab === "education" && (
            <div>
              <h3 className="text-3xl font-bold mb-4">{education.title}</h3>
              <p className="text-neutral-400 mb-6">{education.description}</p>
              <div className="grid gap-6 md:grid-cols-2">
                {education.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-neutral-800 hover:bg-neutral-700 transition-colors p-6 rounded-xl shadow-md"
                  >
                    <span className="text-accent">{item.duration}</span>
                    <h4 className="text-xl font-semibold mt-2">
                      {item.degree}
                    </h4>
                    <p className="text-neutral-400 mt-1">{item.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SKILLS */}
          {activeTab === "skills" && (
            <div>
              <h3 className="text-3xl font-bold mb-4">{skills.title}</h3>
              <p className="text-neutral-400 mb-6">{skills.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.skillList.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 flex flex-col justify-center items-center p-6 rounded-xl shadow-md group cursor-pointer"
                  >
                    <div className="text-5xl group-hover:text-accent transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <span className="mt-2 text-neutral-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ABOUT */}
          {activeTab === "about" && (
            <div>
              <h3 className="text-3xl font-bold mb-4">{about.title}</h3>
              <p className="text-neutral-400 mb-6">{about.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                {about.info.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 bg-neutral-800 hover:bg-neutral-700 transition-colors p-4 rounded-lg"
                  >
                    <span className="text-neutral-400">{item.fieldName}:</span>
                    <span className="text-white font-medium">
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
