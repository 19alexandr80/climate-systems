import styled from "styled-components";

export const Carusel = styled.div`
  width: 100%;
`;

export const SliderList = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  margin: 0px;
  @media (max-width: 1024px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;
export const Slide = styled.div`
  min-width: 100%;
  max-width: 100%;
  height: 530px;
  @media (max-width: 1024px) {
    height: 400px;
  }
`;
export const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  box-shadow: 2px 2px 15px 4px rgb(0 0 0 / 25%);
  @media (max-width: 1024px) {
    object-fit: cover;
  }
`;
export const ArrowBlock = styled.div`
  display: flex;
  justify-content: space-between;
  transform: translateY(-250px);
  width: 100%;
  @media (max-width: 1024px) {
    width: 394px;
    position: absolute;
  }
`;
export const Arrow = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  &:hover {
    background-color: rgba(157, 157, 157, 0.5);
  }
  @media (max-width: 1024px) {
    & {
      filter: invert(100%) sepia(7%) saturate(0%) hue-rotate(158deg)
        brightness(108%) contrast(109%);
    }
    background-color: rgba(45, 196, 255, 0.5);
  }
`;
