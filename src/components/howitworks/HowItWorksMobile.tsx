import style from "./howItWorks.module.scss";
import { useState } from "react";
import { smallSteps } from "../../content/howItWorksContent";
import { motion } from "framer-motion";

const HowItWorksMobile = () => {
  const [selectedIcon, setSelectedIcon] = useState<number>(0);

  return (
    <div className={style.mobileWrapper}>
      <div className={style.iconsRow}>
        {smallSteps.map((step, index) => (
          <step.Icon
            key={index}
            className={`${style.icon} ${
              index === selectedIcon ? style.selected : ""
            }`}
            onClick={() => setSelectedIcon(index)}
          />
        ))}
      </div>
      <div className={style.dotsRow}>
        {smallSteps.map((_, index) => (
          <span
            key={index}
            className={`${style.dot} ${
              index === selectedIcon ? style.selected : ""
            }`}
            onClick={() => setSelectedIcon(index)}
          ></span>
        ))}
      </div>
      <div
        key={smallSteps[selectedIcon].explanation}
        className={style.explanation}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={style.p}
        >
          {smallSteps[selectedIcon].explanation}
        </motion.p>
      </div>
      <div className={style.laptop}>
        <motion.img
          key={smallSteps[selectedIcon].image}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          alt="ptd lite step"
          src={smallSteps[selectedIcon].image}
        />
      </div>
    </div>
  );
};

export default HowItWorksMobile;
