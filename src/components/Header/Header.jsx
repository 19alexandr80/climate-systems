import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../images/logo/logo.png";

import { Container } from "components/stylesheet/Container.styled";
import ButtonFitback from "components/ButtonFit/ButtonFit";
import * as s from "./Header.styled";

export default function Header({ onOpen }) {
  const [colorBack, setColorBack] = useState(false);

  const onColor = () => {
    setColorBack(!colorBack);
  };

  return (
    <>
      <s.HeaderBlock>
        <Container>
          <s.HeadBl>
            <Link to={"/"}>
              <s.ImgIcon src={logo} alt="icon" width={100} height={100} />
            </Link>

            <s.BurgerIcon onClick={onColor}>
              <s.Icon clicked={colorBack.toString()}></s.Icon>
            </s.BurgerIcon>
            <s.NavList clicked={colorBack.toString()} onClick={() => onColor}>
              <li onClick={onColor}>
                <s.LinkStyle to="/">Главная</s.LinkStyle>
              </li>
              <li onClick={onColor}>
                <s.LinkStyle to="/projects">Проэкты</s.LinkStyle>
              </li>
              <li onClick={onColor}>
                <s.LinkStyle to="/services">Услуги</s.LinkStyle>
              </li>
              <li onClick={onColor}>
                <s.LinkStyle to="/contacts">Контакты</s.LinkStyle>
              </li>
              <s.Register onClick={onColor}>
                <Link to={"/login"}>
                  <ButtonFitback cont={"Вход"} />
                </Link>
                <Link to={"/register"}>
                  <ButtonFitback cont={"Регистрация"} />
                </Link>
              </s.Register>
              <li onClick={onColor}>
                <ButtonFitback onOpen={onOpen} cont={"Обратная связь"} />
              </li>
            </s.NavList>
          </s.HeadBl>
        </Container>
      </s.HeaderBlock>
    </>
  );
}
