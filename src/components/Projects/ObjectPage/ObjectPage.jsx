import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addPhoneClient, deletePhoneClient } from "../../../redux/operations";

import ButtonFitback from "components/ButtonFit/ButtonFit";

import { Container } from "../../stylesheet/Container.styled";

// import * as s from "../Projects.styled";

export default function ObjectPage() {
  const dispatch = useDispatch();
  const objectAll = useSelector((state) => state.contacts.objectAll);
  const token = useSelector((state) => state.contacts.token);
  const params = useParams();
  const object = objectAll.filter((b) => {
    return b.name === params.objectName;
  })[0];
  const deletePhone = (id) => {
    dispatch(
      deletePhoneClient({
        id,
        token,
        nameObject: object.name,
      })
    );
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      addPhoneClient({
        namePhone: form.elements.name.value,
        number: form.elements.number.value,
        token,
        nameObject: object.name,
      })
    );
    form.reset();
  };
  return (
    <>
      <Container>
        <div>
          <h1>{object.name}</h1>
          <div>
            <p>Client: {object.client}</p>
          </div>
          <div>
            <h2>Adress</h2>
            <p>{object.adress}</p>
          </div>
          <div>
            <h2>Telefon</h2>
            {object.phone.map((p) => {
              return (
                <p key={p._id}>
                  {p.name}: {p.number}
                  <button type="button" onClick={() => deletePhone(p._id)}>
                    delete
                  </button>
                </p>
              );
            })}
            <ButtonFitback cont={"add phone"} />
            <form onSubmit={formSubmit}>
              <label>
                Name
                <input type="name" name="name" />
              </label>
              <label>
                Number
                <input type="number" name="number" />
              </label>
              <ButtonFitback cont={"add phone"} type={"submit"} />
            </form>
          </div>
        </div>
        <div>
          <h2>Admin</h2>
          {object.adminName.map((ad) => {
            return <p key={ad}>{ad}</p>;
          })}
        </div>
        <div>
          <h2>Document</h2>
        </div>
        <div>
          <h2>Журнал</h2>
        </div>
      </Container>
    </>
  );
}
