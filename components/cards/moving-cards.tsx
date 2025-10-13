"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    photo: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  // Memoize animation settings
  const animationDirection = useMemo(
    () => (direction === "left" ? "forwards" : "reverse"),
    [direction],
  );
  const animationDuration = useMemo(() => {
    switch (speed) {
      case "fast":
        return "20s";
      case "normal":
        return "40s";
      case "slow":
        return "80s";
      default:
        return "40s";
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      // Use DocumentFragment for better performance
      const fragment = document.createDocumentFragment();
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        fragment.appendChild(duplicatedItem);
      });

      scrollerRef.current.appendChild(fragment);

      // Set CSS properties directly
      containerRef.current.style.setProperty(
        "--animation-direction",
        animationDirection,
      );
      containerRef.current.style.setProperty(
        "--animation-duration",
        animationDuration,
      );

      setStart(true);
    }
  }, [animationDirection, animationDuration]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  // Removed getDirection and getSpeed functions as they're now handled in useMemo
  return (
    <div
      ref={containerRef}
      className={cn(
        // max-w-7xl to w-screen
        "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          // change gap-16
          " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}>
        {items.map((item, idx) => (
          <li
            //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              //   background:
              //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            // change to idx cuz we have the same name
            key={idx}>
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
              {/* change text color, text-lg */}
              <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                {/* add this div for the profile img */}
                <div className="me-3 relative w-[50px] h-[50px]">
                  <Image
                    className="rounded-full"
                    fill
                    src={item.photo}
                    alt={`${item.name} profile picture`}
                    sizes="50px" // Add sizes for better performance
                  />
                </div>
                <span className="flex flex-col gap-1">
                  {/* change text color, font-normal to font-bold, text-xl */}
                  <span className="text-xl font-bold leading-[1.6] text-white">
                    {item.name}
                  </span>
                  {/* change text color */}
                  <span className=" text-sm leading-[1.6] text-white-200 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
