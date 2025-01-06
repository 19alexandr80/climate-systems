import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getClientObj } from "api/client";

import { Container } from "../stylesheet/Container.styled";

import * as s from "./Projects.styled";
// import * as reportWebVitals from "reportWebVitals";

export default function Projects() {
  const [cast, setCast] = useState([]);
  const [loding, setLoding] = useState(false);
  const email = useSelector((state) => state.contacts.user.email);
  const token = useSelector((state) => state.contacts.token);

  useEffect(() => {
    const params = { token, email };
    const getApi = async () => {
      try {
        setLoding(true);
        const data = await getClientObj(params);
        if (!data) {
          alert("sorry no information yetNONE");
          setLoding(false);
          return;
        }
        setCast(data);
        setLoding(false);
      } catch (error) {
        setLoding(false);
        console.error(error.messeng);
      } finally {
        setLoding(false);
        return;
      }
    };
    getApi();
  }, [token, email]);

  // console.log(cast);
  return (
    <>
      <Container>
        <s.ProjectsDiv>
          <h1>Проэкты {email}</h1>
          <Link to={"/dmn"}>DMN</Link>
          {loding ? (
            <div>loding data... please wait </div>
          ) : (
            <div>
              {cast.map((cast) => {
                return (
                  <li key={`${cast._id}`}>
                    <h3>{cast.name}</h3>
                    <p>tel: {cast.phone}</p>
                    <p>email: {cast.email}</p>
                    <p>adress: {cast.adress}</p>
                  </li>
                );
              })}
            </div>
          )}
        </s.ProjectsDiv>
      </Container>
    </>
  );
}
