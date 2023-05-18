import { chatList } from "./model/chatList";

const BASE_URL = "https://api.green-api.com";

export const getChatList = async (): Promise<chatList> => {
  const idInstance = localStorage.getItem("idInstance");
  const ApiTokenInstance = localStorage.getItem("ApiTokenInstance");

  return fetch(
    `${BASE_URL}/waInstance${idInstance}/getChats/${ApiTokenInstance}`
  )
    .then((response) => response.json())
    .catch((error) => console.log("error: ", error));
};
