import classNames from "classnames";
import { motion } from "framer-motion";
import { FC } from "react";
import styles from "./experience.module.scss";
import { slideIn } from "@/utils/motion";

export interface YearProps {
  year: string;
  bgColor: string;
  index: number;
}

const Year: FC<YearProps> = ({ bgColor, year, index }) => {
  return (
    <motion.div
      variants={slideIn(
        `${index % 2 === 0 ? "up" : "down"}`,
        "spring",
        index * 0.5,
        0.75,
      )}
      className={classNames(
        "left-1 mx-auto sm:left-[-33px]",
        styles.year,
        // bgColor,
      )}>
      {year}
    </motion.div>
  );
};

export default Year;
