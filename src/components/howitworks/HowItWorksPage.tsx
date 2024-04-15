import { AnimationWrapper } from "../animations/AnimationWrapper";
import style from "./howItWorksPage.module.scss";
import { howItWorkSteps } from "../../content/howItWorksContent";

const HowItWorksPage = () => {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.content}>
          {howItWorkSteps.text.map((step, index) => (
            <div className={style.cardWrapper}>
              <div className={style.step}>
                <AnimationWrapper variantType="text" listIndex={1}>
                  <div className={style.textWrapper}>
                    <span className={style.number}>{index + 1}</span>
                    <h3>{step.header}</h3>
                    <p>{step.desc}</p>
                  </div>
                </AnimationWrapper>
              </div>
              <div className={style.stepExtensionWrapper}>
                {step.extension.map((ext, index) => (
                  <AnimationWrapper variantType="images" listIndex={index}>
                    <div className={style.stepExtension}>
                      <p>{ext.expl}</p>
                      <img src={ext.gif} alt="" />
                    </div>
                  </AnimationWrapper>
                ))}
              </div>
            </div>
          ))}

          <AnimationWrapper variantType="text" listIndex={1}>
            <div className={style.summary}>
              <h4>
                {howItWorkSteps.summary.header}
                To wszystko, proces tworzenia karty drogowej z PTD Lite jest
                znacznie szybszy.
              </h4>
              {howItWorkSteps.summary.list.map((el, index) => (
                <ul key={index}>
                  <li>{el}</li>
                </ul>
              ))}
              <p>{howItWorkSteps.summary.paraf1}</p>
              <p>{howItWorkSteps.summary.paraf2}</p>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPage;
