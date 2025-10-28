"use client"
import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const HeroImage = () => {
  const { scrollYProgress } = useScroll()

  const rotateX = useTransform(scrollYProgress, [0, 1], [10, 0])
  const translateZ = useTransform(scrollYProgress, [0, 1], [50, 0])

  return (
    <motion.section
      id="hero-img"
      className="w-full perspective-[1000px]   object-contain relative rounded-2xl flex justify-center"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.img
        src="/hero.png"
        alt="product screenshot"
        className="hero-image w-full h-full rounded-2xl border  border-t-3 mix-blend-screen border-primary   object-cover "
        style={{
          rotateX,
          z: translateZ,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
        }}
      />
              {/* <div className="absolute w-full -z-50 blur-3xl h-1/2 opacity-15   top-0 left-0 bg-primary rounded-full"></div> */}

    </motion.section>
  )
}

export default HeroImage
