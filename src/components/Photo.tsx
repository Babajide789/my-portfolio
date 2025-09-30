"use client"

import { easeIn, motion } from "framer-motion"
import Image from "next/image"

export default function Photo() {
  return (
    <div className="relative flex items-center justify-center group">
      {/* IMAGE CONTAINER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: easeIn },
        }}
        className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] xl:w-[480px] xl:h-[480px] 
        flex items-center justify-center rounded-full overflow-hidden 
        transition-all duration-500 group-hover:shadow-[0_0_25px_5px_rgba(0,255,153,0.5)]"
      >
        {/* IMAGE */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-full h-full"
        >
          <Image
            src="/photo1.jpg"
            alt="Snap Pic"
            fill
            priority
            quality={100}
            className="object-cover rounded-full"
          />
        </motion.div>

        {/* ANIMATED CIRCLE */}
        <motion.svg
          className="absolute w-full h-full pointer-events-none"
          fill="transparent"
          viewBox="0 0 586 586"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="293"
            cy="293"
            r="288"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: [
                "15 120 25 25",
                "16 25 92 72",
                "4 258 22 22",
              ],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            whileHover={{
              stroke: "#00ffaa",
              transition: { duration: 0.3 },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}
