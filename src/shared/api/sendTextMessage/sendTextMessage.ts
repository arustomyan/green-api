import { BASE_URL } from "../BASE_URL";

type sendTextMessageParams = {
  message: string;
  chatId: string;
  idInstance: string;
  ApiTokenInstance: string;
};

export const sendTextMessage = async ({
  message,
  chatId,
  idInstance,
  ApiTokenInstance,
}: sendTextMessageParams) => {
  fetch(`${BASE_URL}/waInstance${idInstance}/sendMessage/${ApiTokenInstance}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      chatId,
      message,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log("error: ", error));
};
