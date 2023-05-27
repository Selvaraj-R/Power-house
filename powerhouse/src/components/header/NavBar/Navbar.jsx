import React from "react";
import "./navbar.css"
const nav_links = [
  {
    path: "#",
    name: "home",
    icon: "ri-home-line"
  },
  {
    path: "#",
    name: "schedule",
    icon: "ri-calendar-line"

  },
  {
    path: "#",
    name: "classes",
    icon: "ri-add-box-line"

  },
  {
    path: "#",
    name: "pricing",
    icon: "ri-price-tag-3-line"

  },
];

const Navbar = () => {
  return (
    <div className="Nav-Bar">
      <ul className="menu">
        {nav_links.map((item) => (
          <li className="nav_item">
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
