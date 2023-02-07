import axios from "axios";
import Router from "next/router";

const Api = () => {
  const apiKey = "a3421fb0-a671-41bf-bc9c-dfea235197bc";

  const instance = axios.create({
    baseURL: "https://taskernow.onrender.com",
    headers: {
      "X-API-KEY": "a3421fb0-a671-41bf-bc9c-dfea235197bc",
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
  );

  const responseHandler = (response) => {
    console.log("request succesful");
    return response;
  };

  const errorHandler = (error) => {
    console.log("request not successful", error.response.status);
    // if (error.response.status === 401) {
    //   Router.push({
    //     pathname: "/",
    //   });
    // }

    return Promise.reject(error);
  };
  return instance;
};

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
