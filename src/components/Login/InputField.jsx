import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({ type, placeholder, icon, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const Icon = icon === "email" ? FaEnvelope : FaLock;
  const isPassword = icon === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="input-group">
      <Icon className="icon" />
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
      
      {isPassword && (
        <span
          className="toggle-password"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEyeSlash className="icon" /> : <FaEye className="icon" />}
        </span>
      )}
    </div>
  );
};

export default InputField;