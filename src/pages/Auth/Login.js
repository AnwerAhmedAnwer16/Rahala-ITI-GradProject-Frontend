import { useState } from "react";
import AuthLayout from "../../layouts/authLayout";
import Button from "../../components/buttons/buttons";
import SocialButton from "../../components/buttons/socialButton";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = (fieldValues = formData) => {
    let tempErrors = { ...errors };

    if ("email" in fieldValues)
      tempErrors.email = /\S+@\S+\.\S+/.test(fieldValues.email)
        ? ""
        : "Invalid email format";

    if ("password" in fieldValues)
      tempErrors.password =
        fieldValues.password.length >= 6 ? "" : "Password must be at least 6 characters";

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

  // ✅ التشييك على بيانات المستخدم المحفوظة
  if (Object.keys(newErrors).length === 0) {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.email === formData.email && savedUser.password === formData.password) {
      navigate("/home");
    } else {
      setErrors({ form: "No account found with these credentials" });
    }
  }
};
  return (
    <AuthLayout>
      <div className="auth-container">
        {/* Left Text Section */}
        <div className="text-section">
          <h1 className="brand-title">RAHALA</h1>
          <p className="tagline">Welcome back, traveler!</p>
          <p className="main-text">
            Log in to connect with fellow adventurers and continue exploring new destinations.
          </p>
        </div>

        {/* Right Form Section */}
        <div className="form-section">
          <div className="user-card">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            {errors.form && <p className="error-text text-center">{errors.form}</p>}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="input-group">
                <span className="input-icon"><FaEnvelope /></span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              {errors.email && <p className="error-text">{errors.email}</p>}

              <div className="input-group">
                <span className="input-icon"><FaLock /></span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
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

              <Button text="Login" type="submit" variant="primary" fullWidth />
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
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-green-400 hover:underline">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
