import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Auth Pages
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

// Student Pages
import StudentDashboard from "../pages/student/Dashboard";
import StudentAllEvents from "../pages/student/AllEvents";
import EventDetails from "../pages/student/EventDetails";
import RegisterEvent from "../pages/student/RegisterEvent";
import StudentProfile from "../pages/student/Profile";
import StudentUpdateProfile from "../pages/student/UpdateProfile";

// Admin Pages
import AdminDashboard from "../pages/admin/Dashboard";
import AdminAllEvents from "../pages/admin/AllEvents";
import AddEvent from "../pages/admin/AddEvent";
import UpdateEvent from "../pages/admin/UpdateEvent";
import DeleteEvent from "../pages/admin/DeleteEvent";
import ShowParticipants from "../pages/admin/ShowParticipants";
import AddCoordinator from "../pages/admin/AddCoordinator";
import AdminProfile from "../pages/admin/Profile";
import AdminUpdateProfile from "../pages/admin/UpdateProfile";

function AppRoutes() {
  const { user } = useContext(AuthContext);

  // Role-Based Protection
  const ProtectedRoute = ({ children, role }) => {
    if (!user) return <Navigate to="/" />;
    if (role && user.role !== role) return <Navigate to="/" />;
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* ================= AUTH ================= */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ================= STUDENT ROUTES ================= */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute role="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/events"
          element={
            <ProtectedRoute role="student">
              <StudentAllEvents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/event/:id"
          element={
            <ProtectedRoute role="student">
              <EventDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/register/:id"
          element={
            <ProtectedRoute role="student">
              <RegisterEvent />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/profile"
          element={
            <ProtectedRoute role="student">
              <StudentProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/update-profile"
          element={
            <ProtectedRoute role="student">
              <StudentUpdateProfile />
            </ProtectedRoute>
          }
        />

        {/* ================= ADMIN ROUTES ================= */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/events"
          element={
            <ProtectedRoute role="admin">
              <AdminAllEvents />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-event"
          element={
            <ProtectedRoute role="admin">
              <AddEvent />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/update-event/:id"
          element={
            <ProtectedRoute role="admin">
              <UpdateEvent />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/delete-event/:id"
          element={
            <ProtectedRoute role="admin">
              <DeleteEvent />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/participants/:id"
          element={
            <ProtectedRoute role="admin">
              <ShowParticipants />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-coordinator"
          element={
            <ProtectedRoute role="admin">
              <AddCoordinator />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/profile"
          element={
            <ProtectedRoute role="admin">
              <AdminProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/update-profile"
          element={
            <ProtectedRoute role="admin">
              <AdminUpdateProfile />
            </ProtectedRoute>
          }
        />

        {/* ================= UNKNOWN ROUTE ================= */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;