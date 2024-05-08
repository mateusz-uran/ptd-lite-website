import { features } from "../../content/featuresContent";
import { AnimationWrapper } from "../animations/AnimationWrapper";
import SingleFeature from "./SingleFeature";
import style from "./features.module.scss";

const Features = () => {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <AnimationWrapper variantType="text" listIndex={0}>
          <div className={style.textWrapper}>
            <h1 className={style.h2}>Dostępne funkcje</h1>
            <p>Główne zadania aplikacji</p>
          </div>
        </AnimationWrapper>
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
