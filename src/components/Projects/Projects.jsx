import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container } from "../stylesheet/Container.styled";

import * as s from "./Projects.styled";

export default function Projects() {
  const name = useSelector((state) => state.contacts.user.name);
  const objectAll = useSelector((state) => state.contacts.objectAll);
  // console.log(objectAll);

  return (
    <>
      <Container>
        <s.ProjectsDiv>
          <h1>Проэкты {name}</h1>
          <Link to={"/dmn"}>DMN</Link>

          <div>
            {objectAll.length >= 1 ? (
              <s.Ul>
                {objectAll.map((cast) => {
                  return (
                    <li key={`${cast._id}`}>
                      <h3>{cast.name}</h3>
                      <div>adress: {cast.adress}</div>
                      <div>
                        client:{" "}
                        {cast.client.map((cl) => (
                          <p key={cl}>{cl}</p>
                        ))}
                      </div>
                      <s.DropdownDiv>
                        <s.Dropbtn>telefone:</s.Dropbtn>
                        <s.DropdownContent
                          style={{ left: 0 }}
                          className="content"
                        >
                          {cast.phone.map((us) => (
                            <div key={us._id}>
                              <p>{us.name}</p>
                              <p>{us.number}</p>
                            </div>
                          ))}
                        </s.DropdownContent>
                      </s.DropdownDiv>
                      <s.DropdownDiv>
                        <s.Dropbtn>adminName:</s.Dropbtn>
                        <s.DropdownContent
                          style={{ left: 0 }}
                          className="content"
                        >
                          {cast.adminName.map((admin) => (
                            <div key={admin}>{admin}</div>
                          ))}
                        </s.DropdownContent>
                      </s.DropdownDiv>
                      <s.ChengDiv>
                        <Link to={cast.name}>More details</Link>
                      </s.ChengDiv>
                    </li>
                  );
                })}
              </s.Ul>
            ) : (
              <p>NOT DATA</p>
            )}
          </div>
        </s.ProjectsDiv>
      </Container>
    </>
  );
}
