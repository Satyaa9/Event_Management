// ================= API BASE URL =================
export const API_BASE_URL = "http://localhost:5000/api";

// ================= USER ROLES =================
export const ROLES = {
  STUDENT: "student",
  ADMIN: "admin",
};

// ================= EVENT CATEGORIES =================
export const EVENT_CATEGORIES = [
  "Technical",
  "Cultural",
  "Sports",
  "Workshop",
  "Seminar",
];

// ================= ROUTE PATHS =================
export const ROUTES = {
  LOGIN: "/",
  SIGNUP: "/signup",

  STUDENT_DASHBOARD: "/student/dashboard",
  STUDENT_EVENTS: "/student/events",
  STUDENT_PROFILE: "/student/profile",

  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_EVENTS: "/admin/events",
  ADMIN_ADD_EVENT: "/admin/add-event",
  ADMIN_PROFILE: "/admin/profile",
};

// ================= LOCAL STORAGE KEYS =================
export const STORAGE_KEYS = {
  TOKEN: "token",
  USER: "user",
};

// ================= DEFAULT PAGINATION =================
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
};