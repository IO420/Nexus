import axios from "axios";
import Cookies from "js-cookie";
import { envConfig } from "./config";

if (!envConfig.apiUrl) {
  throw new Error("API URL is not defined in envConfig");
}

const apiClient = axios.create({
  baseURL: envConfig.apiUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        Cookies.remove("token");
        Cookies.remove("user");

        if (
          typeof window !== "undefined" &&
          !window.location.pathname.includes("/")
        ) {
          window.location.href = "/";
        }
      }

      if (status === 403) {
        if (typeof window !== "undefined") {
          window.location.href = "/Impresiones";
        }
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
//IO
//Mike
