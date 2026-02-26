import axios from "axios";

// 🔥 BASE URL only (NO /signup here)
const API_URL = "http://localhost:5000/api/student";

export const signupUser = async (data) => {
  return axios.post(`${API_URL}/signup`, data);
};

export const loginUser = async (data) => {
  return axios.post(`${API_URL}/login`, data);
};