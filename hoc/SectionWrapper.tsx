import { motion } from "motion/react";
import { staggerContainer } from "@/utils/motion";
import { FC, useMemo } from "react";
import React from "react";

const StarWrapper = (Component: FC, idName: string) => {
  // Memoize the HOC component for better performance
  const HOC = React.memo(function HOC() {
    // Memoize the stagger container variant
    const staggerVariant = useMemo(() => staggerContainer(), []);

    return (
      <motion.section
        variants={staggerVariant}
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
  });

  // Set display name for better debugging
  HOC.displayName = `StarWrapper(${Component.displayName || Component.name || "Component"})`;

  return HOC;
};

export default StarWrapper;
