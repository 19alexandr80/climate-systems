import { NavLink } from "react-router-dom";

import logo from "../../images/logo/logo.png";

import { Container } from "../stylesheet/Container.styled";
import * as s from "./Header.styled";

export default function Header() {
  return (
    <>
      <Container>
        <s.HeaderBlock>
          <img
            className="fit-picture"
            src={logo}
            alt="icon"
            width={100}
            height={100}
          />
          <s.NavList>
            <li>
              <NavLink to="/">Главная</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Проэкты</NavLink>
            </li>
            <li>
              <NavLink to="/services">Услуги</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Контакты</NavLink>
            </li>
          </s.NavList>
        </s.HeaderBlock>
      </Container>
    </>
  );
}
