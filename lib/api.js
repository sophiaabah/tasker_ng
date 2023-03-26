import axios from "axios";

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TASKER_BASE_URL,
  headers: {
    "X-API-KEY": process.env.NEXT_PUBLIC_TASKER_API_KEY,
    "Content-Type": "application/json",
  },
});

export default Api;
