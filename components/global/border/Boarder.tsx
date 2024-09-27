import classNames from "classnames";
import { FC } from "react";
import styles from "./border.module.scss";
interface Props {
  classes?: string;
  color?: string;
}
// w-[35%] sm:w-[18%]
const Boarder: FC<Props> = ({ classes = "bg-white", color = "#34bfff" }) => (
  <span
    className={classNames(
      "w-[35%]",
      `after:bg-[#34bfff]`,
      styles.border,
      classes,
    )}
  />
);

export default Boarder;
