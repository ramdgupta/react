import * as React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/images/EAIF-Logo.png";
import userIcon from "../assets/images/user.png";
import { Nav } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
const navigate=useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout=()=>{
    navigate("/");
    localStorage.clear();
    handleClose();
  }
 

  return (
    <header className="header">
      <div className="header-left">
        <NavLink to="/dashboard">
          <img src={logo} alt="Logo" className="app-logo" />
        </NavLink>
      </div>
      <Nav className="me-auto ">
        <Nav role="button" className="btn">
          {(path.startsWith("/business/") ||
            path.startsWith("/experiment/")) && (
            <NavLink
              to="/business/template/search"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Business Solution Templates
            </NavLink>
          )}
        </Nav>
        <Nav className="btn">
          {(path.startsWith("/experiment/") ||
            path.startsWith("/business/")) && (
            <NavLink to="/experiment/template/search">Experiments</NavLink>
          )}
        </Nav>
      </Nav>
      <div className="header-right">
        <div>
          <span className="user-name">Amar Chaudhary</span>
          <span className="user-role">AI Engineer</span>
        </div>
        <img
          src={userIcon}
          alt="User Avatar"
          onClick={handleClick}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
