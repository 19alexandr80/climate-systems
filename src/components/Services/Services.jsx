import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

import { Container } from "../stylesheet/Container.styled";

import * as s from "./Services.styled";

export default function Services() {
  const [back, setBack] = useState("fon");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/services/ventilation":
        setBack("vent");
        break;
      case "/services/aircond":
        setBack("cond");
        break;

      default:
        setBack("fon");
    }
  }, [location.pathname]);
  return (
    <>
      <Container>
        <s.ServicesDiv data={back}>
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
          <Outlet />
        </s.ServicesDiv>
      </Container>
    </>
  );
}
