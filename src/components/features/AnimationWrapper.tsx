import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type AnimationWrapperProps = {
  children: JSX.Element;
  variantType: string;
  listIndex: number;
};

export const AnimationWrapper = ({
  children,
  variantType,
  listIndex,
}: AnimationWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const variantsTypes = {
    text: {
      hidden: { opacity: 0, y: 100 },
      show: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: 0.3 * index },
      }),
    },
    images: {
      hidden: { opacity: 0, x: 100 },
      show: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, delay: 0.3 * index },
      }),
    },
  };

  const selectedVariant =
    variantsTypes[variantType as keyof typeof variantsTypes];

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.div
        variants={selectedVariant}
        initial="hidden"
        animate={mainControls}
        custom={listIndex}
      >
        {children}
      </motion.div>
    </div>
  );
};
