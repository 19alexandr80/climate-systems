import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import { useSelector } from "react-redux";
// import { addComentClient } from "../../../redux/operations";

import {
  getMagazinePage,
  deleteComentObject,
  addComentObject,
} from "api/client";
import { LoaderHourglass } from "components/Loader/Loader";

import * as s from "./Magazine.styled";

export default function Magazine() {
  const [note, setNote] = useState("");
  const [magazinePage, setMagazinePage] = useState([]);
  const [mPageL, setMPageL] = useState(null);
  const [page, setPage] = useState(1);
  const [buttonMore, setButtonMore] = useState(true);
  const [loding, setLoding] = useState(false);
  const params = useParams();
  const objectAll = useSelector((state) => state.contacts.objectAll);
  const token = useRef(useSelector((state) => state.contacts.token));
  const nameUser = useSelector((state) => state.contacts.user.name);

  const nameObject = useRef(params.objectName);

  useEffect(() => {
    const parData = {
      token: token.current,
      nameObject: nameObject.current,
      pageMagazine: page,
    };
    const getMagazinPage = async () => {
      try {
        setLoding(true);
        const data = await getMagazinePage(parData);
        if (!data) {
          alert("sorry no information yet");
          setLoding(false);
          return;
        }
        setMagazinePage((m) => {
          if (m[0]?._id === data.mgazine[0]?._id) {
            return m;
          }
          return m.concat(data.mgazine);
        });
        setMPageL(data.noteLength);
        setLoding(false);
      } catch (error) {
        setLoding(false);
        console.error(error.messeng);
      } finally {
        setLoding(false);
        return;
      }
    };
    getMagazinPage();
  }, [page]);

  const quantityPage = () => {
    if (page > mPageL / 10) {
      setButtonMore(false);
      return;
    }
    setPage(page + 1);
  };

  const { name } = objectAll.filter((b) => {
    return b.name === params.objectName;
  })[0];
  const deleteNote = async (elementName) => {
    try {
      setLoding(true);
      const data = await deleteComentObject({
        elementName,
        token,
        nameObject: name,
        chapter: "magazine",
      });
      if (!data) {
        alert("sorry no information yet");
        setLoding(false);
        return;
      }
      setLoding(false);
    } catch (error) {
      setLoding(false);
      alert("chota ne tak");
    }
  };
  const onCh = (e) => {
    setNote(e.currentTarget.value);
  };
  const noteSubmit = async (e) => {
    e.preventDefault();
    const noteObj = {
      note: note.concat("// ", nameUser),
    };
    try {
      setLoding(true);
      const data = await addComentObject({
        elementName: noteObj,
        token,
        nameObject: name,
        chapter: "magazine",
      });
      if (!data) {
        alert("sorry no information yet");
        setLoding(false);
        return;
      }
      setLoding(false);
      setNote("");
    } catch (error) {
      setLoding(false);
      alert("chota ne tak");
    }
  };

  return (
    <>
      {loding ? (
        <LoaderHourglass />
      ) : (
        <s.MagazineDiv>
          {magazinePage.length < 1 ? (
            <div> no data</div>
          ) : (
            magazinePage.map((not) => {
              return (
                <div key={not._id}>
                  <s.MagazineNote>{not.note}</s.MagazineNote>
                  <p>{not.date.split("T")[0]}</p>
                  <button type="button" onClick={() => deleteNote(not._id)}>
                    delete
                  </button>
                </div>
              );
            })
          )}
          {buttonMore && (
            <button type="button" onClick={() => quantityPage()}>
              all page {mPageL}
            </button>
          )}
          <form>
            <label>
              message
              <textarea
                name="message"
                cols={30}
                rows={15}
                onChange={onCh}
                value={note}
              ></textarea>
            </label>
            <button type="button" onClick={noteSubmit}>
              Отправить
            </button>
          </form>
        </s.MagazineDiv>
      )}
      <Link to={`/projects/${params.objectName}`}>close</Link>
    </>
  );
}
// +40739483583 евгений
