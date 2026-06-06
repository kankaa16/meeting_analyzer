import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Meetings",
      path: "/meetings",
    },
    {
      name: "Analysis",
      path: "/analysis/1",
    },
    {
      name: "Action Items",
      path: "/action-items",
    },
    {
      name: "Overdue",
      path: "/overdue",
    },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>Hintro</h2>
        <p>Meeting Intelligence</p>
      </div>

      <div className="menu">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`menu-item ${
              location.pathname === item.path
                ? "active"
                : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <button className="logout-btn">
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;