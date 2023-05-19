import { BASE_URL } from "../BASE_URL";
import { chatList } from "./model/chatList";

type getChatListParams = {
  idInstance: string;
  ApiTokenInstance: string;
};

export const getChatList = async ({
  idInstance,
  ApiTokenInstance,
}: getChatListParams): Promise<chatList> => {
  return fetch(
    `${BASE_URL}/waInstance${idInstance}/getChats/${ApiTokenInstance}`
  )
    .then((response) => response.json())
    .catch((error) => console.log("error: ", error));
};
