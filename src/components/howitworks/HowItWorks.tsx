import { useState } from "react";
import style from "./howItWorks.module.scss";
import HowItWorksMobile from "./HowItWorksMobile";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const handleAnimationStart = () => {
    if (!animationTriggered) {
      setAnimationTriggered(true);
    }
  };

  return (
    <section className={style.section}>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={animationTriggered ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        onViewportEnter={handleAnimationStart}
        className={style.wrapper}
      >
        <h2 className={style.h2}>Jak to działa?</h2>
        <HowItWorksMobile />
      </motion.div>
    </section>
  );
};

export default HowItWorks;
