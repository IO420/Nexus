import apiClient from "./apiClient";

export async function PostReceipt(data: any) {
  try {
    const response = await apiClient.post("/recibo", data);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    const msg =
      error.response?.data?.message ||
      error.message ||
      "Error desconocido al crear recibo";
    return { error: msg };
  }
}
