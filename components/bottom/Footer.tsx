import React from "react";
import SocialIcon from "./SocialIcon";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
// import styles from "./social-icons.module.scss";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  return (
    <div className="mx-auto mt-3">
      <SocialIcon>
        <li title="LinkedIn">
          <Link
            href="https://www.linkedin.com/in/kavuma-herbert-559496111/"
            target="_blank">
            <Linkedin />
          </Link>
        </li>
        <li title="Github">
          <Link href="https://github.com/herberthk" target="_blank">
            <Github />
          </Link>
        </li>
        {/* <li>
          <Link href="#!" className={styles.lin} />
        </li>
        <li>
          <Link href="#!" className={styles.dot} />
        </li> */}
      </SocialIcon>
      <p className="text-white text-center">
        © {currentYear} Herbert . All rights reserved
      </p>
    </div>
  );
};

export default Footer;
