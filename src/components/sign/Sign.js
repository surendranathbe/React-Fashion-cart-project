import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Imagesliding from "../../Assets/images/Imagesliding";
import "./Sign.css";

export default function Sign() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Validation logic
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.fname.trim()) {
      formErrors.fname = "First name is required";
      isValid = false;
    }
    if (!formData.lname.trim()) {
      formErrors.lname = "Last name is required";
      isValid = false;
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Enter a valid email address";
      isValid = false;
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Submit handler
  const signvalidation = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Signup successful ✅");
      navigate("/kids"); // redirect to kids page
    }
  };

  return (
    <div>
      <Imagesliding />
      <h4>Sign Up Form</h4>

      <div className="form-container">
        <form onSubmit={signvalidation}>
          <label>First name :</label>
          <input
            type="text"
            id="fname"
            placeholder="Enter first name"
            value={formData.fname}
            onChange={handleChange}
          />
          {errors.fname && <p className="error">{errors.fname}</p>}

          <label>Last name :</label>
          <input
            type="text"
            id="lname"
            placeholder="Enter last name"
            value={formData.lname}
            onChange={handleChange}
          />
          {errors.lname && <p className="error">{errors.lname}</p>}

          <label>Email :</label>
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Password : </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">Sign Up</button>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="login-link">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
