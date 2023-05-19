type getChatHistoryParams = {
  chatId: string;
  idInstance: string;
  ApiTokenInstance: string;
};

const BASE_URL = "https://api.green-api.com";

export const getChatHistory = async ({
  chatId,
  idInstance,
  ApiTokenInstance,
}: getChatHistoryParams) => {
  return fetch(
    `${BASE_URL}/waInstance${idInstance}/getChatHistory/${ApiTokenInstance}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        chatId,
      }),
    }
  )
    .then((response) => response.json())
    .catch((error) => console.log("error: ", error));
};
