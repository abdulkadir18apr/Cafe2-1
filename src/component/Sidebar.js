import React from "react";

import "./css/sidebar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function SideBar() {
  // const { logoutUser } = useAuthContext();
  return (
    <div className="sidebar">
      <ul className="navList">
        <NavLink to="/home">
          <li>
            <FontAwesomeIcon icon="fa-solid fa-house" />
            <span>Dashboard</span>
          </li>
        </NavLink>
        <NavLink to="/category">
          <li>
            <FontAwesomeIcon icon="fa-solid fa-clock" />
            <span>Manage Category</span>
          </li>
        </NavLink>
        <NavLink to="/bookmark">
          <li>
            <FontAwesomeIcon icon="fa-solid fa-bookmark" />
            <span>Manage Products</span>
          </li>
        </NavLink>
        <NavLink to="/bookmark">
          <li>
            <FontAwesomeIcon icon="fa-solid fa-bookmark" />
            <span>Manage Orders</span>
          </li>
        </NavLink>
        <NavLink to="/bookmark">
          <li>
            <FontAwesomeIcon icon="fa-solid fa-bookmark" />
            <span>View Bill</span>
          </li>
        </NavLink>
        <NavLink to="/bookmark">
          <li>
            <FontAwesomeIcon icon="fa-solid fa-bookmark" />
            <span>Manage Users</span>
          </li>
        </NavLink>
        <NavLink to="/login">
          <li>
            <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
            <span>Logout</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}
