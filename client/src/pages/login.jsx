import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handle_change = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handle_submit = async (e) => {
  e.preventDefault();

  try {
    const res = await api.post(
      "/auth/login",
      form
    );

    localStorage.setItem(
      "token",
      res.data.data.token
    );

    navigate("/dashboard");
  } catch (error) {
    alert(
      error?.response?.data?.error
        ?.message || "Login failed"
    );
  }
};

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Hintro</h1>
          <p>Meeting Intelligence Platform</p>
        </div>

        <form onSubmit={handle_submit}>
          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handle_change}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handle_change}
            />
          </div>

          <button className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-footer">
          New here?{" "}
          <Link to="/register">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;