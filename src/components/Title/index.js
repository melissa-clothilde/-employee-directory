import React from "react";
import "./style.css";
import logo from "../images/logo.png";

function Title({children}) {
  return (
    <nav className="navbar navbar-inverse fixed-top">
      <div className="container-fluid nav-background">
        <div className="navbar-header">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li><button className="admin-btn" href="#">Welcome Admin!</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Title;