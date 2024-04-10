import { createPortal } from "react-dom";
import style from "./modal.module.scss";
import { useEffect } from "react";

type VideoModalProps = {
  isShowing: boolean;
  onCloseButtonClick: () => void;
};

const VideoModal = ({ isShowing, onCloseButtonClick }: VideoModalProps) => {
  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShowing]);

  if (!isShowing) {
    return null;
  }

  return createPortal(
    <div className={style.modalWrapper}>
      <div className={style.modal}>
        <div className={style.body}>
          Click on the close button to close the modal.
        </div>
        <div className={style.footer}>
          <button onClick={onCloseButtonClick}>Close Modal</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default VideoModal;
