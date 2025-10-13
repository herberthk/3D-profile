/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "motion/react";
import { useMemo } from "react";

import { ComputersCanvas } from "./canvas";
import { slideIn } from "@/utils/motion";

const Hero = () => {
  // Memoize animation variants to prevent recalculation
  const slideInDownVariant = useMemo(
    () => slideIn("down", "tween", 0.2, 1),
    [],
  );
  const slideInRightVariant = useMemo(
    () => slideIn("right", "tween", 0.2, 1),
    [],
  );

  // Optimize infinite animation with reduced frequency
  const scrollIndicatorAnimation = useMemo(
    () => ({
      y: [0, 24, 0],
    }),
    [],
  );

  const scrollIndicatorTransition = useMemo(
    () => ({
      duration: 2, // Increased duration for smoother animation
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
    }),
    [],
  );

  return (
    <motion.section
      className="relative w-full h-screen mx-auto"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // Only animate once for better performance
    >
      <div className="absolute inset-0 top-[120px]  max-w-7xl mx-auto padding-x flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#34bfff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <motion.h1 variants={slideInDownVariant} className="hero-header-text">
            Hi, I'm <span className="text-[#34bfff]">Herbert</span>
          </motion.h1>
          <motion.p
            variants={slideInRightVariant}
            className="hero-sub-text mt-2 !text-white">
            A remote fullstack engineer specialized
            <br className="hidden sm:block" />
            in mobile, web and 3D applications
          </motion.p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={scrollIndicatorAnimation}
              transition={scrollIndicatorTransition}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
