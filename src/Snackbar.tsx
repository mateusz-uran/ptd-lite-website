import { Dispatch, SetStateAction, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdOutlineError } from "react-icons/md";

type SnackbarProps = {
  isShowing: boolean;
  setIsShowing: Dispatch<SetStateAction<boolean>>;
  messageStatus: boolean;
};

const Snackbar = ({
  isShowing,
  setIsShowing,
  messageStatus,
}: SnackbarProps) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      setIsShowing(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isShowing]);

  let snackBarBody = messageStatus ? (
    <div className="snackbar success">
      <span>
        <FaCheckCircle />
      </span>
      <p>Wiadomość została wysłana.</p>
      <button onClick={() => setIsShowing(false)}>
        <IoMdClose />
      </button>
    </div>
  ) : (
    <div className="snackbar error">
      <span>
        <MdOutlineError />
      </span>
      <p>Wiadomość nie może zostać wysłana.</p>
      <button onClick={() => setIsShowing(false)}>
        <IoMdClose />
      </button>
    </div>
  );

  return createPortal(
    <AnimatePresence>
      {isShowing && (
        <motion.div
          key="snackbar"
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className="snackbarWrapper"
        >
          {snackBarBody}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Snackbar;
