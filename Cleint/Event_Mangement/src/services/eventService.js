import axios from "axios";

// Base API URL
const API_URL = "http://localhost:5000/api/events";

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
});

// Attach JWT token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ================= GET ALL EVENTS =================
export const getAllEvents = async () => {
  const response = await api.get("/");
  return response;
};

// ================= GET SINGLE EVENT =================
export const getEventById = async (id) => {
  const response = await api.get(`/${id}`);
  return response;
};

// ================= ADD EVENT (Admin) =================
export const createEvent = async (data) => {
  const response = await api.post("/", data);
  return response;
};

// ================= UPDATE EVENT (Admin) =================
export const updateEvent = async (id, data) => {
  const response = await api.put(`/${id}`, data);
  return response;
};

// ================= DELETE EVENT (Admin) =================
export const deleteEventById = async (id) => {
  const response = await api.delete(`/${id}`);
  return response;
};

// ================= REGISTER EVENT (Student) =================
export const registerForEvent = async (id) => {
  const response = await api.post(`/${id}/register`);
  return response;
};