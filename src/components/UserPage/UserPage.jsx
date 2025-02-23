import { useSelector } from "react-redux";
import { useState } from "react";

import ButtonFitback from "components/ButtonFit/ButtonFit";
import { LoaderHourglass } from "components/Loader/Loader";

import { changPassword } from "api/api";

export default function UserPage() {
  const [password, setPassword] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const name = useSelector((state) => state.contacts.user.name);
  const token = useSelector((state) => state.contacts.token);
  const [loding, setLoding] = useState(false);

  const onCh = (e) => {
    switch (e.currentTarget.name) {
      case "password":
        setPassword(e.currentTarget.value);
        break;
      case "passwordNew":
        setPasswordNew(e.currentTarget.value);
        break;

      default:
        break;
    }
  };

  const passwordChang = async (e) => {
    e.preventDefault();
    const params = {
      name,
      token,
      password,
      newPassword: passwordNew,
    };
    try {
      setLoding(true);
      const chPas = await changPassword({ ...params });
      alert(chPas.user.name + " password cheng");
      setLoding(false);
      setPassword("");
      setPasswordNew("");
    } catch (error) {
      alert(error);
      setLoding(false);
    }
  };
  return (
    <>
      <h1>{name} Page</h1>
      {loding ? (
        <LoaderHourglass />
      ) : (
        <form onSubmit={passwordChang}>
          <label>
            Password
            <input
              onChange={onCh}
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              required
            />
          </label>
          <label>
            New password
            <input
              onChange={onCh}
              type="password"
              name="passwordNew"
              value={passwordNew}
              placeholder="New Password"
              required
            />
          </label>
          <ButtonFitback type="submit" cont={"Cheng Password"} />
        </form>
      )}
    </>
  );
}
