import axios from "axios";

export const dynamicAxiosRequest = async ({
  baseUrl,
  endPoint,
  method = "GET",
  body = null,
  cusomHeaders = {},
}) => {
  try {
    const requestHeaders = {
      Accept: "application/json;odata=verbose",
    };

    const response = await axios({
      url: `${baseUrl}${endPoint}`,
      method: method,
      data: body,
      headers: { ...requestHeaders, ...cusomHeaders },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to be caught by the caller (this make redux to see the error and sign the request as rejected)
  }
};
