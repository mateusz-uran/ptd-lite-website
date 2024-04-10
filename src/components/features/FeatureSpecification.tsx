import style from "./featureSpec.module.scss";
import { featureSpecification } from "../../content/featuresContent";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { AnimationWrapper } from "./AnimationWrapper";

const FeatureSpecification = () => {
  const { featureName } = useParams<{ featureName: string }>();

  return (
    <>
      {featureSpecification?.map((feature) => {
        if (feature.id === featureName) {
          return (
            <section key={feature.id} className={style.section}>
              <img
                className={style.points}
                src="/images/features/cargo/concept-communication-with-pins-map_smaller.jpg"
                alt="points"
              />
              <div className={style.wrapper}>
                <div className={style.content}>
                  <div className={style.textWrapper}>
                    <AnimationWrapper variantType="text" listIndex={1}>
                      <h3>{feature.header}</h3>
                    </AnimationWrapper>
                    {feature.text?.map((paragraph, index) => (
                      <div key={paragraph} className={style.paragraphs}>
                        <AnimationWrapper variantType="text" listIndex={index}>
                          <p>{paragraph}</p>
                        </AnimationWrapper>
                      </div>
                    ))}
                  </div>
                  {feature.imageLinks?.map((image, index) => (
                    <div key={image.link} className={style.imgWrapper}>
                      <AnimationWrapper variantType="images" listIndex={index}>
                        <figure>
                          <img src={image.link} />
                          <figcaption>{image.caption}</figcaption>
                        </figure>
                      </AnimationWrapper>
                    </div>
                  ))}
                  <div className={style.videoWrapper}>
                    <AnimationWrapper variantType="images" listIndex={1}>
                      <>
                        <p>
                          Film poglądowy przedstawiający krok po kroku jak
                          funkcja działa.
                        </p>
                        <div className={style.playerWrapper}>
                          <ReactPlayer
                            className={style.reactPlayer}
                            width="100%"
                            height="100%"
                            url="https://www.youtube.com/watch?v=SlO58lWobYM"
                          />
                        </div>
                      </>
                    </AnimationWrapper>
                  </div>
                  <div className={style.subTextWrapper}>
                    {feature.subtext?.map((sub) => (
                      <div key={sub} className={style.subText}>
                        <AnimationWrapper variantType="text" listIndex={1}>
                          <p className={style.subText}>{sub}</p>
                        </AnimationWrapper>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        }
        return null; //TODO: style returning object if url error appear
      })}
    </>
  );
};

export default FeatureSpecification;
