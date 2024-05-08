import { content } from "../../content/heroContent";
import PrimaryButton from "../buttons/PrimaryButton";
import dashboard from "/images/dashboard_framed.png";
import style from "./hero.module.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const goToGetStarted = (): void => {
    navigate("/start");
  };

  return (
    <section className={style.section}>
      {
        <div className={style.wrapper}>
          <motion.div className={`${style.side} ${style.textSide}`}>
            <motion.h2
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className={style.h2}
            >
              {content.header}
            </motion.h2>
            <motion.p
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.1, type: "spring" }}
              className={style.p}
            >
              {content.paragraph}
            </motion.p>
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              className={style.btnWrapper}
            >
              <PrimaryButton
                text={"START"}
                onClickFunction={goToGetStarted}
                isDisabled={false}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className={`${style.side} ${style.imgSide}`}
          >
            <div className={style.imgWrapper}>
              <img src={dashboard} alt="PTD Lite Dashboard" loading="lazy" />
            </div>
          </motion.div>
        </div>
      }
    </section>
  );
};

export default Hero;
