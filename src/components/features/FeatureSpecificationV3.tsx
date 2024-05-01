import EmptyPage from "../../EmptyPage";
import { useParams } from "react-router-dom";
import { featureSpecification } from "../../content/featuresContent";
import style from "./featureSpec.module.scss";
import { AnimationFadeInWrapper } from "../animations/AnimationFadeIn";
import { motion } from "framer-motion";

const FeatureSpecificationV3 = () => {
  const { featureName } = useParams<{ featureName: string }>();

  const selectedFeature = featureSpecification?.find(
    (feature) => feature.id === featureName
  );

  const spanArray = new Array(10).fill(null);

  if (selectedFeature) {
    return (
      <section className={style.section}>
        <div className={style.header}>
          <div className={style.barsWrapper}>
            {spanArray.map((_, index) => (
              <span key={index} className={style.bar}></span>
            ))}
          </div>
          <AnimationFadeInWrapper listIndex={1}>
            <div className={style.hTextWrapper}>
              <p>{selectedFeature.subheader}</p>
              <h3>{selectedFeature.header}</h3>
            </div>
          </AnimationFadeInWrapper>
        </div>
        <div className={`${style.middle} ${style[selectedFeature.id]}`}>
          <div className={style.content}>
            <div className={style.textWrapper}>
              <AnimationFadeInWrapper listIndex={1}>
                <h5>{selectedFeature.text.header}</h5>
                <p>{selectedFeature.text.content}</p>
              </AnimationFadeInWrapper>
            </div>
            <div className={style.video}>
              <button className={style.videoBtn}>
                <motion.span
                  initial={{
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: "transparent",
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.15,
                    borderColor: "#3d7f3a",
                    transition: { duration: 0.5 },
                  }}
                  className={style.border}
                />
              </button>
            </div>
            <></>
          </div>
        </div>
      </section>
    );
  }

  return (
    <EmptyPage
      message="Ups! Niestety, ale nie ma informacji do tej funkcji, wróć proszę na
      poprzednią stronę."
    />
  );
};

export default FeatureSpecificationV3;

<div className={style.cards}>
  <div className={style.cardRow}>1</div>
  <div className={style.cardRow}>2</div>
  <div className={style.cardRow}>3</div>
  <span className={style.void}></span>
</div>;
