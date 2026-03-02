import axios from "axios";
import { API_URL } from "../config/env";

const axiosClient = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    Authorization: JSON.parse(localStorage.getItem("auth"))?.token,
  },
});

export { axiosClient };
