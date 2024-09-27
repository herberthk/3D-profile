import { motion } from "framer-motion";
import { useState, useEffect, FC } from "react";
import styles from "./indicator.module.scss";

type Props = {
  color?: string;
};
const LoadingBar: FC<Props> = ({ color = "#FD7272" }) => {
  // const { scrollYProgress } = useScroll();
  const [width, setWidth] = useState(0);
  // const indicator = useRef<HTMLDivElement>(null);
  const showIndicator = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setWidth(scrolled);
    // indicator.current!.style.width = scrolled + "%";
  };

  useEffect(() => window.addEventListener("scroll", showIndicator, false), []);
  // console.log("scroll", scrollYProgress);
  return (
    <div className={styles.indicator}>
      <motion.div
        layout
        style={{
          // scaleX: scrollYProgress,
          width: width + "%",
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default LoadingBar;
