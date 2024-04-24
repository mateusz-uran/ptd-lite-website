import { useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type AnimationFadeInProps = {
  children: ReactNode;
  listIndex: number;
};

export const AnimationFadeInWrapper = ({
  children,
  listIndex,
}: AnimationFadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const variants = {
    hidden: { opacity: 0 },
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 * index },
    }),
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        custom={listIndex}
      >
        {children}
      </motion.div>
    </div>
  );
};
