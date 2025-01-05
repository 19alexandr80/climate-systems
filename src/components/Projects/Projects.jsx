import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { Container } from "../stylesheet/Container.styled";

import * as s from "./Projects.styled";
// import * as reportWebVitals from "reportWebVitals";

export default function Projects() {
  const email = useSelector((state) => state.contacts.user.email);
  return (
    <>
      <Container>
        <s.ProjectsDiv>
          <h1>Проэкты {email}</h1>
          <p>И чего мы только не делали</p>
          <Link to={"/dmn"}>DMN</Link>
        </s.ProjectsDiv>
      </Container>
    </>
  );
}
