import { createPortal } from "react-dom";
import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import { close } from "../../redux/slice";

import * as s from "./Modal.styled";

const ModalRoot = document.getElementById("modal-root");

export default function Modal({ callback, formData: [] }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        dispatch(close());
      }
    };
    const keyDown = (e) => {
      if (e.keyCode === 13) {
        // console.log("najali enter");
        onSubmitForm(e);
      }
    };
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keydown", keyDown);
    };
  });
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      dispatch(close());
    }
  };
  const onCh = (e) => {
    console.log("bbbbbbbbbbbbbbbbb");
  };

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
    },
    // [name, telephone, comment, email]
    []
  );

  return createPortal(
    <>
      <s.ModalBack onClick={handleBackdropClick}>
        <s.ModalCont>
          <s.CloseButton onClick={() => dispatch(close())}>
            <svg version="1" viewBox="0 0 48 48">
              <g fill="black">
                <polygon points="5,18 19,6.3 19,29.7" />
                <path d="M28,14H16v8h12c2.8,0,5,2.2,5,5s-2.2,5-5,5h-3v8h3c7.2,0,13-5.8,13-13S35.2,14,28,14z" />
              </g>
            </svg>
          </s.CloseButton>
          <h2>Оставте заявку и мы Вам перезвоним</h2>
          <s.ModalForm>
            {formData.map((name) => {
              return (
                <label key={`${name}`}>
                  {name}
                  <input
                    onChange={onCh}
                    type="text"
                    name={name}
                    value={name}
                    placeholder={name}
                  ></input>
                </label>
              );
            })}

            <button type="button" onClick={onSubmitForm}>
              Отправить
            </button>
          </s.ModalForm>
        </s.ModalCont>
      </s.ModalBack>
    </>,
    ModalRoot
  );
}
