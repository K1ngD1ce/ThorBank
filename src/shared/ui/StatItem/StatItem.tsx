import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import cls from "./statItem.module.scss";
import DividerDash from "@/shared/ui/DividerDash/DividerDash";

interface StatItemProps {
  percent: number;
  text: string;
  showDivider: boolean;
}

export function StatItem({ percent, text, showDivider }: StatItemProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({ count: percent });
    }
  }, [inView, controls, percent]);

  return (
    <>
      <li className={cls.list} ref={ref}>
        <motion.span
          className={cls.percent}
          initial={{ count: 0 }}
          animate={controls}
          transition={{ duration: 1.2 }}
          onUpdate={(latest: any) => {
            setDisplayValue(Math.round(latest.count));
          }}
        >
          {displayValue}%
        </motion.span>
        <span className={`text`}>{text}</span>
      </li>
      {showDivider && <DividerDash />}
    </>
  );
}
