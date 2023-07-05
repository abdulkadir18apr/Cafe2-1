import React, { useState } from "react";

import "./auth.css";
import { NavLink, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export function Login() {
  const location = useLocation();
  const [credentials, setCredentials] = useState({});
  const [isLoginRoute, setIsLoginRoute] = useState(
    location?.pathname === "/" ? true : false
  );
  const { userLogin, userSignup } = useAuthContext();

  const inputChangeHandler = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const LoginButtonClickHandler = async (e) => {
    e.preventDefault();
    if (isLoginRoute) {
      console.log(credentials);
      await userLogin(credentials);
      setCredentials({});
    } else {
      // await userSignup(credentials);
      setCredentials({});
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <h1>DevHive</h1>
        <h2>Login</h2>
        <form>
          {!isLoginRoute && (
            <input
              type="text"
              name="name"
              id="firstName"
              placeholder="NAME"
              value={credentials?.name}
              onChange={inputChangeHandler}
            />
          )}{" "}
          {!isLoginRoute && (
            <input
              type="text"
              name="contactNumber"
              id="lastName"
              placeholder="contactNumber"
              value={credentials?.contactNumber}
              onChange={inputChangeHandler}
            />
          )}
          <input
            type="email"
            name="email"
            id="username"
            placeholder="Email"
            value={credentials?.email}
            onChange={inputChangeHandler}
          />
          {/* <label htmlFor="password">Password:</label> */}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="PASSWORD"
            value={credentials?.password}
            onChange={inputChangeHandler}
          />
          <button
            className="primaryBtn"
            onClick={(e) => LoginButtonClickHandler(e)}
          >
            {isLoginRoute ? "Login" : "Signup"}
          </button>
          {/* <button className='primaryBtn' style={{display:!isLoginRoute && "none"}} onClick={testLoginClickHandler}>{isLoginRoute?"Test Login":"Signup"}</button> */}
          <NavLink
            to={isLoginRoute ? "../signup" : "../login"}
            onClick={() => setIsLoginRoute((val) => !val)}
          >
            {isLoginRoute ? "New Here?" : "Already a user?"}
          </NavLink>
        </form>
      </div>
    </div>
  );
}
