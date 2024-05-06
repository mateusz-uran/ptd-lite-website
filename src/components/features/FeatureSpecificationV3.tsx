import EmptyPage from "../../EmptyPage";
import { Link, useParams } from "react-router-dom";
import { featureSpecification } from "../../content/featuresContent";
import style from "./featureSpec.module.scss";
import { AnimationFadeInWrapper } from "../animations/AnimationFadeIn";
import { motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";
import { AnimationWrapper } from "../animations/AnimationWrapper";
import { routes } from "../../routes";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const FeatureSpecificationV3 = () => {
  const { featureName } = useParams<{ featureName: string }>();

  const selectedFeature = featureSpecification?.find(
    (feature) => feature.id === featureName
  );

  const spanArray = new Array(10).fill(null);

  const hrefs: string[] = routes.reduce((acc: string[], route) => {
    if (route.functions) {
      const routeHrefs = route.functions.map((func) => func.href);
      acc.push(...routeHrefs);
    }
    return acc;
  }, []);

  if (selectedFeature) {
    const currentIndex = hrefs.indexOf(selectedFeature.id);

    const previousIndex =
      currentIndex > 0 ? currentIndex - 1 : hrefs.length - 1;
    const nextIndex = currentIndex < hrefs.length - 1 ? currentIndex + 1 : 0;

    const link1 = hrefs[previousIndex];
    const link2 = hrefs[nextIndex];

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
          <div className={style.wrapper}>
            <div className={style.textWrapper}>
              <AnimationFadeInWrapper listIndex={1}>
                <h5>{selectedFeature.text.header}</h5>
                <p>{selectedFeature.text.content}</p>
              </AnimationFadeInWrapper>
            </div>
            <AnimationFadeInWrapper listIndex={1}>
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
            </AnimationFadeInWrapper>
          </div>
          <div className={style.content}>
            <div className={style.images}>
              {selectedFeature.images.map((image, index) => (
                <div key={index} className={style.singleImg}>
                  <AnimationWrapper variantType="images" listIndex={index}>
                    <img src={image} alt="" />
                  </AnimationWrapper>
                </div>
              ))}
            </div>
            <div className={style.explanation}>
              <AnimationFadeInWrapper listIndex={1}>
                <h4>{selectedFeature.longText.header}</h4>
              </AnimationFadeInWrapper>
              <ul>
                {selectedFeature.longText.parafs.map((text, index) => (
                  <Fragment key={index}>
                    <AnimationWrapper variantType="text" listIndex={index}>
                      <li>{text}</li>
                    </AnimationWrapper>
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>
          <div className={style.funcNav}>
            <div className={style.link}>
              <Link to={`/funkcje/${link1}`}>
                <FaArrowLeft className={style.icon} />
                <p>{link1}</p>
              </Link>
            </div>
            <div className={style.logo}>
              <img src="/images/features/qubes.svg" alt="" />
            </div>
            <div className={style.link}>
              <Link to={`/funkcje/${link2}`}>
                <FaArrowRight className={style.icon} />
                <p>{link2}</p>
              </Link>
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

export default FeatureSpecificationV3;

<div className={style.cards}>
  <div className={style.cardRow}>1</div>
  <div className={style.cardRow}>2</div>
  <div className={style.cardRow}>3</div>
  <span className={style.void}></span>
</div>;
