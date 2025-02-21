import { useEffect, useState } from "react";

import { getAllFeedback, deleteFeedback } from "api/api";

import { FeetBlock } from "./admin.styled";
import ButtonFitback from "components/ButtonFit/ButtonFit";
import { LoaderHourglass } from "components/Loader/Loader";

export default function FeedBlock({ clouseFeet }) {
  const [cast, setCast] = useState([]);
  const [loding, setLoding] = useState(false);
  const [lodingDel, setLodingDel] = useState(false);
  const [idDel, setIdDel] = useState("");
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
    const id = e.currentTarget.dataset.id;
    setIdDel(id);
    try {
      setLodingDel(true);
      await deleteFeedback(id);
      setLodingDel(false);
      const ddt = cast.filter((feed) => feed._id !== id);
      setCast(ddt);
    } catch (error) {
      setLodingDel(false);
      alert(error);
    }
  };

  return (
    <>
      <div>
        <h2>Хотели потрындеть</h2>
        {loding ? (
          <LoaderHourglass />
        ) : (
          <FeetBlock>
            {cast.map((cast) => {
              return (
                <li key={`${cast._id}`}>
                  {lodingDel && idDel === cast._id ? (
                    <p>...DELETE</p>
                  ) : (
                    <div>
                      <h3>{cast.name}</h3>
                      <p>tel: {cast.phone}</p>
                      <p>email: {cast.email}</p>
                      <p>{cast.message}</p>
                      <p>date: {cast.updatedAt.toString()}</p>
                      <div onClick={delFeed} data-id={cast._id}>
                        <ButtonFitback cont={"Видалити"} />
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </FeetBlock>
        )}
        <ButtonFitback cont={"Cloese Feetback"} onClicCullback={clouseFeet} />
      </div>
    </>
  );
}
