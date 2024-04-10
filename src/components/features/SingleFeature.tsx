import { motion, useAnimation, useInView } from "framer-motion";
import style from "./features.module.scss";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../buttons/SecondaryButton";

type SingleFeatureProps = {
  index: number;
  header: string;
  text: string;
  Icon: any;
  darkColor: string;
  lightColor: string;
  moreInfoLink: string;
};

const SingleFeature = ({
  index,
  header,
  text,
  Icon,
  darkColor,
  lightColor,
  moreInfoLink,
}: SingleFeatureProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -200px 0px" });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.5, type: "spring", delay: index * 0.1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      ref={ref}
      className={style.card}
    >
      <div
        className={style.iconWrapper}
        style={{ backgroundColor: lightColor }}
      >
        <Icon className={style.icon} style={{ color: darkColor }} />
      </div>
      <h4 className={style.h4}>{header}</h4>
      <p className={style.p}>{text}</p>
      <SecondaryButton task={null}>
        <Link to={`/funkcje/${moreInfoLink}`}>Czytaj więcej</Link>
      </SecondaryButton>
      {/* <motion.button
        whileHover={{
          boxShadow: "rgba(48, 55, 58, 0.5) 0px 2px 4px",
        }}
        whileTap={{ scale: 1.03 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
        className={style.button}
      >
        <Link to={`/funkcje/${moreInfoLink}`}>Czytaj więcej</Link>
      </motion.button> */}
    </motion.div>
  );
};

export default SingleFeature;
