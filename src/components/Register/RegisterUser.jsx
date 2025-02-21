import { useState } from "react";

import { useSelector } from "react-redux";

import { registerUser } from "api/api";

import ButtonFitback from "components/ButtonFit/ButtonFit";
import { LoaderHourglass } from "components/Loader/Loader";

import { Container } from "../stylesheet/Container.styled";
import * as s from "./Register.styled";

export default function RegisterUser() {
  // const dispatch = useDispatch();
  const token = useSelector((state) => state.contacts.token);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [subscription, setSubscription] = useState("");
  const [loding, setLoding] = useState(false);
  const onCh = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "password":
        setPassword(e.currentTarget.value);
        break;
      case "subscription":
        setSubscription(e.currentTarget.value);
        break;

      default:
        break;
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const options = {
      name,
      password,
      subscription,
      token,
    };
    try {
      setLoding(true);
      const data = await registerUser(options);
      if (!data) {
        alert("sorry no shota ne tak");
        setLoding(false);
        return;
      }
      alert(`User ${data.user.name} add`);
      setLoding(false);
    } catch (error) {
      setLoding(false);
      alert("shota ne tak");
    }
    setName("");
    setPassword("");
    setSubscription("");
  };
  return (
    <>
      <Container>
        <h1>REGISTER USER</h1>
        <div>
          <h2>FORM</h2>
          {loding ? (
            <LoaderHourglass />
          ) : (
            <s.loginForm onSubmit={formSubmit}>
              <div>
                <label>
                  Name
                  <input
                    onChange={onCh}
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name"
                    required
                  />
                </label>
              </div>
              <div>
                <label>
                  Password
                  <input
                    onChange={onCh}
                    type="text"
                    name="password"
                    value={password}
                    placeholder="password"
                    required
                  />
                </label>
              </div>
              <div>
                <label>subscription</label>

                <div>
                  <label>
                    Client
                    <input
                      type="radio"
                      name="subscription"
                      value="client"
                      onChange={onCh}
                    />
                  </label>
                </div>

                <div>
                  <label>
                    Admin
                    <input
                      type="radio"
                      name="subscription"
                      value="admin"
                      onChange={onCh}
                    />
                  </label>
                </div>

                <div>
                  <label>
                    Super admin
                    <input
                      type="radio"
                      name="subscription"
                      value="superadmin"
                      onChange={onCh}
                    />
                  </label>
                </div>
              </div>

              <ButtonFitback cont={"Add User"} type={"submit"} />
            </s.loginForm>
          )}
        </div>
      </Container>
    </>
  );
}
