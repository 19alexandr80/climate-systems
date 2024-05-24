import { Link } from "react-router-dom";

import logo from "../../images/logo/logo.png";

import { Container } from "components/stylesheet/Container.styled";
import * as s from "./Header.styled";

export default function Header({ onOpen }) {
  return (
    <>
      <s.HeaderBlock>
        <Container>
          <s.HeadBl>
            <Link to={"/"}>
              <img
                className="fit-picture"
                src={logo}
                alt="icon"
                width={100}
                height={100}
              />
            </Link>
            <s.NavList>
              <li>
                <s.LinkStyle to="/">Главная</s.LinkStyle>
              </li>
              <li>
                <s.LinkStyle to="/projects">Проэкты</s.LinkStyle>
              </li>
              <li>
                <s.LinkStyle to="/services">Услуги</s.LinkStyle>
              </li>
              <li>
                <s.LinkStyle to="/contacts">Контакты</s.LinkStyle>
              </li>
            </s.NavList>
            <s.ButtonFit onClick={onOpen}>Обратная связь</s.ButtonFit>
          </s.HeadBl>
        </Container>
      </s.HeaderBlock>
    </>
  );
}
