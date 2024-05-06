import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import ReactPlayer from "react-player/youtube";

type ModalProps = {
  isOpen: boolean;
  videoLink: string;
  toggle: () => void;
};

const Modal = ({ isOpen, videoLink, toggle }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-top">
          <button onClick={toggle} className="secondary-btn">
            Zamknij
          </button>
        </div>
        <div className="content">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              width="100%"
              height="100%"
              url={videoLink}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
