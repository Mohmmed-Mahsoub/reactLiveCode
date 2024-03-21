import axios from "axios";

export const dynamicAxiosRequest = async ({
  baseUrl,
  endPoint,
  method = "GET",
  body = null,
}) => {
  try {
    const requestHeaders = {
      Accept: "application/json;odata=verbose",
    };

    const ProxyURL =
      localStorage.getItem("ProxyURL") != undefined
        ? localStorage.getItem("ProxyURL")
        : "";

    const response = await axios({
      url: `${ProxyURL}${baseUrl}${endPoint}`,
      method: method,
      data: body,
      headers: requestHeaders,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to be caught by the caller (this make redux to see the error and sign the request as rejected)
  }
};
