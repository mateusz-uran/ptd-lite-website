import React from "react";
import style from "./howItWorksPage.module.scss";
import { howItWorkSteps } from "../../content/howItWorksContent";
import { AnimationWrapper } from "../animations/AnimationWrapper";
import { AnimationFadeInWrapper } from "../animations/AnimationFadeIn";
import { FaRegCircleCheck } from "react-icons/fa6";

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
            <h3>{howItWorkSteps.summary.header}</h3>
            <p className={style.paraf}>{howItWorkSteps.summary.paraf}</p>
            <ul>
              {howItWorkSteps.summary.list.map((el, i) => (
                <div key={i}>
                  <li>
                    <img src="/images/howitworks/check.svg" alt="" />
                    <p>{el}</p>
                  </li>
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
