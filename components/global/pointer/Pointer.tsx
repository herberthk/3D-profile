import classNames from "classnames";
import { FC } from "react";

import styles from "./pointer.module.scss";

export interface PointerProps {
  text: string;
  otherClasses?: string;
  color?: string;
}

const Pointer: FC<PointerProps> = ({
  text,
  otherClasses,
  color = "#ffa500",
}) => {
  return (
    <p
      className={classNames(
        `before:border-t-[rgba(52,191,255,0.5)]`,
        styles.pointer,
        otherClasses,
      )}>
      {text}
    </p>
  );
};

export default Pointer;
