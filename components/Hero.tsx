/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";
import { slideIn } from "@/utils/motion";

const Hero = () => {
  return (
    <motion.section
      className="relative w-full h-screen mx-auto"
      initial="hidden"
      whileInView="show">
      <div className="absolute inset-0 top-[120px]  max-w-7xl mx-auto padding-x flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#34bfff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <motion.h1
            variants={slideIn("down", "tween", 0.2, 1)}
            className="hero-header-text">
            Hi, I'm <span className="text-[#34bfff]">Herbert</span>
          </motion.h1>
          <motion.p
            variants={slideIn("right", "tween", 0.2, 1)}
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
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
