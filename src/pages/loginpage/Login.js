import React from "react";
import { useState } from "react";
import { userLogin } from "../../api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./login.style.css";
function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const data = await userLogin(email, password);

      localStorage.setItem("user-email", JSON.stringify(email));

      navigate("/home");
    } catch (error) {
      alert("Wrong Credentials: " + error.message);
      console.log("Login Failed", error);
    }
  }
  return (
    <>
      <h1>
        <center>Login Page</center>
      </h1>

      <div className="main-content">
        <div className="input-bars">
          <input
            className="input-bar"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <input
            className="input-bar"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          ></input>
        </div>
        <button onClick={handleLogin} className="login-btn">
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
