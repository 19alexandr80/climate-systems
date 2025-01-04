import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "../../redux/store";

import { Container } from "../stylesheet/Container.styled";

export default function Register() {
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <div>
          <h1>REGISTER</h1>
        </div>
      </Container>
    </>
  );
}
