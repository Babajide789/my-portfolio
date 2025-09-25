"use client"

import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import { FiDownload } from "react-icons/fi"

export default function Home() {
  return (
    <section className="h-full bg-[#1e1e22] text-white pl-8">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-10">
          {/* TEXT */}
          <div className="text-center xl:text-left order-2 xl:order-none flex flex-col items-center xl:items-start">
            <span className="text-accent text-lg">Software Developer</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 leading-tight">
              Hello, I&apos;m <br /> Babajide Yahaya
            </h1>

            <p className="max-w-[500px] mb-9 text-white/70">
              I excel at building elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>

            {/* ACTIONS */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* Download CV */}
              <button
                className="uppercase flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-lg font-semibold 
                shadow-md hover:shadow-[0_0_20px_4px_rgba(0,255,153,0.5)] 
                hover:bg-accent/90 hover:scale-105 transition-all duration-300"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </button>

              {/* Socials */}
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center 
                  text-accent text-lg hover:bg-accent hover:text-primary hover:shadow-[0_0_15px_3px_rgba(0,255,153,0.5)] 
                  hover:scale-110 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* PHOTO */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />
    </section>
  )
}
