import EmptyPage from "../../EmptyPage";
import { Link, useParams } from "react-router-dom";
import { featureSpecification } from "../../content/featuresContent";
import style from "./featureSpec.module.scss";
import { AnimationFadeInWrapper } from "../animations/AnimationFadeIn";
import { motion } from "framer-motion";
import { AnimationWrapper } from "../animations/AnimationWrapper";
import { routes } from "../../routes";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Modal from "../modal/Modal";
import useModal from "../../useModal";

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

  const { isOpen, toggle } = useModal();

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
              <h1>{selectedFeature.header}</h1>
            </div>
          </AnimationFadeInWrapper>
        </div>
        <div className={`${style.middle} ${style[selectedFeature.id]}`}>
          <div className={style.wrapper}>
            <div className={style.textWrapper}>
              <AnimationFadeInWrapper listIndex={1}>
                <h2>{selectedFeature.text.header}</h2>
                <p>{selectedFeature.text.content}</p>
              </AnimationFadeInWrapper>
            </div>
            <AnimationFadeInWrapper listIndex={1}>
              <div
                className={style.video}
                style={{
                  backgroundImage: `url(${selectedFeature.thumbLink})`,
                  backgroundSize: "cover",
                }}
              >
                <button
                  className={style.videoBtn}
                  onClick={toggle}
                  aria-label="play"
                >
                  <motion.span
                    initial={{
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.15,
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
                    <img src={image} alt="feature-spec-image" loading="lazy" />
                  </AnimationWrapper>
                </div>
              ))}
            </div>
            <div className={style.explanation}>
              <AnimationFadeInWrapper listIndex={1}>
                <h3>{selectedFeature.longText.header}</h3>
              </AnimationFadeInWrapper>
              <ul>
                {selectedFeature.longText.parafs.map((text, index) => (
                  <li key={index}>
                    <AnimationWrapper variantType="text" listIndex={index}>
                      <p>{text}</p>
                    </AnimationWrapper>
                  </li>
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
              <img
                src="/images/features/qubes.svg"
                alt="qubes"
                loading="lazy"
              />
            </div>
            <div className={style.link}>
              <Link to={`/funkcje/${link2}`}>
                <FaArrowRight className={style.icon} />
                <p>{link2}</p>
              </Link>
            </div>
          </div>
        </div>
        <Modal
          isOpen={isOpen}
          videoLink={selectedFeature.videoLink}
          toggle={toggle}
        />
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
