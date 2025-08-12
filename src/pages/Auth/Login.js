import { useState } from "react";
import AuthLayout from "../../layouts/authLayout";
import Button from "../../components/buttons/buttons";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    // هنا هنربطه بالـ API
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold text-olive mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border rounded px-3 py-2"
        />
        <Button text="Login" type="submit" variant="primary" fullWidth />
      </form>
    </AuthLayout>
  );
};

export default Login;
