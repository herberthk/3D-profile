import classNames from "classnames";
import { motion } from "framer-motion";
import { FC } from "react";
import styles from "./experience.module.scss";
import { fadeIn, slideIn } from "@/utils/motion";
import { WorkedOn } from "@/constants";
import Image from "next/image";
import { BriefcaseBusiness } from "lucide-react";

export interface TimeLineProps {
  company: string;
  role: string;
  iconBg: string;
  index: number;
  techStack: string[];
  projects?: WorkedOn[];
  contributions: string[];
}

const TimeLine: FC<TimeLineProps> = ({
  role,
  iconBg,
  company,
  index,
  techStack,
  contributions,
}) => {
  return (
    <motion.section
      className={styles.timeline}
      variants={slideIn(
        `${index % 2 === 0 ? "left" : "right"}`,
        "spring",
        index * 0.5,
        0.75,
      )}>
      <div className={styles.content}>
        <motion.div
          variants={fadeIn("left", "spring", index * 0.5, 0.75)}
          className={classNames("hover_me", iconBg, styles.badge)}>
          <BriefcaseBusiness />
          {/* <i className="fas fa-briefcase" /> */}
        </motion.div>
        <div
          className={classNames(
            styles.panel,
            styles.shadow,
            // "shadow-emerald-50 shadow-inner",
            // "bg-diagonal-gradient",
            // "bg-gradient-to-t from-[#30336b] to-[#5352ed]",
          )}>
          <h4 className={styles.role}>{role}</h4>
          <p className={styles.company}>{company}</p>
          <ul className="list-disc ml-5 mt-5 space-y-2">
            {contributions.map((e, i) => (
              <li
                className="text-white-100 text-[14px] pl-1 tracking-wider"
                key={i}>
                {e}
              </li>
            ))}
          </ul>
          <div className={styles.role}>
            <p>
              {/* {company} */}
              {/* Some of the projects I contributed to include the
              following */}
            </p>
            {/* <p className="break-all leading-normal">
              {projects?.map(({ project, url }, i) => (
                <Link
                  className={classNames(
                    "text-[1rem] text-[#00a78e] hover:underline",
                    {
                      "ml-2": i !== 0,
                    },
                  )}
                  key={i}
                  href={url}>
                  {project}
                </Link>
              ))}
            </p> */}

            <div className="flex flex-wrap space-y-1">
              {techStack.map((t, i) => (
                <div
                  key={i}
                  title={t.split("/").pop()?.split(".").shift()}
                  className={classNames(
                    "w-7 h-7 rounded-full shadow-emerald-50 shadow-inner flex justify-center cursor-pointer transition-all hover:scale-125 hover:z-50",
                    i > 0 && `-ml-[6px] z-[${i + 2}]`,
                  )}>
                  <Image alt={t} src={t} width={16} height={16} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TimeLine;
