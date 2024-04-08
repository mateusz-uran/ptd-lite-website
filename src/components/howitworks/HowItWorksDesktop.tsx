import style from "./howItWorks.module.scss";
import { smallSteps } from "../../content/howItWorksContent";
import { useState } from "react";
import { motion } from "framer-motion";

const HowItWorksDesktop = () => {
  const [selectedIcon, setSelectedIcon] = useState<number>(0);

  return (
    <section className={style.desktopWrapper}>
      <div className={style.stepsWrapper}>
        {smallSteps.map((step, index) => {
          return (
            <div key={index} className={style.singleStep}>
              <step.Icon
                className={`${style.icon} ${
                  index === selectedIcon ? style.selected : ""
                }`}
                onClick={() => setSelectedIcon(index)}
              />
              <div className={style.dotWrapper}>
                <span
                  className={`${style.dot} ${
                    index === selectedIcon ? style.selected : ""
                  }`}
                  onClick={() => setSelectedIcon(index)}
                ></span>
              </div>
              <p
                className={`${style.p} ${
                  index === selectedIcon ? style.selected : ""
                }`}
                onClick={() => setSelectedIcon(index)}
              >
                {step.explanation}
              </p>
            </div>
          );
        })}
      </div>

      <div className={style.laptop}>
        <motion.img
          key={smallSteps[selectedIcon].image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={smallSteps[selectedIcon].image}
          alt="ptd lite step"
        />
      </div>
    </section>
  );
};

export default HowItWorksDesktop;
