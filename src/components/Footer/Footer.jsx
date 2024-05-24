import { Link } from "react-router-dom";

import { Container } from "../stylesheet/Container.styled";
import * as s from "components/Footer/Footer.styled";
import { ButtonFit } from "components/Header/Header.styled";

import logo from "../../images/logo/logo.png";

export default function Footer({ onOpen }) {
  return (
    <>
      <s.FooterBlock>
        <Container>
          <s.FooterBl>
            <Link to={"/"}>
              <img
                className="fit-picture"
                src={logo}
                alt="icon"
                width={100}
                height={100}
              />
            </Link>

            <div>
              <s.FooterContackt>
                <li>telefon</li>
                <li>too telefon</li>
                <li>imail</li>
              </s.FooterContackt>
            </div>
            <ButtonFit onClick={onOpen}>Обратная связь</ButtonFit>
          </s.FooterBl>
        </Container>
      </s.FooterBlock>
    </>
  );
}
