import styled from "styled-components";

export const Carusel = styled.div`
  overflow-x: clip;
  width: 100%;
  /* overflow-x: clip;
  max-width: 350px;
  padding-left: 18px;
  @media (max-width: 355px) {
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
  display: flex;
  /* list-style: none; */
  transition: 1s all;
  padding: 0px;
  margin: 0px;
`;
export const Slide = styled.div`
  /* width: 100vw; */
  min-width: 100%;
  max-width: 100%;
  height: 450px;
  /* padding-left: 60px;
  padding-right: 60px; */
  /* margin-right: 25px;
  @media (min-width: 1024px) {
    margin-right: 40px;
  } */
`;
export const SlideImg = styled.img`
  width: 100%;
  height: 100%;

  /* max-width: 245px;
  border-radius: 2px;
  box-shadow: 2px 2px 15px 4px rgb(0 0 0 / 25%);
  @media (min-width: 1024px) {
    width: 194px;
  }
  @media (min-width: 1280px) {
    max-width: 254px;
    width: 254px;
  } */
`;
