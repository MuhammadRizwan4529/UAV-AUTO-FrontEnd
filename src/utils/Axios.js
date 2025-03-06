"use client";
import axios from "axios";

// Axios instance for JSON requests
const axiosJSON = axios.create({
  baseURL: "http://127.0.0.1:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Axios instance for multipart/form-data requests
const axiosForm = axios.create({
  baseURL: "http://127.0.0.1:5000/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

// Example interceptors for axiosJSON
axiosJSON.interceptors.request.use(
  (config) => {
    console.log("JSON Request sent:", config);
    return config;
  },
  (error) => Promise.reject(error)
);

axiosJSON.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("JSON API error:", error);
    return Promise.reject(error);
  }
);

// Example interceptors for axiosForm
axiosForm.interceptors.request.use(
  (config) => {
    console.log("Form Request sent:", config);
    return config;
  },
  (error) => Promise.reject(error)
);

axiosForm.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Form API error:", error);
    return Promise.reject(error);
  }
);

export { axiosJSON, axiosForm };
