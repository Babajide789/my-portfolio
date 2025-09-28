"use client"

import { motion } from "framer-motion"
import { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import Link from "next/link"
import Image from "next/image"
import WorkSlidersBtns from "@/components/WorkSliderBtns"
import Tooltip from "@/components/Tooltip"

// Portfolio Projects
const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Hamtec Project",
    description:
      "A business website with modern UI, synced to GitHub and deployed on Vercel with domain setup and contact email integration.",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
      { name: "Resend API" },
    ],
    image: "/projects/hamtec.png",
    live: "https://hamtecproject.com",
    github: "https://github.com/Babajide789/Hamtec-Project",
  },
  {
    num: "02",
    category: "Frontend",
    title: "TinyURL Project",
    description:
      "A URL shortening application using TinyURL API with clean UI, caching, and responsive design.",
    stack: [{ name: "React" }, { name: "TailwindCSS" }, { name: "REST API" }],
    image: "/projects/shortly.png",
    live: "https://url-shortener-land-ingpage.netlify.app",
    github: "https://github.com/Babajide789/URL-shortener",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Canvas Lancer",
    description:
      "A modern freelancer landing page concept showcasing animations, CTA sections, and a professional layout.",
    stack: [
      { name: "Next.js" },
      { name: "TailwindCSS" },
      { name: "Framer Motion" },
    ],
    image: "/projects/canvaslancer.png",
    live: "https://canvaslancer.vercel.app",
    github: "https://github.com/Babajide789/canvas-lancer",
  },
  {
    num: "04",
    category: "Frontend",
    title: "EasyBank Landing Page",
    description:
      "A responsive banking landing page challenge featuring clean sections, hover effects, and modern visuals.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/projects/easybank.png",
    live: "https://page-easy-bank.netlify.app",
    github: "https://github.com/Babajide789/easy-bank-landing-page",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Bookmark Landing Page",
    description:
      "A bookmark manager landing page with FAQ accordion, responsive layout, and modern UI styling.",
    stack: [{ name: "React" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/projects/bookmark.png",
    live: "https://bookmarkandingpage.netlify.app/",
    github: "https://github.com/yourusername/bookmark-landing",
  },
]

export default function Work() {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
      }}
      className="min-h-[90vh] flex flex-col justify-center py-12 xl:px-0 bg-[#1a1a1d] text-white pl-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[40px]">
          {/* Left Side - Project Details */}
          <div className="w-full xl:w-[50%] xl:h-[500px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-6">
              {/* Project Number */}
              <div className="text-7xl xl:text-8xl font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* Category */}
              <h2 className="text-[38px] xl:text-[42px] font-bold leading-tight capitalize text-accent">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-white/80 leading-relaxed">
                {project.description}
              </p>

              {/* Stack */}
              <ul className="flex flex-wrap gap-3">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-md text-sm"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>

              {/* Border */}
              <div className="border-b border-white/20 my-4"></div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <Tooltip content="Live Project" position="top">
                      <div className="w-[55px] h-[55px] rounded-full bg-accent flex justify-center items-center group hover:bg-accent/90 hover:shadow-[0_0_20px_4px_rgba(0,255,153,0.5)] 
                    hover:scale-105 duration-300 transition-all
                   hover:text-black">
                        <BsArrowUpRight className="text-black text-2xl" />
                      </div>
                    </Tooltip>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <Tooltip content="GitHub Repo" position="bottom">
                      <div className="w-[55px] h-[55px] rounded-full bg-white/10 flex justify-center items-center group  hover:bg-white/20 
                      
                       hover:shadow-[0_0_20px_4px_rgba(0,255,153,0.5)] 
                    hover:scale-105 duration-300 transition-all
                   hover:text-black">
                        <BsGithub className="text-white text-2xl" />
                      </div>
                    </Tooltip>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[480px] relative group flex justify-center items-center bg-black/20 rounded-xl overflow-hidden shadow-lg border border-white/10">
                    {/* Fake browser bar */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-[#2a2a2d] flex items-center gap-2 px-3 z-20">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/40 transition"></div>

                    {/* Image */}
                    <div className="relative w-full h-full pt-8"> {/* padding for top bar */}
                      <Image
                        src={item.image}
                        alt={`${item.title} preview`}
                        fill
                        priority={index === 0}
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                </SwiperSlide>
              ))}

              {/* Slider Buttons */}
              <WorkSlidersBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none py-2"
                btnStyles="bg-accent hover:bg-accent-hover text-black text-[20px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all
                  hover:shadow-[0_0_20px_4px_rgba(0,255,153,0.5)] 
                  hover:scale-105 duration-300 transition-all
                  hover:bg-accent hover:text-black
                "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
