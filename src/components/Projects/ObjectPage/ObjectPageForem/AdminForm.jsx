import { useState } from "react";

import ButtonFitback from "components/ButtonFit/ButtonFit";

export default function AdminForm({ adminSubmit }) {
  const [name, setName] = useState("");

  const onCh = (e) => {
    setName(e.currentTarget.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    adminSubmit(name);
    setName("");
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
        <ButtonFitback cont={"add admin"} type={"submit"} />
      </form>
    </>
  );
}
