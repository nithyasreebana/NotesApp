import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e293b,#2563eb)",
        color: "white",
      }}
    >
      {/* Navbar */}
      <nav className="d-flex justify-content-between align-items-center p-4">

        <h3 className="fw-bold">
          📝 Notes Management System
        </h3>

        <div>
          <Link
            to="/login"
            className="btn btn-outline-light me-2"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="btn btn-light"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="container text-center"
        style={{
          marginTop: "120px",
        }}
      >
        <h1
          className="fw-bold"
          style={{
            fontSize: "4rem",
          }}
        >
          Organize Your Notes
        </h1>

        <p
          className="mt-4"
          style={{
            fontSize: "1.3rem",
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          A modern notes management system
          to create, organize, archive,
          pin and restore your ideas
          effortlessly.
        </p>

        <div className="mt-5">

          <Link
            to="/register"
            className="btn btn-warning btn-lg me-3"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="btn btn-outline-light btn-lg"
          >
            Login
          </Link>

        </div>
      </div>

      {/* Features */}
      <div className="container mt-5">

        <div className="row text-center">

          <div className="col-md-3">
            <h4>📝</h4>
            <h5>Create Notes</h5>
          </div>

          <div className="col-md-3">
            <h4>📌</h4>
            <h5>Pin Notes</h5>
          </div>

          <div className="col-md-3">
            <h4>📂</h4>
            <h5>Archive Notes</h5>
          </div>

          <div className="col-md-3">
            <h4>🔍</h4>
            <h5>Search Notes</h5>
          </div>

        </div>

      </div>
    </div>
  );
}

export default LandingPage;