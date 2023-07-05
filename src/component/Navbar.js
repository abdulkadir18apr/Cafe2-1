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
          <img src="https://plus.unsplash.com/premium_photo-1663932463883-897e71481fc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGxhdHRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="profile" srcset="" id="logoImage" />
        </NavLink>
      </div>
    </div>
  );
}
