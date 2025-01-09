import { useSelector, useDispatch } from "react-redux";

import * as s from "./Login.styled";

// import { incrA, decrA, nameUser, clireNameUser } from "../../redux/slice";
import { logIn } from "../../redux/operations";

import ButtonFitback from "components/ButtonFit/ButtonFit";

import { Container } from "../stylesheet/Container.styled";

export default function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.isLoading);

  const formSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        name: form.elements.name.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Container>
        <div>
          <h1>LOGIN</h1>

          <div>
            <h2>FORM</h2>
            {isLoading ? (
              <div>...loding...</div>
            ) : (
              <s.loginForm onSubmit={formSubmit}>
                <label>
                  Name
                  <input type="name" name="name" />
                </label>
                <label>
                  Password
                  <input type="password" name="password" />
                </label>
                <ButtonFitback cont={"LOGIN"} type={"submit"} />
              </s.loginForm>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
