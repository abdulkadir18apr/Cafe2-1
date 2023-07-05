import React from "react";

import "./css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-center">
        <h3>Cafe Corner</h3>
        <p>Building a Hive of Cafe Experience</p>
      </div>
      <div className="navbar-profile">
        <FontAwesomeIcon icon="fa-solid fa-moon icon" />
        <NavLink to={`/home`}>
          <img src="https://images.unsplash.com/photo-1530174883092-c2a7aa3f1cfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="profile" srcset="" />
        </NavLink>
      </div>
    </div>
  );
}
