import httpClient from "./index.service";

export async function getProjects() {
  try {
    const response = await httpClient.get("project");
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}
