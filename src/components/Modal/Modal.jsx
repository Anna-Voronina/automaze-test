"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import { ModalPortal } from "../ModalPortal/ModalPortal";

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      document.body.style.overflow = "auto";
    }
  };

  const handleCloseModal = () => {
    onClose();
    document.body.style.overflow = "auto";
  };

  return (
    <ModalPortal>
      <div
        onClick={handleClickBackdrop}
        className="fixed z-50 top-0 left-0 flex justify-center items-center w-[100vw] h-screen pt-9 px-5 bg-[#020f14bf] backdrop-blur-[25px] overflow-auto"
      >
        <div className="relative flex flex-col gap-y-6 p-4 mx-auto bg-white">
          <button
            type="button"
            aria-label="close modal"
            onClick={handleCloseModal}
          ></button>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
