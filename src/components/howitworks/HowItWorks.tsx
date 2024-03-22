import { useEffect, useRef } from "react";
import style from "./howItWorks.module.scss";
import HowItWorksMobile from "./HowItWorksMobile";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  const variants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.2 },
    },
    hidden: { opacity: 0, y: 100 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className={style.section}>
      <motion.div
        className={style.wrapper}
        ref={ref}
        variants={variants}
        animate={controls}
        initial="hidden"
      >
        <motion.h2 variants={variants} className={style.h2}>
          Jak to działa?
        </motion.h2>
        <HowItWorksMobile variants={variants} />
      </motion.div>
    </section>
  );
};

export default HowItWorks;
