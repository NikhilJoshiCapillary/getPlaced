import React, { useState } from "react";
import "./authentication.css";
import { userRegister } from "../../api.js";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await userRegister(firstName, email, password);
      setMessage(data.message);
      navigate("/login"); // Display success message from backend
    } catch (error) {
      alert(error.message);
      setMessage(error.message); // Display error message
    }
  };

  function directLogin() {
    navigate("/login");
  }

  return (
    <>
      <div className="register-header">
        <h1>
          <center>Register Page</center>
        </h1>
      </div>

      <div className="main-content">
        <div className="inner-content">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="firstName">First Name:</label>
              <input
                id="firstName"
                className="input-field"
                placeholder="Enter your First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email Id:</label>
              <input
                id="email"
                className="input-field"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                className="input-field"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="register-btn">
              Register
            </button>
          </form>
        </div>
        {message && <p>{message}</p>}
      </div>

      <div className="login-area">
        <p>Already Registered?</p>
        <button onClick={directLogin} className="login-btn">
          Login
        </button>
      </div>
    </>
  );
}

export default Register;
