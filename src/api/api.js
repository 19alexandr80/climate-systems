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
    // console.log(response);
    return response;
  } catch (error) {
    console.error("errrrrror", error);
  }
};

// export default getUsers;
