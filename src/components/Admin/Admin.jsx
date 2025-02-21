import { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "../stylesheet/Container.styled";
import FeetBlock from "./FeetBlock";
import ButtonFitback from "components/ButtonFit/ButtonFit";
// import { LoaderHourglass } from "components/Loader/Loader";

export default function Admin() {
  const [feetBack, setFeetBack] = useState(false);

  const clouseFeet = () => {
    setFeetBack(false);
  };
  const openFeet = () => {
    setFeetBack(true);
  };
  return (
    <>
      <Container>
        <div>
          <Link to={"/register"}>
            <ButtonFitback cont={"Регистрация object"} />
          </Link>
          <Link to={"/register_user"}>
            <ButtonFitback cont={"Регистрация user"} />
          </Link>
          {!feetBack && (
            <ButtonFitback cont={"Feet Back"} onClicCullback={openFeet} />
          )}
          {feetBack && <FeetBlock clouseFeet={clouseFeet} />}
        </div>
      </Container>
    </>
  );
}
