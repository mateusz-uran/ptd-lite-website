import style from "./featureSpec.module.scss";
import { featureSpecification } from "../../content/featuresContent";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ReactPlayer from "react-player/youtube";

const FeatureSpecification = () => {
  const { featureName } = useParams<{ featureName: string }>();

  const content = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const text = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const images = {
    hidden: { opacity: 0, y: -200 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {featureSpecification?.map((feature) => {
        if (feature.id === featureName) {
          return (
            <section key={feature.id} className={style.section}>
              <div className={style.wrapper}>
                <motion.div
                  initial="hidden"
                  variants={content}
                  animate="show"
                  className={style.content}
                >
                  <div className={style.textWrapper}>
                    <img
                      className={style.points}
                      src="/images/features/cargo/concept-communication-with-pins-map.jpg"
                      alt="points"
                    />
                    <motion.h3 variants={text}>{feature.header}</motion.h3>
                    {feature.text?.map((paragraph) => (
                      <motion.div
                        key={paragraph}
                        className={style.paragraphs}
                        variants={text}
                      >
                        <p>{paragraph}</p>
                      </motion.div>
                    ))}
                  </div>
                  {feature.imageLinks?.map((image) => (
                    <motion.div
                      key={image.link}
                      className={style.imgWrapper}
                      variants={images}
                    >
                      <figure>
                        <img src={image.link} />
                        <figcaption>{image.caption}</figcaption>
                      </figure>
                    </motion.div>
                  ))}
                  <motion.div className={style.videoWrapper} variants={text}>
                    <p>
                      Film poglądowy przedstawiający krok po kroku jak funkcja
                      działa.
                    </p>
                    <ReactPlayer
                      className={style.reactPlayer}
                      width="100%"
                      height="100%"
                      url="https://www.youtube.com/watch?v=SlO58lWobYM"
                    />
                  </motion.div>
                  <motion.div className={style.subTextWrapper} variants={text}>
                    {feature.subtext?.map((sub) => (
                      <div key={sub} className={style.subText}>
                        <p className={style.subText}>{sub}</p>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </section>
          );
        }
        return null; //todo: style returning object if url error appear
      })}
    </>
  );
};

export default FeatureSpecification;
