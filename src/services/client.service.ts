import { SERVER_CONFIG } from "../helpers/constant";
import { Client } from "../helpers/types";
import httpClient from "./index.service";

export async function getClients() {
  try {
    const response = await httpClient.get(SERVER_CONFIG.client);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function saveClients(requestBody: { limit: string }) {
  try {
    const data = await httpClient.post(SERVER_CONFIG.client, requestBody);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateClient(id: string, requestBody: Partial<Client>) {
  try {
    const data = await httpClient.put(
      `${SERVER_CONFIG.client}/${id}`,
      requestBody
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteClient(id: string) {
  try {
    const data = await httpClient.delete(`${SERVER_CONFIG.client}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
}
