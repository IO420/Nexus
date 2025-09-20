import apiClient from "@/app/lib/apiClient";

export async function PostImpressions(data: any) {
  try {
    const response = await apiClient.post("/operations/impressions", data);
    return response.data;
  } catch (error: any) {
    const msg =
      error.response?.data?.error ||
      error.message ||
      "Error desconocido al cobrar impresión";
    return { error: msg };
  }
}
