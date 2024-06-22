import styled from "styled-components";
import fotoA from "images/ventilation/Screenshot_18.png";
import fotoVent from "images/ventilation/Screenshot_2.png";
import fotoWZ from "images/ventilation/Screenshot_50.png";

const backfon = (data) => {
  if (data === "vent") {
    return fotoVent;
  }
  if (data === "cond") {
    return fotoWZ;
  }
  return fotoA;
};

export const ServicesDiv = styled.div`
  background-image: linear-gradient(
      rgba(0, 0, 255, 0.5),
      rgba(255, 255, 0, 0.5)
    ),
    url(${({ data }) => backfon(data)});
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 630px;
`;
