import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({items}) => {
  return (
    <div className="sidebar">
    <ul>
      {items?.map((item, index) => (
        <li key={item.name}>
          {item.link ? (
            <NavLink to={item.link}>{item.name}</NavLink>
          ) : (
            item.name
          )}
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Sidebar;
