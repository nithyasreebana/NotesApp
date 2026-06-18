import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";

function Navbar() {
  const navigate = useNavigate();

  const { user, setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await api.post("/user/logout");

      setUser(null);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/dashboard">
          Notes App
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link" to="/dashboard">
            All Notes
          </Link>

          <Link className="nav-link" to="/pinned">
            Pinned
          </Link>

          <Link className="nav-link" to="/archived">
            Archived
          </Link>

          <Link className="nav-link" to="/trash">
            Trash
          </Link>

        </div>

        <div className="d-flex align-items-center">

          <span className="text-white me-3">
            Hi, {user?.name || user?.email}
          </span>

          <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;