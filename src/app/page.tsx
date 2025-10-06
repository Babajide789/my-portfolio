"use client"

import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import { FiDownload } from "react-icons/fi"
import Link from "next/link"

export default function Home() {
  return (
    <section className="h-full bg-[#1e1e22] text-white">
      <div className="container mx-auto h-full px-4 sm:px-6 md:px-10">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-2">
          {/* TEXT */}
          <div className="w-full xl:w-1/2 text-center sm:text-left order-2 xl:order-none flex flex-col items-center sm:items-start">
            <span className="text-accent text-lg">Frontend Developer</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-6 leading-tight">
              Hello, I&apos;m <br /> Babajide Yahaya
            </h1>

            <p className="max-w-[500px] mb-9 text-white/70 text-sm sm:text-base"> 
              I’m passionate about turning ideas into interactive realities by crafting seamless user experiences 
              that don’t just look good, but feel effortless to use. My focus is on precision, performance, and purpose. 
            </p>           
            
            {/* ACTIONS BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              {/* DOWNLOAD CV */}
              <Link 
                href="/Babajide_Yahaya_Frontend_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button
                  className="uppercase flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-lg font-semibold 
                  shadow-md hover:shadow-[0_0_20px_4px_rgba(0,255,153,0.5)] 
                  hover:bg-accent/90 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <FiDownload className="text-xl" />
                  <span>Resume</span>
                </button>
              </Link>


              {/* SOCIALS */}
              <div className="mt-6 sm:mt-0">
                <Socials
                  containerStyles="flex gap-4 sm:gap-6"
                  iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center 
                  text-accent text-lg hover:bg-accent hover:text-primary hover:shadow-[0_0_15px_3px_rgba(0,255,153,0.5)] 
                  hover:scale-110 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* PHOTO */}
          <div className="w-full xl:w-1/2 flex justify-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* StATS SECTION */}
      <Stats />
    </section>
  )
}
