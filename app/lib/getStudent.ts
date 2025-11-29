import axios from "axios";
import { envConfig } from "./config";
import apiClient from "./apiClient";

export async function GetStudent(numAcount: number) {
  try {
    const response = await apiClient.get(
      `/student/${numAcount}`
    );

    return response.data;
  } catch (error: any) {
    const msg =
      error.response?.data?.message ||
      error.message ||
      "Error desconocido al obtener estudiante";
    return { error: msg };
  }
}
//IO
