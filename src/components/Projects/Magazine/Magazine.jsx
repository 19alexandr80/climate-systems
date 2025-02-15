import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addComentClient, deleteComentClient } from "../../../redux/operations";

export default function Magazine({ clouseMagazine }) {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const objectAll = useSelector((state) => state.contacts.objectAll);
  const token = useSelector((state) => state.contacts.token);
  const nameUser = useSelector((state) => state.contacts.user.name);

  const { magazine, name } = objectAll.filter((b) => {
    return b.name === params.objectName;
  })[0];
  const deleteNote = (elementName) => {
    dispatch(
      deleteComentClient({
        elementName,
        token,
        nameObject: name,
        chapter: "magazine",
      })
    );
  };
  const onCh = (e) => {
    setNote(e.currentTarget.value);
  };
  const noteSubmit = (e) => {
    e.preventDefault();
    const noteObj = {
      note: note.concat("// ", nameUser),
    };
    dispatch(
      addComentClient({
        elementName: noteObj,
        token,
        nameObject: name,
        chapter: "magazine",
      })
    );
    setNote("");
  };

  return (
    <>
      {magazine.length === 0 ? (
        <div> no data</div>
      ) : (
        magazine.map((not) => {
          return (
            <div key={not._id}>
              <p>{not.note}</p>
              <p>{not.date.split("T")[0]}</p>
              <button type="button" onClick={() => deleteNote(not._id)}>
                delete
              </button>
            </div>
          );
        })
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
      <Link to={`/projects/${params.objectName}`}>close</Link>
    </>
  );
}
