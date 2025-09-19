import axios from "axios";
import { envConfig } from "./config";

export async function loginUser(usuario: string, password: string) {
  try {
    const response = await axios.post(`${envConfig.apiUrl}/user`, {
      usuario,
      password,
    });
    return response.data;
  } catch (error: any) {
    const msg =
      error.response?.data?.message ||
      error.message ||
      "Error desconocido en el login";
    return { error: msg };
  }
}
