import style from "./features.module.scss";
import { features } from "../../content/featuresContent";
import { motion } from "framer-motion";
import ExtendedSingleFeature from "./ExtendedSingleFeature";

const FeaturesPage = () => {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, type: "spring" }}
          className={style.h2}
        >
          Dostępne główne funkcje aplikacji
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.7, type: "spring" }}
          className={style.featureParagraph}
        >
          <p>
            PTD potrafi wiele więcej, ale tutaj znalazły się główne funkcje,
            które definiują działanie aplikacji.
          </p>
          <p>
            Każda sekcja posiada rozszerzenie, które wyjaśnia daną funkcję oraz
            odnośnik do krótkiego filmu poglądowego.
          </p>
        </motion.div>
        <div className={style.cardsWrapper}>
          {features.map((feat, idx) => {
            const { header, text, moreInfoLink, featureImage } = feat;
            return (
              <ExtendedSingleFeature
                key={idx}
                index={idx}
                header={header}
                text={text}
                moreInfoLink={moreInfoLink}
                featureImage={featureImage}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
