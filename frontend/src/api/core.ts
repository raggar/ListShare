import axios from "axios";
import { QueryClient } from "react-query";

const api = axios.create({
  baseURL: "http://localhost:8000/",
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
