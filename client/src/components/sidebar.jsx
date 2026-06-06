import { Link, useLocation } from "react-router-dom";
import {
  useNavigate,
} from "react-router-dom";
function Sidebar() {
  const location = useLocation();
const navigate =
  useNavigate();

const handleLogout =
  () => {

    localStorage.removeItem(
      "token"
    );

    navigate("/");
  };
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

      <button
  className="logout-btn"
  onClick={
    handleLogout
  }
>
  Logout
</button>
    </aside>
  );
}

export default Sidebar;