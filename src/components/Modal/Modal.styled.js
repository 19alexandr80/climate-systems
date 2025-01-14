import styled from "styled-components";

import fotoWU from "images/ventilation/Screenshot_49.png";

export const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  background-image: url(${fotoWU});
  background-position: center;
  background-size: cover;
`;
export const ModalCont = styled.div`
  position: relative;
  width: 305px;
  min-height: 155px;
  padding: 50px;
  border-radius: 8px;
  background-color: gainsboro;
  opacity: 0.7;
  @media screen and (min-width: 768px) {
    width: 468px;
    padding: 35px;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
