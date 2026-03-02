import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    Authorization: JSON.parse(localStorage.getItem("auth")).token,
  },
});

export { axiosClient };
