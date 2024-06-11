import styled from "styled-components";
import fotoA from "images/ventilation/Screenshot_2.png";

export const ProjectsDiv = styled.div`
  background-image: linear-gradient(
      rgba(0, 0, 255, 0.5),
      rgba(255, 255, 0, 0.5)
    ),
    url(${fotoA});
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 630px;
`;
