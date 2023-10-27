import { SERVER_CONFIG } from "../helpers/constant";
import { Project } from "../helpers/types";
import httpClient from "./index.service";

export async function getProjects() {
  try {
    const response = await httpClient.get(SERVER_CONFIG.project);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function saveProjects(requestBody: { limit: string }) {
  try {
    const response = await httpClient.post(SERVER_CONFIG.project, requestBody);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function updateProject(id: string, requestBody: Partial<Project>) {
  try {
    const response = await httpClient.put(
      `${SERVER_CONFIG.project}/${id}`,
      requestBody
    );
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function deleteProject(id: string) {
  try {
    const response = await httpClient.delete(`${SERVER_CONFIG.project}/${id}`);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}
