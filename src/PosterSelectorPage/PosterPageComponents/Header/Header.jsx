import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import logo from "/src/assets/images/posterMakerLogo.png";

export default function Header() {
  const [loggedIn, setLoggedIn] = React.useState(
    Cookies.get("token") ? true : false
  );
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }
  function logout() {
    Cookies.remove("token");
    setLoggedIn(false);
  }
  return (
    <div className="header">
      <div>
        <img className="header--logo-image" src={logo} />
      </div>
      <div className="header--icon-container">
        <button onClick={logout} className="log-out-button">
          Back{" "}
        </button>
      </div>
    </div>
  );
}
