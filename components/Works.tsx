"use client";
import React from "react";
import { SectionWrapper } from "@/hoc";
import { PinContainer } from "./ui/Pin";
import { projects } from "@/data";
import Pointer from "./global/pointer/Pointer";
import Boarder from "./global/border/Boarder";
import { TypingTextHeader } from "./global/others/TypingText";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

const Works = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      className="border-shadow pt-12"
      id="section3">
      <div className="mx-auto text-center">
        <Pointer text="My work" />
        <TypingTextHeader text="MY RECENT PROJECTS" />
        <Boarder classes="bg-[#fff]" />
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item, i) => (
          <motion.div
            variants={
              i % 2 == 0
                ? slideIn("left", "tween", 0.2, 1)
                : slideIn("right", "tween", 0.2, 1)
            }
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
                  <Image fill src="/assets/bg.png" alt="bgimg" />
                </div>

                <Image
                  src={item.imageUrl}
                  style={{
                    objectFit: item?.imageContain ? "contain" : undefined,
                  }}
                  alt="cover"
                  className="absolute bottom-0 z-10"
                  fill
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
                      <Image fill src={icon} alt="icon5" className="p-2" />
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
