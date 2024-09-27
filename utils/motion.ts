type Direction = "left" | "right" | "up" | "down";
type AnimationType = "linear" | "spring" | "ease" | "tween";
export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: Direction,
  type: AnimationType,
  delay: number = 0.1,
  duration: number = 1,
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// export const zoomIn = (delay, duration) => {
//   return {
//     hidden: {
//       scale: 0,
//       opacity: 0,
//     },
//     show: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "tween",
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };

// export const slideIn = (direction, type, delay, duration) => {
//   return {
//     hidden: {
//       x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
//       y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
//     },
//     show: {
//       x: 0,
//       y: 0,
//       transition: {
//         type: type,
//         delay: delay,
//         duration: duration,
//         ease: "easeOut",
//       },
//     },
//   };
// };

export const staggerContainer = (
  // staggerChildren: React.ReactNode,
  delayChildren: number = 0.1,
) => {
  return {
    hidden: {},
    show: {
      transition: {
        // staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      // delay: 1,
    },
  },
};

export const slideIn = (
  direction: Direction,
  type: AnimationType,
  delay: number,
  duration: number,
) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "200%" : 0,
    y: direction === "up" ? "200%" : direction === "down" ? "200%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

// export const staggerContainer = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       // staggerChildren: staggerChildren,
//       delayChildren: 0.5,
//     },
//   },
// };

// export const textVariant = (delay: number) => ({
//   hidden: {
//     y: 50,
//     opacity: 0,
//   },
//   show: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       duration: 1.25,
//       delay,
//     },
//   },
// });

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = (duration = 0) => ({
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      stiffness: 80,
      duration,
      // delay: 1,
    },
  },
});

// export const fadeIn = (
//   direction: Direction,
//   type: AnimationType,
//   delay: number,
//   duration: number,
// ) => ({
//   hidden: {
//     x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
//     y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//     opacity: 0,
//   },
//   show: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       type,
//       delay,
//       duration,
//       ease: "easeOut",
//     },
//   },
// });

export const planetVariants = (direction: Direction) => ({
  hidden: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.5,
    },
  },
});

export const zoomIn = (delay: number, duration: number) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};
