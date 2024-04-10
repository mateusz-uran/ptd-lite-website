import { useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

export const AnimationWrapper = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          show: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
