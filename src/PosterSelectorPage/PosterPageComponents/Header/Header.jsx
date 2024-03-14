import React, { useState } from "react";
import Cookies from "js-cookie";
import { Navigate, Link, NavLink } from "react-router-dom";
import logo from "/src/assets/images/posterMakerLogo.png";
import profileImage from "./Ellipse.png";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(Cookies.get("token") ? true : false);
  const [dropdown, setDropdown] = useState(false);

  function logout() {
    Cookies.remove("token");
    setLoggedIn(false);
  }

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="header">
        <div>
          <img className="header--logo-image" src={logo} alt="Logo" />
        </div>
        <div className="header--icon-container">
          <button
            onClick={() => setDropdown((prevDropdown) => !prevDropdown)}
            className="log-out-button"
          >
            Options{" "}
          </button>
        </div>
      </div>
      <div className={dropdown ? "header--dropdown" : "display-none"}>
        <div className="header--dropdown-profile-container">
          <img
            src={profileImage}
            className="header--dropdown-profile-image"
            alt="Profile"
          />
          <p className="header--dropdown-profile-text">Your Profile</p>
        </div>
        <hr className="header--dropdown-linebreak" />
        <div className="header--dropdown-menu-container">
          <NavLink className={"header--link"} to="/changedetail">
            <p className="header--dropdown-menu-text">Change Details</p>
          </NavLink>
          <hr className="header--dropdown-menu-linebreak" />
          <p className="header--dropdown-menu-text">Need Help?</p>
          <hr className="header--dropdown-menu-linebreak" />
          <p className="header--dropdown-menu-text" onClick={logout}>
            Log Out
          </p>
          <hr className="header--dropdown-menu-linebreak" />
        </div>
      </div>
    </>
  );
}
