import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔥 Default Route → Direct Dashboard */}
        <Route path="/" element={<Signup />} />

        {/* If you want Admin dashboard default instead */}
        {/* <Route path="/" element={<AdminDashboard />} /> */}

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/events" element={<StudentAllEvents />} />
        <Route path="/student/event/:id" element={<EventDetails />} />
        <Route path="/student/register/:id" element={<RegisterEvent />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/update-profile" element={<StudentUpdateProfile />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/events" element={<AdminAllEvents />} />
        <Route path="/admin/add-event" element={<AddEvent />} />
        <Route path="/admin/update-event/:id" element={<UpdateEvent />} />
        <Route path="/admin/delete-event/:id" element={<DeleteEvent />} />
        <Route path="/admin/participants/:id" element={<ShowParticipants />} />
        <Route path="/admin/add-coordinator" element={<AddCoordinator />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/update-profile" element={<AdminUpdateProfile />} />

        {/* Unknown Route Redirect */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;