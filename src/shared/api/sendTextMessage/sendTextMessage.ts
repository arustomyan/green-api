type sendTextMessageParams = {
  message: string;
  chatId: string;
};

const BASE_URL = "https://api.green-api.com";

export const sendTextMessage = async ({
  message,
  chatId,
}: sendTextMessageParams) => {
  const idInstance = localStorage.getItem("idInstance");
  const ApiTokenInstance = localStorage.getItem("ApiTokenInstance");

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
