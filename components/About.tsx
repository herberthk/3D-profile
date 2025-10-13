/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useMemo } from "react";
import { motion } from "motion/react";
import classNames from "classnames";

import { SectionWrapper } from "@/hoc";
import { fadeIn, slideIn, textVariant } from "@/utils/motion";
import { skills } from "@/data";
import MovingBoarders from "./ui/MovingBoarders";
import { aboutMe } from "@/constants/about";
import Image from "next/image";

const About = () => {
  // Memoize animation variants to prevent recalculation
  const textVariants = useMemo(() => textVariant(0.3), []);
  const fadeInVariants = useMemo(() => fadeIn("left", "spring", 0.1, 1), []);
  const slideInVariants = useMemo(() => slideIn("left", "tween", 0.2, 1), []);

  // Use fixed duration instead of random for consistent performance
  const movingBorderDuration = useMemo(() => 15000, []); // 15 seconds

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      id="section1"
      viewport={{ once: true, amount: 0.3 }} // Only animate once
    >
      <motion.div variants={textVariants}>
        <p className="section-sub-text">Introduction</p>
        <h2 className={classNames("section-head-text")}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeInVariants}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        id="about">
        {aboutMe}
      </motion.p>
      <MovingBoarders
        containerClassName="mt-6"
        as="div"
        duration={movingBorderDuration}>
        <motion.div
          variants={slideInVariants}
          className=" flex flex-wrap md:gap-10 gap-[1.3rem] padding">
          {skills.map((skill) => (
            <div
              className="block-container md:w-20 md:h-20 h-12 w-12"
              title={skill.name}
              key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <div className="w-1/2 h-1/2 object-contain relative">
                  <Image
                    src={skill.imageUrl}
                    alt={skill.name}
                    fill
                    sizes="(max-width: 768px) 24px, 40px" // Add sizes for better performance
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </MovingBoarders>
    </motion.div>
  );
};

export default SectionWrapper(About, "about");
