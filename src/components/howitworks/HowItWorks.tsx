import { useState } from "react";
import style from "./howItWorks.module.scss";
import HowItWorksMobile from "./HowItWorksMobile";
import { motion } from "framer-motion";
import HowItWorksDesktop from "./HowItWorksDesktop";

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
        <HowItWorksDesktop />
        <div className={style.ending}>
          <h4 className={style.h4}>
            To wszystko! Proces jest znacznie szybszy niż pisanie ręcznie.
          </h4>
          <div className={style.listsWrapper}>
            <ul className={style.ul}>
              <li className={style.li}>
                Aplikacja przenosi powtarzalne dane przy dodawaniu tras.
              </li>
              <li className={style.li}>
                Automatycznie oblicza przejechane kilometry na podstawie
                przebiegu końcowego i początkowego.
              </li>
              <li className={style.li}>Wszystko można edytować.</li>
            </ul>
            <ul className={style.ul}>
              <li className={style.li}>
                Możliwość tworzenia szablonów do faktur.
              </li>
              <li className={style.li}>Generowanie CMR dla kierowcy.</li>
              <li className={style.li}>I wiele więcej!</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
