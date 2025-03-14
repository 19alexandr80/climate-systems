export const getObjectName = async function (params) {
  const { token, name } = params;
  const options = {
    method: "GET",
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

export const addObject = async (params) => {
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
export const addPhone = async (params) => {
  const { token, nameObject, namePhone, number } = params;
  const options = {
    method: "POST",
    body: JSON.stringify({
      name: namePhone,
      number,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const objectNew = await fetch(
    `https://climat-backend.onrender.com/dataClient/numberPhone/${nameObject}`,
    options
  )
    .then((response) => response.json())
    .catch((error) => alert(error));
  return objectNew;
};
export const deletePhoneAdmin = async (params) => {
  const { token, nameObject, id } = params;
  const options = {
    method: "DELETE",
    body: JSON.stringify({
      id,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const objectNew = await fetch(
    `https://climat-backend.onrender.com/dataClient/numberPhone/${nameObject}`,
    options
  )
    .then((response) => response.json())
    .catch((error) => alert(error));
  return objectNew;
};
export const addComentObject = async (params) => {
  const { token, nameObject, elementName, chapter } = params;
  const options = {
    method: "PATCH",
    body: JSON.stringify({
      elementName,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const objectNew = await fetch(
    `https://climat-backend.onrender.com/dataClient/chapterElement/${nameObject}?chapter=${chapter}`,
    options
  )
    .then((response) => response.json())
    .catch((error) => alert(error));
  return objectNew;
};
export const deleteComentObject = async (params) => {
  const { token, nameObject, elementName, chapter } = params;
  const options = {
    method: "DELETE",
    body: JSON.stringify({
      elementName,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const objectNew = await fetch(
    `https://climat-backend.onrender.com/dataClient/chapterElement/${nameObject}?chapter=${chapter}`,
    options
  )
    .then((response) => response.json())
    .catch((error) => alert(error));
  return objectNew;
};
export const getMagazinePage = async (params) => {
  const { token, nameObject, pageMagazine } = params;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const objectNew = await fetch(
    `https://climat-backend.onrender.com/dataClient/magazine/${nameObject}?page=${pageMagazine}`,
    options
  )
    .then((response) => response.json())
    .catch((error) => alert(error));
  return objectNew;
};
export const deleteObject = async function ({ id, token }) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const userAuth = await fetch(
    `https://climat-backend.onrender.com/dataClient/deleteObject/${id}`,
    options
  )
    .then((response) => response.json())
    .catch((error) => alert(error));
  return userAuth;
};
