export const getClientObj = async function (params) {
  const { token, name } = params;
  console.log(name);
  const options = {
    method: "GET",
    // body: JSON.stringify({
    //   email,
    //   token,
    // }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const userAuth = await fetch(
    // `https://climat-backend.onrender.com/dataClient/${name}`,
    "https://climat-backend.onrender.com/dataClient/francuze",
    options
  )
    .then((response) => response.json())
    // .then((res) => console.log(res))
    // .then((res) => res[0])
    .catch((error) => alert(error));
  return userAuth;
};

export const addClient = async (params) => {
  const { token, name, adminName, adress, phone } = params;
  const options = {
    method: "POST",
    body: JSON.stringify({
      name,
      adminName,
      adress,
      phone,
      token,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const userAuth = await fetch(
    "https://climat-backend.onrender.com/dataClient",
    options
  )
    .then((response) => response.json())
    .then((res) => console.log(res))
    // .then((res) => res[0])
    .catch((error) => alert(error));
  return userAuth;
};
