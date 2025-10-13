"use client";
import React, { useMemo } from "react";
import { SectionWrapper } from "@/hoc";
import { PinContainer } from "./ui/Pin";
import { projects } from "@/data";
import Pointer from "./global/pointer/Pointer";
import Boarder from "./global/border/Boarder";
import { TypingTextHeader } from "./global/others/TypingText";
import { motion } from "motion/react";
import { slideIn } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

const Works = () => {
  // Memoize animation variants to prevent recalculation
  const slideInLeftVariant = useMemo(
    () => slideIn("left", "tween", 0.2, 1),
    [],
  );
  const slideInRightVariant = useMemo(
    () => slideIn("right", "tween", 0.2, 1),
    [],
  );

  // Create a function to get the appropriate variant based on index
  const getSlideVariant = useMemo(() => {
    return (index: number) => {
      // Even index (0, 2, 4...) slides from left
      // Odd index (1, 3, 5...) slides from right
      return index % 2 === 0 ? slideInLeftVariant : slideInRightVariant;
    };
  }, [slideInLeftVariant, slideInRightVariant]);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className="border-shadow pt-12"
      id="section3"
      viewport={{ once: true, amount: 0.3 }} // Only animate once
    >
      <div className="mx-auto text-center">
        <Pointer text="My work" />
        <TypingTextHeader text="MY RECENT PROJECTS" />
        <Boarder classes="bg-[#fff]" />
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            // animate={{ x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: "easeInOut",
              type: "spring",
              bounce: 0.5,
              // scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={i}>
            <PinContainer
              title={
                item.title.length > 8 ? item.title.substring(0, 8) : item.title
              }
              href="">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}>
                  <Image
                    fill
                    src="/assets/bg.png"
                    alt="bgimg"
                    sizes="(max-width: 640px) 80vw, 384px" // Add sizes for better performance
                  />
                </div>

                <Image
                  src={item.imageUrl}
                  style={{
                    objectFit: item?.imageContain ? "contain" : undefined,
                  }}
                  alt="cover"
                  className="absolute bottom-0 z-10"
                  fill
                  sizes="(max-width: 640px) 80vw, 384px" // Add sizes for better performance
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}>
                {item.desc}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconList.map((icon: string, index: number) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center relative"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}>
                      <Image
                        fill
                        src={icon}
                        alt={`Technology icon ${index + 1}`}
                        className="p-2"
                        sizes="(max-width: 1024px) 32px, 40px" // Add sizes for better performance
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <Link
                    target="_blank"
                    href={item?.url! ?? item?.githubUrl!}
                    className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Go to it
                  </Link>
                </div>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Works, "");
