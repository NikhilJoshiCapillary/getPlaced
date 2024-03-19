import React from "react";
import "./navbar.style.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  function handleLogout() {
    navigate("/");
  }
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            {" "}
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <button
              className="logout-btn"
              onClick={() => {
                handleLogout();
              }}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
