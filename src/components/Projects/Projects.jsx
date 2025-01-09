import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";

import { getClientObj } from "api/client";

import { Container } from "../stylesheet/Container.styled";

import * as s from "./Projects.styled";
// import * as reportWebVitals from "reportWebVitals";

export default function Projects() {
  const [cast, setCast] = useState([]);
  const [loding, setLoding] = useState(false);
  const name = useSelector((state) => state.contacts.user.name);
  const token = useSelector((state) => state.contacts.token);
  const params = useMemo(() => {
    const p = { token, name };
    return p;
  }, [name, token]);

  useEffect(() => {
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
  }, [params]);

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
                        <p>tel: {cast.phone}</p>
                        <p>email: {cast.email}</p>
                        <p>adress: {cast.adress}</p>
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
// {
//   cast.map((cast) => {
//     return (
//       <li key={`${cast._id}`}>
//         <h3>{cast.name}</h3>
//         <p>tel: {cast.phone}</p>
//         <p>email: {cast.email}</p>
//         <p>adress: {cast.adress}</p>
//       </li>
//     );
//   });
// }
