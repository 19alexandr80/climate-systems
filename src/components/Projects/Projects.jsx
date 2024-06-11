import { Container } from "../stylesheet/Container.styled";

import * as s from "./Projects.styled";
// import * as reportWebVitals from "reportWebVitals";

export default function Projects() {
  return (
    <>
      <Container>
        <s.ProjectsDiv>
          <h1>Наши проэкты</h1>
          <p>И чего мы только не делали</p>
        </s.ProjectsDiv>
      </Container>
    </>
  );
}
