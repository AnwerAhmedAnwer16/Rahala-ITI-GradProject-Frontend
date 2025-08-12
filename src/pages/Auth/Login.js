// src/pages/auth/Login.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/authLayout.js";
import Button from "../../components/buttons/buttons";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./auth.css"; // ← فقط للـ input styles، eye icon، الخ

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      if (value && !/\S+@\S+\.\S+/.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    } else if (name === "password") {
      if (value.length < 6) {
        setErrors((prev) => ({
          ...prev,
          password: "Password must be at least 6 characters",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        navigate("/dashboard");
      } else {
        setErrors({
          email: "Account not found. Please sign up first.",
          password: "Incorrect password or email.",
        });
      }
    }
  };

  return (
    <AuthLayout>
      <div className="auth-container">
      {/* النص على اليسار */}
      <div className="text-section">
        <div className="header">
          <h1 className="brand-title">RAHALA</h1>
          <p className="tagline">The Social Travel Platform for Adventurers</p>
        </div>

        <p className="main-text">
          Join a community of passionate travelers sharing their experiences, discovering new destinations, and inspiring each other to embark on the next adventure.
        </p>

        <div className="features-grid">
          <div className="feature-item">
            <span>Share your trips</span>
          </div>
          <div className="feature-item">
            <span>Discover new destinations</span>
          </div>
          <div className="feature-item">
            <span>Connect with travelers</span>
          </div>
          <div className="feature-item">
            <span>Get inspired</span>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Travelers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">120K+</span>
            <span className="stat-label">Trips Shared</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">195+</span>
            <span className="stat-label">Countries</span>
          </div>
        </div>
      </div>
      {/* فقط الفورم داخل كارد */}
      <div className="form-section">
      <div className="user-card">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <div className="input-group">
            <span className="input-icon"><FaEnvelope /></span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 pl-10 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          {/* Password */}
          <div className="input-group">
            <span className="input-icon"><FaLock /></span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 pl-10 pr-10 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <span
              className="input-icon right"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          <Button text="Login" type="submit" variant="primary" fullWidth />

          <div className="divider">OR</div>

          <button className="social-btn google-btn w-full mb-3">
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" width="20" />
            Continue with Google
          </button>

          <button className="social-btn facebook-btn w-full mb-3">
            <img src="https://www.svgrepo.com/show/448224/facebook.svg" alt="Facebook" width="20" />
            Continue with Facebook
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-olive font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
      </div>
      </div>
    </AuthLayout>
  );
};

export default Login;