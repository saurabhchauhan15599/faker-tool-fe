import httpClient from "./index.service";

export async function getEmployees() {
  try {
    const response = await httpClient.get("employee");
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}
