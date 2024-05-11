import { Container } from "../stylesheet/Container.styled";
import Kitchen from "./Kitchen/Kitchen";

import Slider from "./Slider/Slider";

export default function Main() {
  return (
    <>
      <Container>
        <Slider />
        <Kitchen />
      </Container>
    </>
  );
}
