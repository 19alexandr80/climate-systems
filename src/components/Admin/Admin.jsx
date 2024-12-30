import { useEffect, useState } from "react";

import { getAllFeedback, deleteFeedback } from "api/api";

import { Container } from "../stylesheet/Container.styled";
import { FeetBlock } from "./admin.styled";
import ButtonFitback from "components/ButtonFit/ButtonFit";

export default function Admin() {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      try {
        const data = await getAllFeedback();
        if (!data) {
          alert("sorry no information yet");
          return;
        }
        setCast(data);
      } catch (error) {
        console.error(error.messeng);
      } finally {
        return;
      }
    };
    getApi();
  }, []);

  const delFeed = async (e) => {
    deleteFeedback(e.currentTarget.dataset.id);
    // console.log(e.currentTarget.dataset.id);
    const ddt = cast.filter((feed) => feed._id !== e.currentTarget.dataset.id);
    setCast(ddt);
  };

  return (
    <>
      <Container>
        <div>
          <h1>Хотели потрындеть</h1>
          <FeetBlock>
            {cast.map((cast) => {
              return (
                <li key={`${cast._id}`}>
                  <h3>{cast.name}</h3>
                  <p>tel: {cast.phone}</p>
                  <p>email: {cast.email}</p>
                  <p>{cast.message}</p>
                  <p>date: {cast.updatedAt.toString()}</p>
                  <div onClick={delFeed} data-id={cast._id}>
                    <ButtonFitback cont={"Видалити"} />
                  </div>
                </li>
              );
            })}
          </FeetBlock>
        </div>
      </Container>
    </>
  );
}
