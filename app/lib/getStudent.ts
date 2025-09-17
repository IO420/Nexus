import axios from "axios";
import { envConfig } from "./config";

export async function GetStudent(numAccount: number) {
  try {
    const response = await axios.get(`${envConfig.apiUrl}/student/${numAccount}`);
    return response.data;
  } catch (error: any) {
    const msg =
      error.response?.data?.message ||
      error.message ||
      "Error desconocido al obtener estudiante";
    return { error: msg };
  }
}
