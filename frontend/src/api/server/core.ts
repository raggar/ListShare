import axios from "axios";
import { QueryClient } from "react-query";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    token: localStorage.getItem("token") ?? "",
  },
});

export const queryCache = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default api;
