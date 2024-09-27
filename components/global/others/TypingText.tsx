import classNames from "classnames";
import { FC } from "react";
import { motion } from "framer-motion";
// import { textContainer, textVariant2 } from "../util/motion";
import { textContainer, textVariant2 } from "@/utils/motion";
// import { TypeAnimation } from "react-type-animation";

interface Props {
  text: string;
  color?: string;
  classes?: string;
  fontSize?: string;
}
export const TypingTextHeader: FC<Props> = ({
  color = "text-white",
  text,
  classes = " mt-[1rem]",
  fontSize = "sm:text-2xl text-[1rem]",
}) => {
  return (
    <motion.h1
      variants={textContainer}
      className={classNames(
        "mt-3 font-extrabold uppercase tracking-[0.08rem] sm:tracking-[0.4rem]",
        color,
        classes,
        fontSize,
      )}>
      {/* <TypeAnimation
        sequence={[text, 1000]}
        //speed={75} // Custom Speed from 1-99 - Default Speed: 40
        wrapper="span" // Animation will be rendered as a <span>
      /> */}
      {Array.from(text).map((letter, index) => (
        <motion.span variants={textVariant2()} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export const TypingText: FC<Props> = ({
  color = "text-white",
  text,
  classes = "text-3xl",
}) => {
  return (
    <motion.p
      variants={textContainer}
      className={classNames("pb-4 text-xl leading-9", color, classes)}>
      {Array.from(text).map((letter, index) => (
        <motion.span variants={textVariant2(0.5)} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};
