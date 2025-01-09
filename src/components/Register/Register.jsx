import { useSelector } from "react-redux";

import { addClient } from "api/client";

import ButtonFitback from "components/ButtonFit/ButtonFit";

import { Container } from "../stylesheet/Container.styled";
import * as s from "./Register.styled";

export default function Register() {
  // const dispatch = useDispatch();
  const token = useSelector((state) => state.contacts.token);

  const formSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const options = {
      name: form.elements.name.value,
      adress: form.elements.adress.value,
      phone: form.elements.phone.value,
      adminName: form.elements.nameAdmin.value,
      token,
    };
    addClient(options);
    form.reset();
  };
  return (
    <>
      <Container>
        <h1>REGISTER</h1>
        <div>
          <h2>FORM</h2>

          <s.loginForm onSubmit={formSubmit}>
            <label>
              Name
              <input type="text" name="name" />
            </label>
            <label>
              Adress
              <input type="text" name="adress" />
            </label>
            <label>
              Phone
              <input type="phone" name="phone" />
            </label>
            <label>
              Name Admin
              <input type="text" name="nameAdmin" />
            </label>
            <ButtonFitback cont={"Add Client"} type={"submit"} />
          </s.loginForm>
        </div>
      </Container>
    </>
  );
}
