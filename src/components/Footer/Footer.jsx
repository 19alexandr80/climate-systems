import { Container } from "../stylesheet/Container.styled";

import logo from "../../images/logo/logo.png";

export default function Footer() {
  return (
    <>
      <Container>
        <div>
          <img
            className="fit-picture"
            src={logo}
            alt="icon"
            width={100}
            height={100}
          />
        </div>
        <div>kontakt</div>
      </Container>
    </>
  );
}
