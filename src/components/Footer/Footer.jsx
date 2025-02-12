import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { open } from "../../redux/slice";

import { Container } from "../stylesheet/Container.styled";
import * as s from "components/Footer/Footer.styled";
import { ImgIcon } from "components/Header/Header.styled";
import ButtonFitback from "components/ButtonFit/ButtonFit";

import logo from "../../images/logo/logo.png";

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <>
      <s.FooterBlock>
        <Container>
          <s.FooterBl>
            <Link to={"/"}>
              <ImgIcon
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
            <s.DivFit
              onClick={() => {
                dispatch(open());
              }}
            >
              <ButtonFitback cont={"Обратная связь"} />
            </s.DivFit>
          </s.FooterBl>
        </Container>
      </s.FooterBlock>
    </>
  );
}
