import axios from "axios";
import { envConfig } from "./config";

export async function GetSanciones(numAcount: number) {
  try {
    const response = await axios.get(
      `${envConfig.apiUrl}/alumno-sancion/${numAcount}`
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
