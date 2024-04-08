import { features } from "../../content/featuresContent";
import SingleFeature from "./SingleFeature";
import style from "./features.module.scss";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, type: "spring" }}
          className={style.h2}
        >
          Dostępne funkcje
        </motion.h2>
        <div className={style.cardsWrapper}>
          {features.map((feat, idx) => {
            const { header, text, Icon, darkColor, lightColor, moreInfoLink } =
              feat;
            return (
              <SingleFeature
                key={idx}
                index={idx}
                header={header}
                text={text}
                Icon={Icon}
                darkColor={darkColor}
                lightColor={lightColor}
                moreInfoLink={moreInfoLink}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
