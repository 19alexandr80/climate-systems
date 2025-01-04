import { useSelector, useDispatch } from "react-redux";
// import {} from "../../redux/store";

// import { incrA, decrA, nameUser, clireNameUser } from "../../redux/slice";
import { logIn, logOut } from "../../redux/operations";

import { Container } from "../stylesheet/Container.styled";

export default function Login() {
  const email = useSelector((state) => state.contacts.user.email);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.contacts.token);

  const formSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
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
            {email && <h2>{email}</h2>}
            <div></div>
          </div>
          <div>
            <h2>FORM</h2>
            <form onSubmit={formSubmit}>
              <label>
                Email
                <input type="email" name="email" />
              </label>
              <label>
                Password
                <input type="password" name="password" />
              </label>
              <button type="submit">Log In</button>
            </form>
          </div>
          <div>
            <button type="button" onClick={() => dispatch(logOut(token))}>
              Log out
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
