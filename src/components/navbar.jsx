import React from "react";
import "./navbar.css";
import { unlink } from "fs";

const NavBar = ({ nav }) => {
  return (
    <nav className="navbar">
      <a href="https://www.docplanner.com/about-us">
        <img
          className="logo-docplanner"
          src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
          alt="Docplanner Group"
        />
      </a>
      <div className="navlist">
        {nav.map(e => (
          <a
            className={
              (e.title === "About us" ? "about-us-link" : "") +
              (e.title === "departements" ? "dropdown-point" : "")
            }
          >
            {e.title}
            {e.dropdown ? (
              <div className="dropdown-content">
                <ul>
                  {e.dropdown.map(e => (
                    <li>
                      <a href="#" className="drop-down-link">
                        {e}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
