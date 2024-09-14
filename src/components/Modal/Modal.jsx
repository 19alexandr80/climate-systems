import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

import { addFeedback } from "api/api";

import * as s from "./Modal.styled";

const ModalRoot = document.getElementById("modal-root");

export default function Modal({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [comment, setComment] = useState("");
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
  const onCh = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "email":
        setEmail(e.currentTarget.value);
        break;
      case "telephone":
        setTelephone(e.currentTarget.value);
        break;
      case "message":
        setComment(e.currentTarget.value);
        break;

      default:
        break;
    }
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      phone: telephone,
      message: comment,
      email: email,
    };
    addFeedback(data);
    setName("");
    setTelephone("");
    setComment("");
    setEmail("");
  };
  return createPortal(
    <>
      <s.ModalBack onClick={handleBackdropClick}>
        <s.ModalCont>
          <s.CloseButton onClick={onClose}>
            <svg version="1" viewBox="0 0 48 48">
              <g fill="black">
                <polygon points="5,18 19,6.3 19,29.7" />
                <path d="M28,14H16v8h12c2.8,0,5,2.2,5,5s-2.2,5-5,5h-3v8h3c7.2,0,13-5.8,13-13S35.2,14,28,14z" />
              </g>
            </svg>
          </s.CloseButton>
          <h2>Оставте заявку и мы Вам перезвоним</h2>
          <s.ModalForm>
            <label>
              name
              <input
                onChange={onCh}
                type="text"
                name="name"
                value={name}
                placeholder="Name"
              ></input>
            </label>
            <label>
              telefon
              <input
                onChange={onCh}
                type="tel"
                name="telephone"
                value={telephone}
                placeholder="+380..."
                required
              ></input>
            </label>
            <label>
              email
              <input
                onChange={onCh}
                type="email"
                name="email"
                value={email}
                placeholder="...@..."
              ></input>
            </label>
            <label>
              message
              <textarea
                name="message"
                cols={30}
                rows={15}
                onChange={onCh}
                value={comment}
              ></textarea>
            </label>
            <button onClick={onSubmitForm}>Отправить</button>
          </s.ModalForm>
        </s.ModalCont>
      </s.ModalBack>
    </>,
    ModalRoot
  );
}
