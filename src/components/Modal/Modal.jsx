import { createPortal } from "react-dom";
import { useEffect } from "react";

import * as s from "./Modal.styled";

const ModalRoot = document.getElementById("modal-root");

export default function Modal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <>
      <s.ModalBack onClick={handleBackdropClick}>
        <s.ModalCont>
          <s.CloseButton onClick={onClose}>
            <s.IconBtn />
          </s.CloseButton>
          <h1>Наши проэкты</h1>
          <p>И чего мы только не делали</p>
        </s.ModalCont>
      </s.ModalBack>
    </>,
    ModalRoot
  );
}
