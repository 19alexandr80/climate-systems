import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Outlet, Link } from "react-router-dom";
import {
  addPhoneClient,
  deletePhoneClient,
  addComentClient,
  deleteComentClient,
} from "../../../redux/operations";

import ButtonFitback from "components/ButtonFit/ButtonFit";
import PhoneForm from "./ObjectPageForem/PhoneForm";
import AdminForm from "./ObjectPageForem/AdminForm";

import { Container } from "../../stylesheet/Container.styled";

export default function ObjectPage() {
  const [adminForm, setAdminForm] = useState(false);

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
  const deleteAdmin = (elementName) => {
    dispatch(
      deleteComentClient({
        elementName,
        token,
        nameObject: object.name,
        chapter: "adminName",
      })
    );
  };

  const clouseForm = () => {
    setAdminForm(false);
  };
  const adminSubmit = (name) => {
    dispatch(
      addComentClient({
        elementName: name,
        token,
        nameObject: object.name,
        chapter: "adminName",
      })
    );
  };
  const phoneSubmit = ({ name, number }) => {
    dispatch(
      addPhoneClient({
        namePhone: name,
        number,
        token,
        nameObject: object.name,
      })
    );
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
                  {p.name}: {p.number}{" "}
                  {adminForm && (
                    <button type="button" onClick={() => deletePhone(p._id)}>
                      delete
                    </button>
                  )}
                </p>
              );
            })}

            {adminForm && (
              <PhoneForm phoneSubmit={phoneSubmit} clouseForm={clouseForm} />
            )}
          </div>
        </div>
        <div>
          <h2>Admin</h2>
          {object.adminName.map((ad) => {
            return (
              <p key={ad}>
                {ad}{" "}
                {adminForm && (
                  <button type="button" onClick={() => deleteAdmin(ad)}>
                    delete
                  </button>
                )}
              </p>
            );
          })}
          {adminForm && (
            <AdminForm adminSubmit={adminSubmit} clouseForm={clouseForm} />
          )}
        </div>
        <div>
          <h2>Document</h2>
        </div>
        <div>
          <Link to={"magazine"}>
            <h2>Журнал</h2>
          </Link>
          <Outlet />
        </div>
        {!adminForm ? (
          <div onClick={() => setAdminForm(true)}>
            <ButtonFitback cont={"Change"} />
          </div>
        ) : (
          <div onClick={() => clouseForm()}>
            <ButtonFitback cont={"out"} />
          </div>
        )}
      </Container>
    </>
  );
}
