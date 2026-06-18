import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Archived from "../pages/Archived";
import Pinned from "../pages/Pinned";
import Trash from "../pages/Trash";
import ProtectedRoute from "./ProtectedRoute";
import LandingPage from "../pages/LandingPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/archived" element={<ProtectedRoute><Archived /></ProtectedRoute>} />
      <Route path="/pinned" element={<ProtectedRoute><Pinned /></ProtectedRoute>} />
      <Route path="/trash" element={<ProtectedRoute><Trash /></ProtectedRoute>} />
    </Routes>
  );
}

export default AppRoutes;