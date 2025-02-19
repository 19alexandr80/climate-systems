import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllFeedback, deleteFeedback } from "api/api";

import { Container } from "../stylesheet/Container.styled";
import { FeetBlock } from "./admin.styled";
import ButtonFitback from "components/ButtonFit/ButtonFit";
import { LoaderHourglass } from "components/Loader/Loader";

export default function Admin() {
  const [cast, setCast] = useState([]);
  const [loding, setLoding] = useState(false);
  useEffect(() => {
    const getApi = async () => {
      try {
        setLoding(true);
        const data = await getAllFeedback();
        if (!data) {
          alert("sorry no information yet");
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
  }, []);

  const delFeed = async (e) => {
    deleteFeedback(e.currentTarget.dataset.id);
    const ddt = cast.filter((feed) => feed._id !== e.currentTarget.dataset.id);
    setCast(ddt);
  };

  return (
    <>
      <Container>
        <div>
          <Link to={"/register"}>
            <ButtonFitback cont={"Регистрация object"} />
          </Link>
          <Link to={"/register_user"}>
            <ButtonFitback cont={"Регистрация user"} />
          </Link>
          <h1>Хотели потрындеть</h1>
          {loding ? (
            <LoaderHourglass />
          ) : (
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
          )}
        </div>
      </Container>
    </>
  );
}
