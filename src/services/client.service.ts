import httpClient from "./index.service";

export async function getClients() {
  try {
    const response = await httpClient.get("client");
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function saveClients(requestBody: { limit: number }) {
  try {
    const data = await httpClient.post("client", requestBody);
    return data;
  } catch (error) {
    console.error(error);
  }
}
