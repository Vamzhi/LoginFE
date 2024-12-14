import React, { useState } from "react";
import "./LoginUI.css";
import SocialButtons from "./SocialButtons";
import InputField from "./InputField";

const LoginUI = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    alert(`Login successful!\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="login-form">
      <h1>
        Welcome to <div className="design">Design School</div>
      </h1>
      <SocialButtons />

      <div className="separator">
        <span>OR</span>
      </div>

      <form onSubmit={handleLogin}>
        {error && <p className="error">{error}</p>}

        
        <InputField
          type="email"
          placeholder="Email"
          icon="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          icon="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        
        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>

      <p className="Register">
        Don't have an account? <a href="#">Register</a>
      </p>
    </div>
  );
};

export default LoginUI;