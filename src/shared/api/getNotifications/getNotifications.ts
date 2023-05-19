import { BASE_URL } from "../BASE_URL";

type getNotificationsParams = {
  idInstance: string;
  ApiTokenInstance: string;
};

export const getNotifications = async ({
  idInstance,
  ApiTokenInstance,
}: getNotificationsParams) => {
  return fetch(
    `${BASE_URL}/waInstance${idInstance}/receiveNotification/${ApiTokenInstance}`
  )
    .then((response) => response.json())
    .catch((error) => console.log("error: ", error));
};
