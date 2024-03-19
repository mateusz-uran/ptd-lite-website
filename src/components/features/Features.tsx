import { features } from "../../content/featuresContent";
import style from "./features.module.scss";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <h2 className={style.h2}>Dostępne funkcje </h2>
        <div className={style.cardsWrapper}>
          {features.map((feat, idx) => {
            const { header, text, Icon, darkColor, lightColor, moreInfoLink } =
              feat;
            return (
              <div key={idx} className={style.card}>
                <div
                  className={style.iconWrapper}
                  style={{ backgroundColor: lightColor }}
                >
                  <Icon className={style.icon} style={{ color: darkColor }} />
                </div>
                <h4 className={style.h4}>{header}</h4>
                <p className={style.p}>{text}</p>
                <motion.button
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
                  <a href={moreInfoLink}>Czytaj więcej</a>
                </motion.button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
