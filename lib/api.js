import axios from "axios";

const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TASKER_BASE_URL,
  headers: {
    "X-API-KEY": process.env.NEXT_PUBLIC_TASKER_API_KEY,
    "Content-Type": "application/json",
  },
});

export async function createProvider(userData) {
  const { data } = await Api().post("/provider", userData);

  return data;
}

export async function updateProvider(userData, id) {
  const { data } = await Api().put(`/provider/${id}`, userData);

  return data;
}

export async function uploadProfilePicture(file) {
  const formData = new FormData();
  formData.append("photo", file);

  const { data } = await Api().request({
    method: "post",
    url: "photo/upload",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
}

export async function fetchProvider(id) {
  const { data } = await Api().get(`/provider/${id}`);

  return data;
}

export default Api;
