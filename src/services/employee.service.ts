import { SERVER_CONFIG } from "../helpers/constant";
import { Employee } from "../helpers/types";
import httpClient from "./index.service";

export async function getEmployees(
  skip: number,
  limit: number,
  field: string,
  value: string
) {
  const Field = "&searchField=" + field;
  const Value = "searchValue=" + value;

  try {
    const response = await httpClient.get(
      `${SERVER_CONFIG.employee}?skip=${skip}&limit=${limit}${
        field && value && Field + "&" + Value
      }`
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export async function saveEmployees(requestBody: any) {
  try {
    const response = await httpClient.post(SERVER_CONFIG.employee, requestBody);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function updateEmployee(
  id: string,
  requestBody: Partial<Employee>
) {
  try {
    const response = await httpClient.put(
      `${SERVER_CONFIG.employee}/${id}`,
      requestBody
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteEmployee(id: string) {
  try {
    const response = await httpClient.delete(`${SERVER_CONFIG.employee}/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
}
