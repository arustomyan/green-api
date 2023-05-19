type sessionApiParams = {
  idInstance: string;
  ApiTokenInstance: string;
};

const BASE_URL = "https://api.green-api.com";

export const sessionApi = async ({
  idInstance,
  ApiTokenInstance,
}: sessionApiParams) => {
  return fetch(
    `${BASE_URL}/waInstance${idInstance}/getStateInstance/${ApiTokenInstance}`
  )
    .then((response) => response.json())
    .catch((error) => console.log("error: ", error));
};
