import { NavLink, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/user/logout");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <aside className="sidebar">

      <div>

        <div className="logo-section">
          <h2>📝 NotesFlow</h2>
          <p>Personal Workspace</p>
        </div>

        <nav className="sidebar-menu">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "sidebar-item active"
                : "sidebar-item"
            }
          >
            🏠 Dashboard
          </NavLink>

          <NavLink
            to="/pinned"
            className={({ isActive }) =>
              isActive
                ? "sidebar-item active"
                : "sidebar-item"
            }
          >
            📌 Pinned
          </NavLink>

          <NavLink
            to="/archived"
            className={({ isActive }) =>
              isActive
                ? "sidebar-item active"
                : "sidebar-item"
            }
          >
            📦 Archived
          </NavLink>

          <NavLink
            to="/trash"
            className={({ isActive }) =>
              isActive
                ? "sidebar-item active"
                : "sidebar-item"
            }
          >
            🗑 Trash
          </NavLink>

        </nav>

      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;