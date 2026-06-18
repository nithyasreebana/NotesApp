import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Login user
      await api.post("/user/login", form);

      // Fetch logged in user details
      const userRes = await api.get("/user/me");

      // Save user in AuthContext
      setUser(userRes.data.user);

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      toast.error("Login Failed");
    }
  };

  return (
  <div className="container-fluid vh-100">

    <div className="row h-100">

      {/* Left Side */}
      <div
        className="col-lg-6 d-none d-lg-flex flex-column justify-content-center text-white px-5"
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)",
        }}
      >

        <h1
          className="fw-bold"
          style={{
           fontSize: "2.5rem",
    lineHeight: "1.1",
    letterSpacing: "-1px",
          }}
        >
          📝 Notes Management System
        </h1>

        <p
          className="mt-4"
          style={{
             fontSize: "1rem",
    lineHeight: "1.8",
          }}
        >
          Organize your ideas, tasks,
          and thoughts in one secure
          workspace.
        </p>

        <div className="mt-5">

          <h5>✓ Create Notes</h5>

          <h5>✓ Pin Important Notes</h5>

          <h5>✓ Archive & Restore</h5>

          <h5>✓ Smart Search</h5>

          <h5>✓ Secure Authentication</h5>

        </div>

      </div>

      {/* Right Side */}
      <div className="col-lg-6 d-flex justify-content-center align-items-center">

        <div
          className="shadow-lg p-5"
          style={{
            width: "450px",
            borderRadius: "25px",
            background: "white",
          }}
        >

          <h2
            className="text-center fw-bold mb-4"
          >
            Welcome Back
          </h2>

          <p
            className="text-center text-muted mb-4"
          >
            Login to continue
          </p>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn w-100 text-white"
              style={{
                background:
                  "linear-gradient(135deg,#2563eb,#7c3aed)",
                border: "none",
              }}
            >
              Login
            </button>

          </form>

          <p className="text-center mt-4">

            Don't have an account?

            <Link
              to="/register"
              className="ms-2 text-decoration-none"
            >
              Sign Up
            </Link>

          </p>

        </div>

      </div>

    </div>

  </div>
);
}

export default Login;