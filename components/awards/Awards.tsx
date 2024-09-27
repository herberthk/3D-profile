import Link from "next/link";
import Image from "next/image";

import styles from "./awards.module.scss";
import classNames from "classnames";
import { useRef } from "react";
import { awards } from "@/data";
import Boarder from "../global/border/Boarder";
import Pointer from "../global/pointer/Pointer";
import { TypingTextHeader } from "../global/others/TypingText";
import { SectionWrapper } from "@/hoc";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

// Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

const Awards = () => {
  // const awardsRef = useRef<HTMLLIElement[]>([]);
  const containerRef = useRef<HTMLUListElement>(null);

  // useEffect(() => {
  //   // Create a GSAP timeline
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: containerRef.current, // Container to track
  //       start: "top 90%", // When the top of the container reaches 80% of the viewport
  //       end: "bottom 10%", // When the bottom of the container reaches 20% of the viewport
  //       toggleActions: "play reset play reset",
  //       //markers: true, // Debug markers (optional)
  //     },
  //   });
  //   // Animate all boxes with staggered timing
  //   tl.from(awardsRef.current, {
  //     scale: 0,
  //     y: -500,
  //     duration: 0.01,
  //     stagger: 0.01, // Animate each box with a delay between
  //     ease: "sine.in",
  //   });
  //   //.to(awardsRef.current, { rotation: 360, duration: 2, opacity: 1 })
  //   tl.to(awardsRef.current, {
  //     y: 0,
  //     duration: 0.5,
  //     stagger: 0.3,
  //     scale: 1,
  //     ease: "sine.in",
  //   });

  //   // Cleanup ScrollTrigger on component unmount
  //   // return () => {
  //   //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   // };
  // }, []);

  // Add each box element to the ref array
  // const addToRefs = (el: HTMLLIElement | null) => {
  //   if (el && !awardsRef.current.includes(el)) {
  //     awardsRef.current.push(el);
  //   }
  // };

  // const container = {
  //   hidden: { opacity: 1, scale: 0 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       delayChildren: 0.3,
  //       staggerChildren: 0.2,
  //     },
  //   },
  // };

  // const item = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //   },
  // };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className="py-8 sm:py-[5rem] border-shadow"
      id="section4">
      <div className="container mx-auto ">
        <div className="mx-auto text-center">
          <Pointer text="Awards" />
          <TypingTextHeader text="Certification and awards" />
          <Boarder classes="bg-[#fff]" />
        </div>
        <ul
          // variants={container}
          // initial="hidden"
          // animate="visible"
          // transition={{
          //   type: "spring",
          //   stiffness: 260,
          //   damping: 20,
          // }}
          className="mt-11 p-6 grid grid-cols-1 gap-9 sm:grid-cols-3"
          ref={containerRef}>
          {awards.map(({ from, title, url, id }, i) => {
            return (
              <motion.li
                whileHover={{ scale: 1.07 }}
                // variants={item}
                variants={
                  i % 2 === 0
                    ? slideIn("left", "tween", 0.2, 1)
                    : slideIn("right", "tween", 0.2, 1)
                }
                className={classNames(
                  "bg-gradient-to-r from-[#30336b] to-[#5352ed] py-4 pl-4 shadow-md transition-all cursor-pointer hover:scale-105",
                  styles.border,
                )}
                key={id}>
                <ul className="flex">
                  <li className="relative mr-7 w-1/4">
                    <Image
                      src="/assets/award.webp"
                      alt="Certificate"
                      width={80}
                      height={80}
                    />
                  </li>
                  <li className="mx-auto w-3/4">
                    <p className="mb-3 px-3 text-lg font-bold text-[#25CCF7]">
                      From: {from}
                    </p>
                    <p className="px-3 text-white">{title}</p>

                    <Link
                      className="px-3 text-sm italic text-white hover:underline"
                      href={url}
                      title={title}
                      target={"_blank"}>
                      View the certificate here
                    </Link>
                  </li>
                </ul>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Awards, "awards");
