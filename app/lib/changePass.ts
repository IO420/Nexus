import apiClient from "@/app/lib/apiClient";

export async function changePass(data: any) {
  try {
    const response = await apiClient.post("/user/change-password", data);
    return response.data;
  } catch (error: any) {
    const msg =
      error.response?.data?.error ||
      error.message ||
      "Error desconocido al cobrar impresión";
    return { error: msg };
  }
}
//IO
