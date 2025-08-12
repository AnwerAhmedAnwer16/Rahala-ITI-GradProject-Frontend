import { useState } from "react";
import AuthLayout from "../../layouts/authLayout";
import Button from "../../components/buttons/buttons";
import SocialButton from "../../components/buttons/socialButton";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = (fieldValues = formData) => {
    let tempErrors = { ...errors };

    if ("firstName" in fieldValues)
      tempErrors.firstName = fieldValues.firstName ? "" : "First name is required";

    if ("lastName" in fieldValues)
      tempErrors.lastName = fieldValues.lastName ? "" : "Last name is required";

    if ("email" in fieldValues)
      tempErrors.email = /\S+@\S+\.\S+/.test(fieldValues.email)
        ? ""
        : "Invalid email format";

    if ("password" in fieldValues)
      tempErrors.password =
        fieldValues.password.length >= 6 ? "" : "Password must be at least 6 characters";

    if ("confirmPassword" in fieldValues)
      tempErrors.confirmPassword =
        fieldValues.confirmPassword === formData.password
          ? ""
          : "Passwords do not match";

    setErrors(tempErrors);

    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("user", JSON.stringify(formData));
      navigate("/login");
    }
  };

  return (
    <AuthLayout>
      <div className="auth-container">
        {/* Left Section */}
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

        {/* Right Section */}
        <div className="form-section">
          <div className="user-card">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              
              <div className="input-group">
                <span className="input-icon"><FaUser /></span>
                <input name="firstName" placeholder="First Name"
                  value={formData.firstName} onChange={handleChange} />
              </div>
              {errors.firstName && <p className="error-text">{errors.firstName}</p>}

              <div className="input-group">
                <span className="input-icon"><FaUser /></span>
                <input name="lastName" placeholder="Last Name"
                  value={formData.lastName} onChange={handleChange} />
              </div>
              {errors.lastName && <p className="error-text">{errors.lastName}</p>}

              <div className="input-group">
                <span className="input-icon"><FaEnvelope /></span>
                <input name="email" placeholder="Email"
                  value={formData.email} onChange={handleChange} />
              </div>
              {errors.email && <p className="error-text">{errors.email}</p>}

              <div className="input-group">
                <span className="input-icon"><FaLock /></span>
                <input type={showPassword ? "text" : "password"} name="password"
                  placeholder="Password" value={formData.password} onChange={handleChange} />
                <span className="input-icon right" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && <p className="error-text">{errors.password}</p>}

              <div className="input-group">
                <span className="input-icon"><FaLock /></span>
                <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword"
                  placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                <span className="input-icon right" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

              <Button text="Register" type="submit" variant="primary" fullWidth />
            </form>

            <div className="divider">OR</div>

            <SocialButton
              icon="https://www.svgrepo.com/show/355037/google.svg"
              text="Continue with Google"
              bgColor="#F9F5E7"
              textColor="#333"
            />
            <SocialButton
              icon="https://www.svgrepo.com/show/448224/facebook.svg"
              text="Continue with Facebook"
              bgColor="#F9F5E7"
              textColor="#333"
            />

            <div className="login-link mt-4 text-center">
              <p>Have an account? <Link to="/login" className="text-green-400 hover:underline">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;