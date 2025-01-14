export const getObjectName = async function (params) {
  const { token, name } = params;
  // console.log(name);
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
    `https://climat-backend.onrender.com/dataClient/${name}`,
    options
  )
    .then((response) => response.json())
    .catch((error) => alert(error));
  return userAuth;
};

export const addClient = async (params) => {
  const { token, name, adminName, namePhone, adress, phone, client } = params;
  const options = {
    method: "POST",
    body: JSON.stringify({
      name,
      adminName,
      adress,
      phone: {
        name: namePhone,
        number: phone,
      },
      client,
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
    .then((response) => {
      alert("Objekt add");
      return response.json();
    })
    .catch((error) => alert(error));
  return userAuth;
};

export const getObjectsAdmin = async (params) => {
  const { token, name } = params;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const userAuth = await fetch(
    `https://climat-backend.onrender.com/dataClient/adminObjects/${name}`,
    options
  )
    .then((response) => response.json())
    .catch((error) => alert(error));
  return userAuth;
};

export const getObjectsClient = async (params) => {
  const { token, name } = params;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const userAuth = await fetch(
    `https://climat-backend.onrender.com/dataClient/getObjectClient/${name}`,
    options
  )
    .then((response) => response.json())
    .catch((error) => alert(error));
  return userAuth;
};

export const getAllObjects = async (params) => {
  const { token } = params;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const userAuth = await fetch(
    `https://climat-backend.onrender.com/dataClient`,
    options
  )
    .then((response) => response.json())
    .catch((error) => alert(error));
  return userAuth;
};
