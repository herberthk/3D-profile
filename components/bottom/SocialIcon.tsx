import { FC, ReactNode } from "react";
import styles from "./social-icons.module.scss";

interface Props {
  children: ReactNode;
}

const SocialIcon: FC<Props> = ({ children }) => (
  <ul className={styles.icons}>{children}</ul>
);

export default SocialIcon;
