import style from "./howItWorksPage.module.scss";
import { howItWorkSteps } from "../../content/howItWorksContent";
import { AnimationWrapper } from "../animations/AnimationWrapper";
import { AnimationFadeInWrapper } from "../animations/AnimationFadeIn";

const HowItWorksPageV2 = () => {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.content}>
          <div className={style.stepWrapper}>
            {howItWorkSteps.stepContent.map((stepText, stepIndex) => (
              <div key={stepIndex} className={style.singleStep}>
                <div className={style.textWrapper}>
                  <div className={style.abstraWrapper}>
                    <AnimationFadeInWrapper listIndex={1}>
                      <img
                        src="/images/howitworks/abstra.svg"
                        alt="abstract-logo"
                        loading="lazy"
                      />
                    </AnimationFadeInWrapper>
                  </div>
                  <AnimationFadeInWrapper listIndex={stepIndex}>
                    <h2>
                      Krok {stepIndex + 1}: {stepText.header}
                    </h2>
                  </AnimationFadeInWrapper>
                  <AnimationFadeInWrapper listIndex={stepIndex}>
                    <p>{stepText.desc}</p>
                  </AnimationFadeInWrapper>
                  <ul>
                    {stepText.explanation.map((stepExt, extIndex) => (
                      <li key={extIndex}>
                        <AnimationWrapper
                          variantType="text"
                          listIndex={extIndex}
                        >
                          <p>{stepExt}</p>
                        </AnimationWrapper>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={style.imagesWrapper}>
                  <AnimationWrapper variantType="images" listIndex={1}>
                    <img src={stepText.image} alt="step-image" loading="lazy" />
                  </AnimationWrapper>
                </div>
              </div>
            ))}
          </div>

          <div className={style.endingSection}>
            <AnimationFadeInWrapper listIndex={1}>
              <h3>{howItWorkSteps.summary.header}</h3>
            </AnimationFadeInWrapper>
            <AnimationFadeInWrapper listIndex={1}>
              <p className={style.paraf}>{howItWorkSteps.summary.paraf}</p>
            </AnimationFadeInWrapper>
            <ul>
              {howItWorkSteps.summary.list.map((el, i) => (
                <li key={i}>
                  <AnimationWrapper variantType="text" listIndex={i}>
                    <div className={style.point}>
                      <img
                        src="/images/howitworks/check.svg"
                        alt="check-icon"
                        loading="lazy"
                      />
                      <p>{el}</p>
                    </div>
                  </AnimationWrapper>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPageV2;
