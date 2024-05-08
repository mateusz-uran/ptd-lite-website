import { motion } from "framer-motion";
import { ReactNode } from "react";
type SecondaryButtonProps = {
  children: ReactNode;
  task: (() => void) | null;
};

export const SecondaryButton = ({ children, task }: SecondaryButtonProps) => {
  const handleClick = () => {
    if (task) {
      task();
    }
  };

  return (
    <motion.button
      whileHover={{
        boxShadow: "rgba(48, 55, 58, 0.5) 0px 2px 4px",
      }}
      whileTap={{ scale: 1.03 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      className="secondary-btn"
      onClick={handleClick}
      type="button"
      aria-label="Submit"
    >
      {children}
    </motion.button>
  );
};
