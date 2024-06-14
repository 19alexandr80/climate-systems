import { NavLink, Outlet } from "react-router-dom";

import { Container } from "../stylesheet/Container.styled";

import * as s from "./Services.styled";

export default function Services() {
  return (
    <>
      <Container>
        <s.ServicesDiv>
          <h1>Наши услуги</h1>
          <p>Любой каприз за ваши деньги</p>
          <ul>
            <li>
              <h2>Кондеционирование</h2>
              <NavLink to="aircond">подробнее</NavLink>
            </li>
            <li>
              <h2>вентиляция</h2>
              <NavLink to="ventilation">подробнее</NavLink>
            </li>
          </ul>
        </s.ServicesDiv>
        <Outlet />
      </Container>
    </>
  );
}
