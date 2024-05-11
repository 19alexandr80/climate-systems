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
            <li>О компании</li>
            <li>Проэкты</li>
            <li>Услуги</li>
            <li>Контакты</li>
          </s.NavList>
          <div>kontakt</div>
        </s.HeaderBlock>
      </Container>
    </>
  );
}
