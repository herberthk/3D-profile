"use client";
import React, { ButtonHTMLAttributes, forwardRef, useCallback } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { ForwardReferenceComponent } from "@/types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius?: string;
  children: React.ReactNode;
  //   as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}

const MovingBoarders = forwardRef(function MovingBoarders(
  {
    borderRadius = "1.75rem",
    children,
    containerClassName,
    borderClassName,
    duration,
    className,
    as: Component = "button",
    ...rest
  },
  ref,
) {
  return (
    <Component
      //@ts-ignore
      ref={ref}
      className={cn(
        // remove h-16 w-40, add  md:col-span-2
        "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...rest}>
      <div
        className="absolute inset-0 rounded-[1.75rem]"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}>
        {children}
      </div>
    </Component>
  );
}) as ForwardReferenceComponent<"button", ButtonProps>;

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);
  const lastUpdateTime = useRef<number>(0);

  // Optimize animation frame by throttling updates
  const updateProgress = useCallback(
    (time: number) => {
      // Throttle to ~60fps for better performance
      if (time - lastUpdateTime.current < 16) return;

      const length = pathRef.current?.getTotalLength();
      if (length) {
        const pxPerMillisecond = length / duration;
        progress.set((time * pxPerMillisecond) % length);
        lastUpdateTime.current = time;
      }
    },
    [duration, progress],
  );

  useAnimationFrame(updateProgress);

  // Memoize transform functions to reduce calculations
  const getPointX = useCallback((val: number) => {
    return pathRef.current?.getPointAtLength(val).x || 0;
  }, []);

  const getPointY = useCallback((val: number) => {
    return pathRef.current?.getPointAtLength(val).y || 0;
  }, []);

  const x = useTransform(progress, getPointX);
  const y = useTransform(progress, getPointY);

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}>
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}>
        {children}
      </motion.div>
    </>
  );
};

export default MovingBoarders;
