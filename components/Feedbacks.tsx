/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { SectionWrapper } from "@/hoc";

import { InfiniteMovingCards } from "./cards/moving-cards";
import { testimonials } from "@/data";
import Pointer from "./global/pointer/Pointer";
import { TypingTextHeader } from "./global/others/TypingText";
import Boarder from "./global/border/Boarder";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

const Feedbacks = () => {
  return (
    <motion.div initial="hidden" whileInView="show" className="pt-12">
      <div className="mx-auto text-center">
        <Pointer text="What they say" />
        <TypingTextHeader text="Testimonials" />
        <Boarder classes="bg-[#fff]" />
      </div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
        className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Feedbacks, "");
