import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
// import email from "../images/email.png";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="header-title">
          <h1 className="header-title">Nate Voisan</h1>
        </Link>
        <div className="nav-group">
          <Link to="/about" className="header-nav glowtoo">
            <nav className="header-nav">About</nav>
          </Link>
          <Link to="/contact" className="header-nav glowtoo">
            <nav className="header-nav">Contact</nav>
          </Link>
          <p className='bar'>|</p>
          {/* <a href="mailto:nate.voisan@gmail.com" className="header-icon glowtoo">
            <img src={email} alt="email" height="30px" width="30px" className='glowtoo' />
          </a> */}
          <a href="https://www.linkedin.com/in/nate-voisan" className="header-icon glowtoo">
            <img src={linkedin} alt="linkedin" height="25px" width="30px" className='glowtoo' />
          </a>
          <a href="https://github.com/NateVoisan" className="header-icon glowtoo">
            <img src={github} alt="github" height="30px" width="30px" className='glowtoo' />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
