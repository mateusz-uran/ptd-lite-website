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
                      <img src="/images/howitworks/abstra.svg" alt="" />
                    </AnimationFadeInWrapper>
                  </div>
                  <AnimationFadeInWrapper listIndex={stepIndex}>
                    <h4>
                      Krok {stepIndex + 1}: {stepText.header}
                    </h4>
                  </AnimationFadeInWrapper>
                  <AnimationFadeInWrapper listIndex={stepIndex}>
                    <p>{stepText.desc}</p>
                  </AnimationFadeInWrapper>
                  <ul>
                    {stepText.explanation.map((stepExt, extIndex) => (
                      <div key={extIndex}>
                        <AnimationWrapper
                          variantType="text"
                          listIndex={extIndex}
                        >
                          <li>{stepExt}</li>
                        </AnimationWrapper>
                      </div>
                    ))}
                  </ul>
                </div>
                <div className={style.imagesWrapper}>
                  <AnimationWrapper variantType="images" listIndex={1}>
                    <img src={stepText.image} alt="" />
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
                <div key={i}>
                  <AnimationWrapper variantType="text" listIndex={i}>
                    <li>
                      <img src="/images/howitworks/check.svg" alt="" />
                      <p>{el}</p>
                    </li>
                  </AnimationWrapper>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPageV2;
