import axios from "axios";
axios.defaults.baseURL = "https://nodejs-homework-api-bx2p.onrender.com";

export const addFeedback = async (feedb) => {
  try {
    const response = await axios.post(`/feedback`, feedb);
    alert(`Massage sent uour id: ${response.data._id}`);
    return response;
  } catch (error) {
    alert(error.response.data.message);
    console.error("errrrrror", error);
  }
};

export const getAllFeedback = async () => {
  try {
    const response = await axios.get(`/feedback`);
    return response.data;
  } catch (error) {
    alert(error.response.data.message);
    console.error("errrrrror", error);
  }
};

export const deleteFeedback = async (id) => {
  try {
    const response = await axios.delete(`/feedback/${id}`);
    return response;
  } catch (error) {
    console.error("errrrrror", error);
  }
};

// https://climat-backend.onrender.com/users/...

export const registerUser = async function (params) {
  const options = {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  const userAuth = await fetch(
    "https://climat-backend.onrender.com/users/register",
    options
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return userAuth;
};

export const loginUser = async function (params) {
  const options = {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  const userAuth = await fetch(
    "https://climat-backend.onrender.com/users/login",
    options
  )
    .then((response) => response.json())
    .catch((error) => alert("login " + error));
  return userAuth;
};

export const logout = async function (token) {
  const options = {
    method: "POST",
    body: JSON.stringify({
      token,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const userAuth = await fetch(
    "https://climat-backend.onrender.com/users/logout",
    options
  )
    .then(() => alert("good by"))
    .catch((error) => alert(error));
  return userAuth;
};
export const changPassword = async function ({
  token,
  password,
  name,
  newPassword,
}) {
  const options = {
    method: "PATCH",
    body: JSON.stringify({
      newPassword,
      password,
      name,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const userAuth = await fetch(
    "https://climat-backend.onrender.com/users/changePassword",
    options
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => alert(error));
  return userAuth;
};
// ================================================================
export const getAllUsers = async function (token) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const userAuth = await fetch(
    "https://climat-backend.onrender.com/users/allUsers",
    options
  )
    .then((response) => response.json())
    .catch((error) => alert(error));
  return userAuth;
};
// ===============================================================================
export const deleteUser = async function ({ token, id }) {
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
  const userAuth = await fetch(
    "https://climat-backend.onrender.com/users/deleteUser",
    options
  )
    .then((response) => response.json())
    .catch((error) => alert(error));
  return userAuth;
};
