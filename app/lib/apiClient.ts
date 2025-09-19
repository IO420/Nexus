import axios from "axios";
import Cookies from "js-cookie";
import { envConfig } from "./config";

const apiClient = axios.create({
  baseURL: envConfig.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  console.log(token)
  if (token) {
    if (config.headers && "set" in config.headers) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
  }
  return config;
});

export default apiClient;
