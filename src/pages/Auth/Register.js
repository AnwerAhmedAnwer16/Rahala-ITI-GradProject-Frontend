import { useState } from "react";
import AuthLayout from "../../layouts/authLayout";
import Button from "../../components/buttons/buttons";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./auth.css";
import { Link } from "react-router-dom";
 
const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  
  // إظهار/إخفاء كلمات المرور
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation on change (باقٍ كما هو)
    if (name === "email") {
      if (value && !/\S+@\S+\.\S+/.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    } else if (name === "password") {
      if (value.length < 6) {
        setErrors((prev) => ({ ...prev, password: "Password must be at least 6 characters" }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    } else if (name === "confirmPassword") {
      if (value !== formData.password) {
        setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match" }));
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: "" }));
      }
    } else if (name === "firstName" || name === "lastName") {
      if (!value.trim()) {
        setErrors((prev) => ({
          ...prev,
          [name]: `${name === "firstName" ? "First" : "Last"} name is required`
        }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
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

      {/* الفورم على اليمين */}
      <div className="form-section">
        <div className="user-card">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="input-group">
              <span className="input-icon"><FaUser /></span>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            {errors.firstName && <p className="error-text">{errors.firstName}</p>}

            {/* Last Name */}
            <div className="input-group">
              <span className="input-icon"><FaUser /></span>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            {errors.lastName && <p className="error-text">{errors.lastName}</p>}

            {/* Email */}
            <div className="input-group">
              <span className="input-icon"><FaEnvelope /></span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <p className="error-text">{errors.email}</p>}

            {/* Password */}
            <div className="input-group">
              <span className="input-icon"><FaLock /></span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                className="input-icon right"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && <p className="error-text">{errors.password}</p>}

            {/* Confirm Password */}
            <div className="input-group">
              <span className="input-icon"><FaLock /></span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <span
                className="input-icon right"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{ cursor: "pointer" }}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

          <Button text="Register" type="submit" variant="primary" fullWidth />
          </form>

          <div className="divider">OR</div>

          <button className="social-btn google-btn w-full mb-3">
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" width="20" />
            Continue with Google
          </button>

          <button className="social-btn facebook-btn w-full mb-3">
            <img src="https://www.svgrepo.com/show/448224/facebook.svg" alt="Facebook" width="20" />
            Continue with Facebook
          </button>

          {/* Have an account? Login */}
          <div className="login-link mt-4 text-center">
            <p>
              Have an account?{" "}
              <Link to="/login" className="text-green-400 hover:underline font-medium">
  Login
</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </AuthLayout>
  );
};

export default Register;