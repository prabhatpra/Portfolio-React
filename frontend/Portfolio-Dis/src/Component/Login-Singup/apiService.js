// src/services/apiService.js
import axios from "axios";

const BASE_URL = "http://localhost:9298/user";

export const registerUser = async (userData) => {
 
  return await axios.post(`${BASE_URL}/register`, userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const loginUser = async (loginData) => {
 
  return await axios.post(`${BASE_URL}/login`, loginData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
