type getChatHistoryParams = {
  chatId: string;
};

const BASE_URL = "https://api.green-api.com";

export const getChatHistory = async ({ chatId }: getChatHistoryParams) => {
  const idInstance = localStorage.getItem("idInstance");
  const ApiTokenInstance = localStorage.getItem("ApiTokenInstance");

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
