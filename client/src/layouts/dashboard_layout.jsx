import Sidebar from "../components/sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;