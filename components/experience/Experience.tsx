import TimeLine from "./TimeLine";
import Year from "./Year";
import styles from "./experience.module.scss";
import { motion } from "framer-motion";
import { experience } from "@/constants";
import Pointer from "../global/pointer/Pointer";
import Boarder from "../global/border/Boarder";
import { TypingTextHeader } from "../global/others/TypingText";
import { SectionWrapper } from "@/hoc";

const Experience = () => {
  return (
    <motion.div
      id="section2"
      // variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: false, amount: 0.17 }}
      className="container mx-auto py-[2rem] sm:py-[5rem]">
      <div className="mx-auto text-center">
        <Pointer text="EXPERIENCE" />
        <TypingTextHeader text="MY Experience" />
        <Boarder classes="bg-[#8c8989]" />
      </div>
      <div className="mt-[1rem] sm:mt-[3rem]">
        {experience.map(
          ({ role, company, year, projects, techStack, contributions }, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-2">
              <Year
                year={year}
                bgColor={(i + 1) % 2 === 0 ? styles.orange : styles.blue}
                index={i}
              />
              <TimeLine
                company={company}
                iconBg={(i + 1) % 2 === 0 ? styles.red : styles.blue}
                role={role}
                index={i}
                projects={projects}
                techStack={techStack}
                contributions={contributions}
              />
            </div>
          ),
        )}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Experience, "work");
// export default Experience;
