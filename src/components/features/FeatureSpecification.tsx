import style from "./featureSpec.module.scss";
import { featureSpecification } from "../../content/featuresContent";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { AnimationWrapper } from "../animations/AnimationWrapper";
import EmptyFeature from "./empty/EmptyFeature";
import EmptyPage from "../../EmptyPage";

const FeatureSpecification = () => {
  const { featureName } = useParams<{ featureName: string }>();

  const selectedFeature = featureSpecification?.find(
    (feature) => feature.id === featureName
  );

  if (selectedFeature) {
    return (
      <section key={selectedFeature.id} className={style.section}>
        <img className={style.points} src={selectedFeature.baner} alt="" />
        <div className={style.wrapper}>
          <div className={style.content}>
            <div className={style.textWrapper}>
              <AnimationWrapper variantType="text" listIndex={1}>
                <h3>{selectedFeature.header}</h3>
              </AnimationWrapper>
              {selectedFeature.text?.map((paragraph, index) => (
                <div key={paragraph} className={style.paragraphs}>
                  <AnimationWrapper variantType="text" listIndex={index}>
                    <p>{paragraph}</p>
                  </AnimationWrapper>
                </div>
              ))}
            </div>
            {selectedFeature.imageLinks?.map((image, index) => (
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
                    Film poglądowy przedstawiający krok po kroku jak funkcja
                    działa.
                  </p>
                  <div className={style.playerWrapper}>
                    <ReactPlayer
                      className={style.reactPlayer}
                      width="100%"
                      height="100%"
                      url={selectedFeature.videoLink}
                    />
                  </div>
                </>
              </AnimationWrapper>
            </div>
            <div className={style.subTextWrapper}>
              {selectedFeature.subtext?.map((sub) => (
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
  return (
    <EmptyPage
      message="Ups! Niestety, ale nie ma informacji do tej funkcji, wróć proszę na
  poprzednią stronę."
    />
  );
};

export default FeatureSpecification;
