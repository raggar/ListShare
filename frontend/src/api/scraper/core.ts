import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SCRAPER_URL,
  headers: {
    token: localStorage.getItem("token") ?? "",
  },
});

export default api;
