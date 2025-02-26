import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { getAllUsers } from "api/api";

export default function AllUsers() {
  const [allUsers, setAllUsers] = useState([false]);

  const token = useRef(useSelector((state) => state.contacts.token));

  useEffect(() => {
    const allUse = async () => {
      const users = await getAllUsers(token);
      setAllUsers([...users]);
    };

    allUse();
    // console.log(allUsers);
  }, []);

  return (
    <>
      <div>
        {allUsers.map((us) => {
          return (
            <div key={us.name}>
              <p>name: {us.name}</p>
              <p>subscription: {us.subscription}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
