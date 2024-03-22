import style from "./howItWorks.module.scss";
import { useState } from "react";
import { steps } from "../../content/howItWorksContent";
import { Variants, motion } from "framer-motion";

interface HowItWorksMobileProps {
  variants: Variants;
}

const HowItWorksMobile = ({ variants }: HowItWorksMobileProps) => {
  const [selectedIcon, setSelectedIcon] = useState<number>(0);

  return (
    <div className={style.mobileWrapper}>
      <motion.div variants={variants} className={style.iconsRow}>
        {steps.map((step, index) => (
          <step.Icon
            key={index}
            className={`${style.icon} ${
              index === selectedIcon ? style.selected : ""
            }`}
            onClick={() => setSelectedIcon(index)}
          />
        ))}
      </motion.div>
      <motion.div variants={variants} className={style.dotsRow}>
        {steps.map((_, index) => (
          <span
            key={index}
            className={`${style.dot} ${
              index === selectedIcon ? style.selected : ""
            }`}
            onClick={() => setSelectedIcon(index)}
          ></span>
        ))}
      </motion.div>
      <motion.div
        key={steps[selectedIcon].explanation}
        className={style.explanation}
        variants={variants}
      >
        <p className={style.p}>{steps[selectedIcon].explanation}</p>
      </motion.div>
      <motion.div variants={variants} className={style.laptop}>
        <motion.img
          key={steps[selectedIcon].image}
          src={steps[selectedIcon].image}
          alt=""
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </div>
  );
};

export default HowItWorksMobile;
