import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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
      const res = await api.post(
        "/user/register",
        form
      );

      toast.success("Registration Successful");

      setForm({
        name: "",
        email: "",
        password: "",
      });

      navigate("/login");

    } catch (err) {
      toast.error("Registration Failed");
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
              fontSize: "4rem",
            }}
          >
            📝 Notes Management System
          </h1>

          <p
            className="mt-4"
            style={{
              fontSize: "1.3rem",
            }}
          >
            Create your account and start
            organizing your ideas in a
            beautiful and secure workspace.
          </p>

          <div className="mt-5">

            <h4>✓ Create Notes</h4>

            <h4>✓ Pin Important Notes</h4>

            <h4>✓ Archive & Restore</h4>

            <h4>✓ Smart Search</h4>

            <h4>✓ Secure Authentication</h4>

          </div>

        </div>

        {/* Right Side */}
        <div className="col-lg-6 d-flex justify-content-center align-items-center">

          <div
            className="shadow-lg p-5"
            style={{
              width: "500px",
              borderRadius: "25px",
              background: "white",
            }}
          >

            <h2
              className="text-center fw-bold mb-3"
            >
              Create Account
            </h2>

            <p
              className="text-center text-muted mb-4"
            >
              Join Notes Management System
            </p>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
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
                Create Account
              </button>

            </form>

            <p className="text-center mt-4">

              Already have an account?

              <Link
                to="/login"
                className="ms-2 text-decoration-none"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;