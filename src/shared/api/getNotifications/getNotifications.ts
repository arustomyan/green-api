const BASE_URL = "https://api.green-api.com";

export const getNotifications = async () => {
  const idInstance = localStorage.getItem("idInstance");
  const ApiTokenInstance = localStorage.getItem("ApiTokenInstance");

  return fetch(
    `${BASE_URL}/waInstance${idInstance}/receiveNotification/${ApiTokenInstance}`
  )
    .then((response) => response.json())
    .catch((error) => console.log("error: ", error));
};
