import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="d-flex">

      <Sidebar />

      <main
        className="flex-grow-1"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(180deg,#f8fafc,#eef2ff)",
          padding: "40px",
        }}
      >
        {children}
      </main>

    </div>
  );
}

export default MainLayout;