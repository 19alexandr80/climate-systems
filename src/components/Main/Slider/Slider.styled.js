import styled from "styled-components";

export const Carusel = styled.div`
  width: 100%;
  /*@media (max-width: 355px) {
    max-width: 315px;
  }
  @media (min-width: 1024px) {
    padding-left: 18px;
  }
  @media (min-width: 1280px) {
    padding-left: 18px;
  } */
`;

export const SliderList = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  margin: 0px;
`;
export const Slide = styled.div`
  min-width: 100%;
  max-width: 100%;
  height: 530px;
  /* @media (min-width: 1024px) {
    margin-right: 40px;
  } */
`;
export const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  box-shadow: 2px 2px 15px 4px rgb(0 0 0 / 25%);
  /* @media (min-width: 1024px) {
    width: 194px;
  }
  @media (min-width: 1280px) {
    max-width: 254px;
    width: 254px;
  } */
`;
export const ArrowBlock = styled.div`
  display: flex;
  justify-content: space-between;
  transform: translateY(-250px);
  width: 100%;
`;
