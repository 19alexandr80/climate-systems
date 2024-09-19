import axios from "axios";
axios.defaults.baseURL = "https://nodejs-homework-api-bx2p.onrender.com";

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZTU2Y2M5NDcxMTM1YTM2Mjg5NWFmMyIsImlhdCI6MTcyNjMxMTgwMSwiZXhwIjoxNzI2Mzk0NjAxfQ.ohg4l1yLk60Lf3SaHdmQ4-riHCIq-iSy0OJJRsgnRY8";
// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const getUsers = async () => {
//   const user = {
//     email: "usanka1980@gmail.com",
//     password: "12345qwerty",
//   };
//   try {
//     setAuthHeader(token);
//     const response = await axios.get(`/api/contacts`, user);

//     console.log(response.data);
//     return response;
//   } catch (error) {
//     console.error("errrrrror", error);
//   }
// };

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
    console.error("errrrrror", error);
  }
};

export const deleteFeedback = async (id) => {
  try {
    const response = await axios.delete(`/feedback/${id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error("errrrrror", error);
  }
};

// export default getUsers;
