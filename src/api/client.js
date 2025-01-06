export const getClientObj = async function (params) {
  const { token, email } = params;
  const options = {
    method: "POST",
    body: JSON.stringify({
      email,
      token,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  const userAuth = await fetch(
    "https://climat-backend.onrender.com/dataClient/getClient",
    options
  )
    .then((response) => response.json())
    // .then((res) => res[0])
    .catch((error) => alert(error));
  return userAuth;
};
