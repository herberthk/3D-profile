import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";
import { FC } from "react";

const StarWrapper = (Component: FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="padding w-full md:max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
