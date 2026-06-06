import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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
    await api.post(
      "/auth/register",
      form
    );

    navigate("/");
  } catch (error) {
    alert(
      error?.response?.data?.error
        ?.message ||
        "Registration failed"
    );
  }
};

  return (
    <div className="auth-page">
      <div className="auth-card register-card">
        <div className="auth-header">
          <h1>Create Account</h1>

          <p>
            Start managing meetings smarter.
          </p>
        </div>

        <form onSubmit={handle_submit}>
          <div className="input-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handle_change}
            />
          </div>

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
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;