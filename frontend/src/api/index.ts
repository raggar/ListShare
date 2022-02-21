import axios from "axios";
import { useQuery, QueryClient } from "react-query";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    token: "random token I guess..",
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
