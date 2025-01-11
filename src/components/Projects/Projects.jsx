import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";

import { getObjectsAdmin, getAllObjects, getObjectsClient } from "api/client";

import { Container } from "../stylesheet/Container.styled";

import * as s from "./Projects.styled";
// import * as reportWebVitals from "reportWebVitals";

export default function Projects() {
  const [cast, setCast] = useState([]);
  const [loding, setLoding] = useState(false);
  const name = useSelector((state) => state.contacts.user.name);
  const token = useSelector((state) => state.contacts.token);
  const subscription = useSelector((state) => state.contacts.user.subscription);
  const params = useMemo(() => {
    const p = { token, name };
    return p;
  }, [name, token]);
  console.log(subscription);
  useEffect(() => {
    const getApi = async () => {
      try {
        setLoding(true);
        switch (subscription) {
          case "superadmin":
            const allObjects = await getAllObjects(params);
            if (!allObjects) {
              alert("sorry no information yetNONE");
              setLoding(false);
              return;
            }
            setCast(allObjects);
            setLoding(false);
            return;
          case "admin":
            const objectsAdmin = await getObjectsAdmin(params);
            if (!objectsAdmin) {
              alert("sorry no information yetNONE");
              setLoding(false);
              return;
            }
            setCast(objectsAdmin);
            setLoding(false);
            return;
          case "client":
            const objectsClient = await getObjectsClient(params);
            if (!objectsClient) {
              alert("sorry no information yetNONE");
              setLoding(false);
              return;
            }
            setCast(objectsClient);
            setLoding(false);
            return;
          default:
            alert("Нет таких значений");
        }
        // const data = await getObjectsAdmin(params);
        // console.log(data);
        // if (!data) {
        //   alert("sorry no information yetNONE");
        //   setLoding(false);
        //   return;
        // }
        // setCast(data);
        // setLoding(false);
      } catch (error) {
        setLoding(false);
        console.error(error.messeng);
      } finally {
        setLoding(false);
        return;
      }
    };
    getApi();
  }, [params, subscription]);

  return (
    <>
      <Container>
        <s.ProjectsDiv>
          <h1>Проэкты {name}</h1>
          <Link to={"/dmn"}>DMN</Link>
          {loding ? (
            <div>loding data... please wait </div>
          ) : (
            <div>
              {cast.length >= 1 ? (
                <ul>
                  {cast.map((cast) => {
                    return (
                      <li key={`${cast._id}`}>
                        <h3>{cast.name}</h3>

                        <div>client: {cast.client}</div>
                        <div>tel: {cast.phone}</div>
                        <div>adress: {cast.adress}</div>
                        <div>
                          adminName:
                          {cast.adminName.map((admin) => (
                            <div>__ {admin}</div>
                          ))}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p>NOT DATA</p>
              )}
            </div>
          )}
        </s.ProjectsDiv>
      </Container>
    </>
  );
}
