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
import Tooltip from "@/components/Tooltip" // ✅ our custom tooltip

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Built a responsive landing page for all devices",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/img00.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description: "Built a responsive landing page for web devices",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Javascript" },
    ],
    image: "/img00.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "Built a landing page for mobile devices",
    stack: [{ name: "Next.js" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/img00.png",
    live: "",
    github: "",
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
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Side - Text */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent">
                {project.num}
              </div>

              {/* Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>

              {/* Description */}
              <p className="text-white/60">{project.description}</p>

              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Border */}
              <div className="border border-white/20"></div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project */}
                <Link href={project.live}>
                    <Tooltip content="Live Project" position="top">
                        <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </div>
                    </Tooltip>
                </Link>

                {/* GitHub */}
                <Link href={project.github}>
                    <Tooltip content="Github Repository" position="bottom">
                        <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </div>
                    </Tooltip>
                </Link>
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
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        fill
                        className="object-cover"
                        alt="project image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Slider Buttons */}
              <WorkSlidersBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
