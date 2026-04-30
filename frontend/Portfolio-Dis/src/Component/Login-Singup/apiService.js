// src/services/apiService.js
import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:9298/user";

/**
 * REGISTER USER
 */
export const registerUser = (userData) => {
  return axios.post(`${BASE_URL}/register`, userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

/**
 * LOGIN USER
 */
export const loginUser = (loginData) => {
  return axios.post(`${BASE_URL}/login`, loginData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};