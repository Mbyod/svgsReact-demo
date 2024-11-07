import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import homeLogo from "../../img/logo.png";
import burgerIcon from "../../img/burger-menu.png";
const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";

  const [isOpen, setOPen] = useState();
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo-link">
            <img src={homeLogo} className="home-logo" alt="logo" />
          </NavLink>
          <div className={`header__nav-list ${isOpen ? "active" : ""}`}>
            <ul className="nav-list">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <li className="nav-list__item">Home</li>
              </NavLink>
              <NavLink
                to="/artists"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <li className="nav-list__item">Artists</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <li className="nav-list__item">About</li>
              </NavLink>
            </ul>
          </div>
          <button
            className="header__menu-icon"
            onClick={() => setOPen(!isOpen)}
          >
            <img
              src={burgerIcon}
              className="header__menu-icon--pic"
              alt="menu"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
