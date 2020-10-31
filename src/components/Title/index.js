import React from "react";
import "./style.css";
import logo from "../../assets/logo/logo.png";

function Title({ children }) {
  return (
    <nav className="navbar navbar-fixed-top">     
        <img src={logo} alt="logo" href="#" className="navbar-brand img-fluid img-thumbnail logo"/>
      {/* <h1 className="title p-3 my-3 bg-dark text-white">{children}</h1> */}
      <ul class="nav navbar-nav navbar-right">
        <li className="welcome">Welcome Admin!</li>
        </ul>
    </nav>
  );
}

export default Title;