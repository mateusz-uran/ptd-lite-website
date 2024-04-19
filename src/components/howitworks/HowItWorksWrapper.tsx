import style from "./howItWorks.module.scss";
import { howItWorkSteps } from "../../content/howItWorksContent";
import { AnimationWrapper } from "../animations/AnimationWrapper";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { Link } from "react-router-dom";

const HowItWorksWrapper = () => {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <div className={style.headWrapper}>
          <AnimationWrapper variantType="text" listIndex={1}>
            <>
              <h2>Jak to działa</h2>
              <p>Przykład dodawania i generowania karty drogowej.</p>
            </>
          </AnimationWrapper>
        </div>

        <div className={style.contentWrapper}>
          <div className={style.steps}>
            {howItWorkSteps.text.map((step, index) => (
              <AnimationWrapper
                variantType="text"
                listIndex={index}
                key={index}
              >
                <div className={style.singleStep}>
                  <span className={style.number}>{index + 1}</span>
                  <div className={style.textWrapper}>
                    <h4>{step.header}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
          <div className={style.imgWrapper}>
            {howItWorkSteps.images.map((imgSrc, index) => (
              /** TODO: create gif instead of images **/
              <AnimationWrapper
                variantType="images"
                listIndex={index}
                key={index}
              >
                <img src={imgSrc} />
              </AnimationWrapper>
            ))}
          </div>
        </div>
        <div className={style.btnWrapper}>
          <AnimationWrapper variantType="text" listIndex={1}>
            <SecondaryButton task={null}>
              <Link to={"/instrukcje"}>Czytaj więcej</Link>
            </SecondaryButton>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksWrapper;
