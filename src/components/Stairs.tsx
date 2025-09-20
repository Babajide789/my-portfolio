"use client"

import { motion } from "framer-motion"

// VARIANTS
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"], // ✅ fixed
  },
}

// REVERSE INDEX FOR STAGGERED DELAY
const reverseIndex = (index: number) => {
  const totalSteps = 6
  return totalSteps - index - 1
}

export default function Stairs() {
  return (
    <>
      {/* RENDER 6 MOTION DIVS EACH REP A STEP OF STAIRS */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  )
}
