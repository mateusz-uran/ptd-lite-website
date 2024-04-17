import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

type PrimaryButtonProps = {
  text: string;
  onClickFunction: (() => void) | null;
  isDisabled: boolean;
};

const PrimaryButton = ({
  text,
  onClickFunction,
  isDisabled,
}: PrimaryButtonProps) => {
  const handleClick = () => {
    if (onClickFunction) {
      onClickFunction();
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{
        boxShadow: "rgba(61, 127, 58, 0.5) 0px 2px 6px",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 16,
      }}
      disabled={isDisabled}
      className="primary-btn"
    >
      <span>{text}</span>
      <IoIosArrowForward className="icon" />
    </motion.button>
  );
};

export default PrimaryButton;
