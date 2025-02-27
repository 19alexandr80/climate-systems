import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { getAllUsers, deleteUser } from "api/api";

import { LoaderHourglass } from "components/Loader/Loader";
import ButtonFitback from "components/ButtonFit/ButtonFit";

export default function AllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [loding, setLoding] = useState(false);

  const token = useRef(useSelector((state) => state.contacts.token));

  useEffect(() => {
    const allUse = async () => {
      try {
        setLoding(true);
        const users = await getAllUsers(token);
        setAllUsers(users);
        setLoding(false);
      } catch (error) {
        alert(error);
        setLoding(false);
      }
    };
    allUse();
  }, []);

  const delUser = async (id) => {
    try {
      const userDelete = await deleteUser({ token, id });
      alert(userDelete.name + " delete");
      setAllUsers((users) => {
        return users.filter((us) => us.name !== userDelete.name);
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {loding ? (
        <LoaderHourglass />
      ) : (
        <div>
          {allUsers.length < 1 ? (
            <p>not data</p>
          ) : (
            allUsers.map((us) => {
              return (
                <div key={us.id}>
                  <p>name: {us.name}</p>
                  <p>subscription: {us.subscription}</p>
                  <ButtonFitback
                    cont={"delete"}
                    onClicCullback={delUser}
                    argument={us.id}
                  />
                </div>
              );
            })
          )}
        </div>
      )}
    </>
  );
}
