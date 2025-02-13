import { useState } from "react";

import ButtonFitback from "components/ButtonFit/ButtonFit";

export default function PhoneForm({ phoneSubmit, clouseForm }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onCh = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      case "telephone":
        setNumber(e.currentTarget.value);
        break;

      default:
        break;
    }
  };
  const formSubmit = (e) => {
    e.preventDefault();

    phoneSubmit({ name, number });
  };

  return (
    <>
      <form onSubmit={formSubmit}>
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
            Number
            <input
              onChange={onCh}
              type="tel"
              name="telephone"
              value={number}
              placeholder="+380..."
              required
            />
          </label>
        </div>
        <ButtonFitback cont={"add phone"} type={"submit"} />
        <div onClick={() => clouseForm()}>
          <ButtonFitback cont={"out"} />
        </div>
      </form>
    </>
  );
}
